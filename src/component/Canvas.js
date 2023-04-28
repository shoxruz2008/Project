import React, { useState } from 'react';
import Background from './Background';
import Box from './Box';
const initialPosition = {
	x: 0,
	y: 0,
};
const Canvas = () => {
	const [shape, setShape] = useState({
		color: 'orange',
		position: initialPosition,
	});

	function handleMove(dx, dy) {
		setShape({
			...shape,
			position: {
				x: shape.position.x + dx,
				y: shape.position.y + dy,
			},
		});
	}

	function handleColorChange(event) {
		setShape({
			...shape,
			color: event.target.value,
		});
	}
	return (
		<>
			<select value={shape.color} onChange={handleColorChange}>
				<option value="orange">orange</option>
				<option value="lightpink">lightpink</option>
				<option value="aliceblue">aliceblue</option>
			</select>
			<Background position={initialPosition} />
			<Box color={shape.color} position={shape.position} onMove={handleMove}></Box>
		</>
	);
};

export default Canvas;
