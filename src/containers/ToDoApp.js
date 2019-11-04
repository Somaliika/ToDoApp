import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import amber from '@material-ui/core/colors/amber';
import Box from '@material-ui/core/Box';

import { useQuery, useMutation } from '@apollo/react-hooks';
import List from '../components/List';
import Footer from '../components/Footer';
import NewTask from '../components/NewTask';
import { GET_TODOS, ADD_TODO, TOGGLE_TODO, DESTROY_TODO, CLEAR_TODO, TOGGLE_ALL } from '../services/queries';

const theme = createMuiTheme({
	spacing: 4,
	palette: {
		primary: teal,
		secondary: amber,
	},
});

const ToDoApp = () => {
  const response = useQuery(GET_TODOS);
  const [addTodo] = useMutation(ADD_TODO,
    {
      update(cache, { data: { add } }) {
        const { todos } = cache.readQuery({ query: GET_TODOS });
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: todos.concat([add]) },
        });
      }
    });
  const [toggleTodo] = useMutation(TOGGLE_TODO,
    {
      update(cache, { data: { toggle } }) {
        const { todos } = cache.readQuery({ query: GET_TODOS });
        todos.forEach(x => {
        	if (x.id === toggle.id)
        		x.completed = toggle.completed;
        });
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos },
        });
      }
    });
  const [destroyTodo] = useMutation(DESTROY_TODO,
    {
      update(cache, { data: { destroy } }) {
        const { todos } = cache.readQuery({ query: GET_TODOS });
        const filteredAry = todos.filter(x => x.id !== destroy.id);
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: filteredAry },
        });
      }
    });
  const [clearCompletedTodo] = useMutation(CLEAR_TODO,
    {
      update(cache, { data: { clearCompleted } }) {
        const { todos } = cache.readQuery({ query: GET_TODOS });
        const filteredAry = todos.filter(x => !x.completed);
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: filteredAry },
        });
      }
    });
  const [toggleAll] = useMutation(TOGGLE_ALL,
    {
      update(cache, { data: { toggleAll } }) {
        const { todos } = cache.readQuery({ query: GET_TODOS });
        todos.forEach(x => {
        	for (let toggled of toggleAll) {
            if (x.id === toggled.id) {
              x = toggled;
              break;
            }
          }
        });
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos },
        });
      }
    });
  if (response.loading) return <p>Loading ...</p>;
  if (response.error) return <p>Error :(</p>;
	return (
		<ThemeProvider theme={theme}>
			<Box id="app" display="flex" flexDirection="column">
				<header>
					<NewTask addTodo={addTodo}/>
				</header>
				<main>
					<List
						list={response.data.todos}
						toggleTodo={toggleTodo}
						destroyTodo={destroyTodo}
					/>
				</main>
				<footer>
					<Footer
						clearCompletedTodo={clearCompletedTodo}
						toggleAll={toggleAll}
					/>
				</footer>
			</Box>
		</ThemeProvider>
	);

};
export default ToDoApp;