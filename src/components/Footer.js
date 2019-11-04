import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import Delete from '@material-ui/icons/Delete';
import Check from '@material-ui/icons/Check';
import { handleToggleAll } from '../handlers/handlers'

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%'
	},
  margin: {
    margin: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
}));

const Footer = (props) => {
  const classes = useStyles();
		return (
			<Box
				display="flex"
				justifyContent="space-around"
				alignItems="center"
				className={classes.root}
			>
				<Fab
					variant="extended"
					size="medium"
					color="secondary"
					aria-label="check"
					className={classes.margin}
					onClick={handleToggleAll.bind(this, props.toggleAll)}
				>
					<Check className={classes.extendedIcon} />
					Complete all
				</Fab>
				<Fab
					variant="extended"
					size="medium"
					color="secondary"
					aria-label="delete"
					className={classes.margin}
					onClick={props.clearCompletedTodo}
				>
					<Delete className={classes.extendedIcon} />
					Clear completed
				</Fab>
			</Box>
		);
};
export default Footer;