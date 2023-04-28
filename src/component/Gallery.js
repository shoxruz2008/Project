import React, { useState } from 'react';
import { sculptureList } from './Data';

const Gallery = () => {
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	let hasPrev = index > 0;
	let hasNext = index < sculptureList.length - 1;

	function handleNextClick() {
		if (hasNext) {
			setIndex(index + 1);
		}
	}
	function handlePrevClick() {
		if (hasPrev) {
			setIndex(index - 1);
		}
	}

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	let sculpture = sculptureList[index];

	// console.log(sculpture);
	return (
		<div>
			<button onClick={handlePrevClick} disabled={!hasPrev}>
				prev
			</button>
			<button onClick={handleNextClick} disabled={!hasNext}>
				next
			</button>

			<h2>
				<i>{sculpture.name}</i>
				by {sculpture.artist}
			</h2>
			<h3>
				({index + 1} of {sculptureList.length})
			</h3>
			<button onClick={handleMoreClick}>{showMore ? 'hide' : 'show'}</button>
			<img src={sculpture.url} alt={sculpture.alt} />
			{showMore && <p>{sculpture.description}</p>}
		</div>
	);
};

export default Gallery;
