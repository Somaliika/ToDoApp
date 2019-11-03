import React, { Component } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Box from '@material-ui/core/Box';
import { useQuery } from '@apollo/react-hooks';
import List from '../components/List';
import Counters from '../components/Footer';
import NewTask from '../components/NewTask';
import { GET_TODOS } from '../services/get_todo';

const theme = createMuiTheme({
	spacing: 4,
	palette: {
		primary: blueGrey,
		secondary: deepOrange,
	},
});

const ToDoApp = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;
	return (
		<ThemeProvider theme={theme}>
			<Box id="app" display="flex" flexDirection="column">
				<header style={{flex: 1, maxHeight: 150}}><NewTask/></header>
				<main style={{flex: 3}}><List list={data.todos}/></main>
				<footer style={{flex: 1}}><Counters/></footer>
			</Box>
		</ThemeProvider>
	);

};
export default ToDoApp;