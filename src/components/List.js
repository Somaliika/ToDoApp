import React from 'react';
import Task from './Task';
import Box from '@material-ui/core/Box';

const List = (props) => {
	return (
		<Box display="flex" flexDirection="column">
		{
			props.list.map((task, index) => {
				return (<Task key={index} task={task}/>);
			})
		}
		</Box>
	);
};
export default List;