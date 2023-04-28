import React, { useState } from 'react';
import uuid from 'react-uuid';

const List = () => {
	const [name, setName] = useState('');
	const [artists, setArtists] = useState([]);

	function addList() {
		setArtists([{ id: uuid(), name: name }, ...artists]);
		setName('');
	}

	function deleteList(id) {
		setArtists(artists.filter((artist) => artist.id !== id));
	}

	function reverseList() {
		const nextList = [...artists];
		nextList.reverse();
		setArtists(nextList);
	}
	return (
		<div>
			<h1>Inspiring sculptors:</h1>
			<form onSubmit={(event) => event.preventDefault()}>
				<input type="text" value={name} onChange={(event) => setName(event.target.value)} />
				<button onClick={addList}>add</button>
				<button onClick={reverseList}>reverse</button>
			</form>
			<ul>
				{artists.map((artist) => (
					<li key={artist.id}>
						{artist.name} <button onClick={() => deleteList(artist.id)}>del</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default List;
