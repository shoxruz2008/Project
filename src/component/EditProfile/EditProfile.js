import React, { useState } from 'react';

const EditProfile = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [fisrtName, setFirstName] = useState('shoxruz');
	const [lastName, setLastName] = useState('otamurodov');
	return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
				}}
			>
				<label>
					First name:{' '}
					{isEditing ? (
						<input type="text" value={fisrtName} onChange={(event) => setFirstName(event.target.value)} />
					) : (
						<b>{fisrtName}</b>
					)}
				</label>
				<br />
				<label>
					Last name:{' '}
					{isEditing ? (
						<input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
					) : (
						<b>{lastName}</b>
					)}
				</label>
				<br />
				<button onClick={() => setIsEditing(!isEditing)} type="submit">
					{isEditing ? 'Save ' : 'Edit '}Profile
				</button>
				<p>
					<i>
						Hello,{fisrtName} {lastName}!
					</i>
				</p>
			</form>
		</div>
	);
};

export default EditProfile;
