import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '../components/TextField';
import { useMutation } from '@apollo/react-hooks';
import { ADD_TODO } from '../services/queries';
import { handleSave } from '../handlers/handlers';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'relative',
		backgroundColor: theme.palette.primary[500],
		width: '100%',
		height: '100%',
	},
	text: {
		flex: 1,
    margin: 15,
	},
	button: {
    position: 'absolute',
		right: 0,
		flex: 1,
		margin: 'auto 25px'
	}
}));

const NewTask = (props) => {
	const classes = useStyles();

  const [todo, setTodo] = useState('');

	return (
		<Box className={classes.root}>
			<TextField
				label="Create new todo"
				variant="filled"
				className={classes.text}
				value={todo}
				onChange={event => setTodo(event.target.value)}
			/>
			<Button
				className={classes.button}
				variant="contained"
				color="secondary"
				onClick={handleSave.bind(this, todo, props.addTodo, setTodo, props.refresh)}
			>
				Save
			</Button>
		</Box>
	);
};
export default NewTask;