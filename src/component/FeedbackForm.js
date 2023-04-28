import React, { useState } from 'react';

const FeedbackForm = () => {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	return (
		<div
			onPointerMove={(event) => {
				setPosition({
					x: event.clientX,
					y: event.clientY,
				});
			}}
			style={{
				position: 'relative',
				width: '100vw',
				height: '100vw',
			}}
		>
			<div
				style={{
					position: 'absolute',
					backgroundColor: 'red',
					borderRadius: '50%',
					width: 20,
					height: 20,
					transform: `translate(${position.x}px, ${position.y}px)`,
					top: -10,
					left: -10,
				}}
			></div>
		</div>
	);
};

export default FeedbackForm;
