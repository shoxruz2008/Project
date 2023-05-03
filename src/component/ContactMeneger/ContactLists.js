import React from 'react';

const ContactLists = ({ contacts, setSelectedId, selectedId }) => {
	return (
		<section>
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						<button onClick={() => setSelectedId(contact.id)}>
							{contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
						</button>
					</li>
				))}
			</ul>
		</section>
	);
};

export default ContactLists;
