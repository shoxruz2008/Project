import React from 'react';

const ContactList = ({ contacts, selectedId, dispatch }) => {
	return (
		<div>
			<section>
				<ul>
					{contacts.map((contact) => (
						<li key={contact.id}>
							<button
								onClick={() => {
									dispatch({
										type: 'changed_selection',
										contactId: contact.id,
									});
								}}
							>
								{selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
							</button>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default ContactList;
