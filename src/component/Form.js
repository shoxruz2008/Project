import React, { useState } from 'react';

const Form = () => {
	const [person, setPerson] = useState({
		name: 'Niki de Saint Phalle',
		artwork: {
			title: 'Blue Nana',
			city: 'Hamburg',
			image: 'https://i.imgur.com/Sd1AgUOm.jpg',
		},
	});

	function handleNameChange(event) {
		setPerson({
			...person,
			name: event.target.value,
		});
	}

	function handleTitleChange(event) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				title: event.target.value,
			},
		});
	}

	function handleCityChange(event) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				city: event.target.value,
			},
		});
	}

	function handleImageChange(event) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				image: event.target.value,
			},
		});
	}

	return (
		<div>
			<label>
				Name:
				<input type="text" value={person.name} onChange={handleNameChange} />
			</label>
			<br />
			<label>
				Title:
				<input type="text" value={person.artwork.title} onChange={handleTitleChange} />
			</label>
			<br />
			<label>
				City:
				<input type="text" value={person.artwork.city} onChange={handleCityChange} />
			</label>
			<br />
			<label>
				Image:
				<input type="text" value={person.artwork.image} onChange={handleImageChange} />
			</label>
			<p>
				<i>{person.artwork.title} </i>
				by {person.name} (located in {person.artwork.city})
			</p>
			<img src={person.artwork.image} alt={person.artwork.title} />
		</div>
	);
};

export default Form;
