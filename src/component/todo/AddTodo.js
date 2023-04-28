import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
	const [title, setTitle] = useState('');
	return (
		<>
			<form onSubmit={(event) => event.preventDefault()}>
				<input
					placeholder="add todo"
					type="text"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<button
					onClick={() => {
						setTitle('');
						onAddTodo(title);
					}}
				>
					add
				</button>
			</form>
		</>
	);
};

export default AddTodo;
