import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import amber from '@material-ui/core/colors/amber';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useQuery, useMutation } from '@apollo/react-hooks';
import List from '../components/List';
import Footer from '../components/Footer';
import NewTask from '../components/NewTask';
import { GET_TODOS, ADD_TODO, TOGGLE_TODO, DESTROY_TODO, CLEAR_TODO, TOGGLE_ALL, EDIT_TODO } from '../services/queries';

const theme = createMuiTheme({
	spacing: 4,
	palette: {
		primary: teal,
		secondary: amber,
	},
});

const ToDoApp = () => {
  /* Apollo react hooks */
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
  const [editTodo] = useMutation(EDIT_TODO,
    {
      update(cache, { data: { save } }) {
        const { todos } = cache.readQuery({ query: GET_TODOS });
        console.log(save);
        todos.forEach(x => {
          if (x.id === save.id)
            x.title = save.title;
        });
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos },
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
  /* Loading view */
  if (response.loading)
    return (
    <Box id="app" display="flex" justifyContent="center" alignItems="center">
      <CircularProgress color="secondary" />
    </Box>
  );
  if (response.error) return <p>Error :(</p>;
  /* Rendering */
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
            editTodo={editTodo}
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