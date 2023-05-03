import React from 'react';

const Chat = ({ contact, message, dispatch }) => {
	return (
		<section>
			<textarea
				value={message}
				placeholder={`chat to ${contact.name}`}
				onChange={(e) => {
					dispatch({
						type: 'edited_message',
						message: e.target.value,
					});
				}}
			></textarea>
			<br />
			<button
				onClick={() => {
					alert(`Sending ${message} to ${contact.email}`);
					dispatch({
						type: 'sent_message',
					});
				}}
			>
				Send to {contact.email}
			</button>
		</section>
	);
};

export default Chat;
