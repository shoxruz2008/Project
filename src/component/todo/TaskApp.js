import React, { useState } from 'react';
import uuid from 'react-uuid';
import './taskapp.css';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

const initialTodos = [
	{ id: 0, title: 'Buy milk', done: true },
	{ id: 1, title: 'Eat tacos', done: false },
	{ id: 2, title: 'Brew tea', done: false },
];
const TaskApp = () => {
	const [todos, setTodos] = useState(initialTodos);

	function handleAddTodo(title) {
		if (!title.trim()) return;
		setTodos([
			...todos,
			{
				id: uuid(),
				title: title,
				done: false,
			},
		]);
	}

	function handleTodoChange(updateNote) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === updateNote.id) {
					return updateNote;
				} else {
					return todo;
				}
			})
		);
	}

	function handleTodoDelete(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	return (
		<div>
			<AddTodo onAddTodo={handleAddTodo} />
			<TaskList todos={todos} onDeleteTodo={handleTodoDelete} onChangeTodo={handleTodoChange} />
		</div>
	);
};

export default TaskApp;
