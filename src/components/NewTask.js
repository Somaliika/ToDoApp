import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '../components/TextField';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: theme => theme.palette.primary[500],
		width: 'calc(100% - 30px)',
		height: 'calc(100% - 30px)',
		padding: 15
	},
	text: {
		flex: 2
	},
	button: {
		flex: 1,
		marginLeft: 15
	}
});
const NewTask = (props) => {
	const theme = useTheme(props);
	const classes = useStyles(theme);
	return (
		<Box className={classes.root}>
			<TextField
				label="Create new todo"
				variant="filled"
				className={classes.text}
			/>
			<Button className={classes.button}>Save</Button>
		</Box>
	);
};
export default NewTask;