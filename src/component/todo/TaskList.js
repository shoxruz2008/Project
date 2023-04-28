import React, { useEffect, useRef, useState } from 'react';
import './taskapp.css';
const TaskList = ({ todos, onChangeTodo, onDeleteTodo }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id} className={todo.done ? 'complete' : ''}>
					<Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
				</li>
			))}
		</ul>
	);
};

export default TaskList;

function Task({ todo, onChange, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);

	const inputRef = useRef(null);

	useEffect(() => {
		if (isEditing && inputRef.current) {
			inputRef.current.focus();
		}
	});

	let todoContent;
	if (isEditing) {
		todoContent = (
			<>
				<input
					ref={inputRef}
					type="text"
					value={todo.title}
					onChange={(event) => {
						onChange({
							...todo,
							title: event.target.value,
						});
					}}
				/>
				<button onClick={() => setIsEditing(false)}>Save</button>
			</>
		);
	} else {
		todoContent = (
			<>
				{todo.title}
				<button onClick={() => setIsEditing(true)}>Edit</button>
			</>
		);
	}
	return (
		<label>
			<input
				type="checkbox"
				checked={todo.done}
				onChange={(e) => {
					onChange({
						...todo,
						done: e.target.checked,
					});
				}}
			/>
			{todoContent}
			<button onClick={() => onDelete(todo.id)}>Delete</button>
		</label>
	);
}
