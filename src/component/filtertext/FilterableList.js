import React, { useState } from 'react';

import { foods, filterItems } from './data';

const FilterableList = () => {
	const [query, setQuery] = useState('');
	const results = filterItems(foods, query);

	function handleChange(e) {
		setQuery(e.target.value);
	}
	return (
		<div>
			<SearchBar query={query} onChange={handleChange} />
			<hr />

			<List items={results} />
		</div>
	);
};

function SearchBar({ query, onChange }) {
	return (
		<lable>
			Search: <input type="text" value={query} onChange={onChange} />
		</lable>
	);
}

function List({ items }) {
	return (
		<table>
			<tbody>
				{items.map((food) => (
					<tr key={food.id}>
						<td>{food.name}</td>
						<td>{food.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
export default FilterableList;
