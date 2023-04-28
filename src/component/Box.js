import React, { useState } from 'react';

const Box = ({ children, position, color, onMove }) => {
	const [lastCoordinates, setLastCoordinates] = useState(null);

	function handlePointerDown(event) {
		event.target.setPointerCapture(event.pointerId);
		setLastCoordinates({
			x: event.clientX,
			y: event.clientY,
		});
	}

	function handlePointerMove(event) {
		if (lastCoordinates) {
			setLastCoordinates({
				x: event.clientX,
				y: event.clientY,
			});
			const dx = event.clientX - lastCoordinates.x;
			const dy = event.clientY - lastCoordinates.y;
			onMove(dx, dy);
		}
	}

	function handlePointerUp(event) {
		setLastCoordinates(null);
	}
	return (
		<div
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUp}
			style={{
				width: 100,
				height: 100,
				cursor: 'grab',
				backgroundColor: color,
				position: 'absolute',
				border: '1px solid black',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				transform: `translate(${position.x}px, ${position.y}px)`,
			}}
		>
			{children}
		</div>
	);
};

export default Box;
