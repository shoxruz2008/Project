import React, { useState } from 'react';
import EditContact from './EditContact';
import ContactLists from './ContactLists';

const initialContacts = [
	{ id: 0, name: 'Taylor', email: 'taylor@mail.com' },
	{ id: 1, name: 'Alice', email: 'alice@mail.com' },
	{ id: 2, name: 'Bob', email: 'bob@mail.com' },
];

const ContactManager = () => {
	const [contacts, setContacts] = useState(initialContacts);
	const [selectedId, setSelectedId] = useState(0);

	const selectedContact = contacts.find((contact) => contact.id === selectedId);

	function handleSave(updatedData) {
		const nextContacts = contacts.map((contact) => {
			if (contact.id === updatedData.id) {
				return updatedData;
			} else {
				return contact;
			}
		});
		setContacts(nextContacts);
	}

	return (
		<div>
			<ContactLists contacts={contacts} setSelectedId={(id) => setSelectedId(id)} selectedId={selectedId} />
			<hr />
			<EditContact key={selectedId} selectedContact={selectedContact} handleSave={handleSave} />
		</div>
	);
};

export default ContactManager;
