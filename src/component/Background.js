import React from 'react';

const Background = ({ position }) => {
	return (
		<div
			style={{
				position: 'absolute',
				transform: `translate(${position.x}px , ${position.y}px)`,
				width: '250px',
				height: '250px',
				backgroundColor: 'rgba(200, 200, 0, 0.2)',
			}}
		></div>
	);
};

export default Background;
