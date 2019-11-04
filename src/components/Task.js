import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Delete from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import Cancel from '@material-ui/icons/Cancel';
import Check from '@material-ui/icons/Check';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { handleMutation, handleEditing, handleCancel } from "../handlers/handlers";

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
		overflow: 'hidden',
		justifyContent: 'left'
  },
	textField: {
    flex: 1,
		padding: 25
	},
	buttonText: {
    textTransform: 'none',
	}
}));

const Task = (props) => {
  const classes = useStyles(props);
  const [editMode, setEditMode] = useState(false);
  const [draft, setDraft] = useState(props.task.title);
  if (editMode) return (
		<Box className={classes.root}>
			<TextField
				value={draft}
				onChange={event => setDraft(event.target.value)}
				className={classes.textField}
			/>
			<IconButton
				onClick={handleEditing.bind(this, props.editTodo, props.task.id, draft, setEditMode)}
			>
				<Check
					color="secondary"
					fontSize="large"
				/>
			</IconButton>
			<IconButton
				onClick={handleCancel.bind(this, props.task.title, setDraft, setEditMode)}
			>
				<Cancel
					color="secondary"
					fontSize="large"
				/>
			</IconButton>
		</Box>
  );
	return (
		<Box className={classes.root}>
			<Button
				onClick={handleMutation.bind(this, props.toggleTodo, props.task.id)}
				className={classes.button}
				variant="text"
				classes={{text: classes.buttonText}}
			>
        <Typography
					className={props.task.completed ? classes.textCompleted : classes.text}
				>
					{props.task.title}
				</Typography>
			</Button>
			<IconButton
				onClick={setEditMode.bind(this, true)}
			>
				<Edit
					color="secondary"
					fontSize="large"
				/>
			</IconButton>
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