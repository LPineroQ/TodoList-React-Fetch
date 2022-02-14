import React from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
	console.log({ props });
	return (
	<ListGroup as="ol" numbered>
	<ListGroup.Item
	  as="li"
	  className="d-flex justify-content-between align-items-start"
	>
	  <div className="ms-2 me-auto">
		<div className="fw-bold">Subheading</div>
		Cras justo odio
	  </div>
	<button onClick={() => props.deleteTodo(props.id)}>
		{props.todo}
	</button>
	</ListGroup.Item>
	</ListGroup>
)};

TodoList.propTypes = {
	id: PropTypes.number,
	todo: PropTypes.string,
	deleteTodo: PropTypes.func,
};

export default TodoList;
