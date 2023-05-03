import React, { useState } from 'react';

function Input({ label, text, onChange }) {
	return (
		<label>
			{label}
			{''}
			<input type="text" value={text} onChange={onChange} />
		</label>
	);
}

const SyncedInputs = () => {
	const [text, setText] = useState('');
	function handleChange(e) {
		setText(e.target.value);
	}
	return (
		<div>
			<Input label="first input" text={text} onChange={handleChange} />
			<Input label="second input" text={text} onChange={handleChange} />
		</div>
	);
};

export default SyncedInputs;
