import React, { Component } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Box from '@material-ui/core/Box';

import List from '../components/List';
import Counters from '../components/Footer';
import NewTask from '../components/NewTask';


const theme = createMuiTheme({
	spacing: 4,
	palette: {
		primary: blueGrey,
		secondary: deepOrange,
	},
	status: {
		danger: 'orange',
	},
});

class App extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		tasks: [
			'First',
			'Second'
		]
	};
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Box id="app" display="flex" flexDirection="column">
					<header style={{flex: 1, maxHeight: 150}}><NewTask/></header>
					<main style={{flex: 3}}><List list={this.state.tasks}/></main>
					<footer style={{flex: 1}}><Counters/></footer>
				</Box>
			</ThemeProvider>
		);
	}

	componentDidMount() {
	}
}
export default App;