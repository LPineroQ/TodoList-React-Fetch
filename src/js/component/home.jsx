import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TodoList from "./todoList.jsx";

//create your first component
const Home = () => {
	const [listTodo, setListTodo] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	console.log({ newTodo });

	const handleClick = () => {
		console.log("Click");
		/*
		const newListTodo = [...listTodo, newTodo]; */
		setListTodo([...listTodo, newTodo]);
	};

	const deleteTodo = (id) => {
		console.log("todo id es:", id);
	};
	console.log({ listTodo });

	return (
		<div className="col-md-6 offset-md-2">
			<Form>
				<Form.Group className="mb-3" controlId="formBasicText">
					<Form.Label>Tu nombre</Form.Label>
					<Form.Control
						type="text"
						placeholder="Write here..."
						onChange={(e) => setNewTodo(e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="button" onClick={handleClick}>
					Click
				</Button>
			</Form>
			{listTodo.length === 0
				? "Esto está más vacío que la sede de Ciudadanos"
				: null}
			{listTodo.map((todo, index) => (
				<TodoList
					key={index}
					id={index}
					deleteTodo={deleteTodo}
					todo={todo}
				/>
			))}
		</div>
	);
};

export default Home;
