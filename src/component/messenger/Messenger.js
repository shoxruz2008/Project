import React, { useReducer } from './MyReact';
import ContactList from './ContactList';
import Chat from './Chat';

import { initialState, messengerReducer } from './messengerReducer';

const contacts = [
	{ id: 0, name: 'Taylor', email: 'taylor@mail.com' },
	{ id: 1, name: 'Alice', email: 'alice@mail.com' },
	{ id: 2, name: 'Bob', email: 'bob@mail.com' },
];

const Messenger = () => {
	const [state, dispatch] = useReducer(messengerReducer, initialState);
	const message = state.messages[state.selectedId];
	const contact = contacts.find((c) => c.id === state.selectedId);

	return (
		<div>
			<ContactList contacts={contacts} selectedId={state.selectedId} dispatch={dispatch} />
			<Chat key={contact.id} contact={contact} message={message} dispatch={dispatch} />
		</div>
	);
};

export default Messenger;
