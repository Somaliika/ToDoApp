import React from 'react';
import Task from './Task';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    textAlign: 'center',
		margin: 25,
		fontSize: '1.2em',
		color: theme.palette.secondary[500]
  },
}));

const List = (props) => {
  const classes = useStyles();
	return (
		<Box display="flex" flexDirection="column">
			{props.list.length === 0 &&
			<Typography className={classes.text}>
				There is no tasks
			</Typography>}
		{
			props.list.map((task, index) => {
				return (
					<Task
						key={index}
						task={task}
						last={index === props.list.length - 1}
						toggleTodo={props.toggleTodo}
						destroyTodo={props.destroyTodo}
						editTodo={props.editTodo}
					/>);
			})
		}
		</Box>
	);
};
export default List;