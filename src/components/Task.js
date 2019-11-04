import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/DeleteOutline';
import { useTheme, makeStyles, createStyles } from '@material-ui/core/styles';
import { handleMutation } from "../handlers/handlers";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
		borderBottom: props =>
			(props.last ? 'none' : '1px solid ' + theme.palette.primary[500]),

  },
  text: {
		margin: 25,
		color: theme.palette.primary[500]
  },
  textCompleted: {
    margin: 25,
    color: theme.palette.primary[500],
		textDecoration: 'line-through'
  },
  button: {
    flex: 1,
    // marginLeft: 15
  }
}));

const Task = (props) => {
  const classes = useStyles(props);
	return (
		<Box className={classes.root}>
			<Button
				onClick={handleMutation.bind(this, props.toggleTodo, props.task.id)}
				className={classes.button}
			>
        <Typography
					className={props.task.completed ? classes.textCompleted : classes.text}
				>
					{props.task.title}
				</Typography>
			</Button>
			<IconButton
				onClick={handleMutation.bind(this, props.destroyTodo, props.task.id)}
			>
				<Delete
					color="secondary"
					fontSize="large"
				/>
			</IconButton>
		</Box>
	);
};
export default Task;