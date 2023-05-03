import React, { useState } from 'react';

const EditContact = ({ selectedContact, handleSave }) => {
	const [name, setName] = useState(selectedContact.name);
	const [email, setEmail] = useState(selectedContact.email);
	return (
		<section>
			<label>
				Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			</label>
			<br />
			<label>
				Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
			</label>
			<br />
			<button
				onClick={() => {
					const updatedData = {
						id: selectedContact.id,
						name: name,
						email: email,
					};
					handleSave(updatedData);
				}}
			>
				save
			</button>
			<button
				onClick={() => {
					setName(selectedContact.name);
					setEmail(selectedContact.email);
				}}
			>
				reset
			</button>
		</section>
	);
};

export default EditContact;
