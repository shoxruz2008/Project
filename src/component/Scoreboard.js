import React, { useState } from 'react';
import Counter from './counters/Counter';

const Scoreboard = () => {
	const [isPlayerA, setPlayerA] = useState(true);

	return (
		<div>
			{isPlayerA && <Counter person="shoxruz" />}
			{!isPlayerA && <Counter person="dinora" />}
			<button onClick={() => setPlayerA(!isPlayerA)}>Next player</button>
		</div>
	);
};

export default Scoreboard;
