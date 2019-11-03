import React from 'react';
import Box from '@material-ui/core/Box';

const Task = (props) => {
	return (
		<Box display="flex" justifyContent="space-between">
			<p>{props.task}</p>
		</Box>
	);
};
export default Task;