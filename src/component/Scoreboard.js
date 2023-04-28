import React, { useState } from 'react';

const Scoreboard = () => {
	const [player, setPlayer] = useState({
		firstName: 'Shaxlo',
		lastName: 'Doniyorova',
		score: 0,
	});

	function handlePlusClick() {
		setPlayer({
			...player,
			score: player.score + 1,
		});
	}

	function handleNameChange(event) {
		setPlayer({
			...player,
			firstName: event.target.value,
		});
	}
	function handleLastChange(event) {
		setPlayer({
			...player,
			lastName: event.target.value,
		});
	}

	return (
		<div>
			<label>
				Score: <b>{player.score}</b> <button onClick={handlePlusClick}>+1</button>
			</label>
			<br />
			<label>
				First name:
				<input type="text" value={player.firstName} onChange={handleNameChange} />
			</label>
			<br />
			<label>
				Last name:
				<input type="text" value={player.lastName} onChange={handleLastChange} />
			</label>
		</div>
	);
};

export default Scoreboard;
