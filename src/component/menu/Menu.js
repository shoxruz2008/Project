import React, { useState } from 'react';
import uuid from 'react-uuid';
const initialItems = [
	{ title: 'pretzels', id: uuid() },
	{ title: 'crispy seaweed', id: uuid() },
	{ title: 'granola bar', id: uuid() },
];
const Menu = () => {
	const [items, setItems] = useState(initialItems);
	const [selectItems, setSelectItems] = useState(items[0]);

	function handleItemChange(id, event) {
		setItems(
			items.map((item) => {
				if (item.id === id) {
					return {
						...item,
						title: event.target.value,
					};
				} else {
					return item;
				}
			})
		);
	}
	return (
		<div>
			<h2>What's your travel snack?</h2>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<input type="text" value={item.title} onChange={(event) => handleItemChange(item.id, event)} />
						<button onClick={() => setSelectItems(item)}>Choose</button>
					</li>
				))}
			</ul>
			<p>You picked {selectItems.title}</p>
		</div>
	);
};

export default Menu;
