import React, { useState } from 'react';

const initialProducts = [
	{
		id: 0,
		name: 'Baklava',
		count: 1,
	},
	{
		id: 1,
		name: 'Cheese',
		count: 5,
	},
	{
		id: 2,
		name: 'Spaghetti',
		count: 2,
	},
];

const ShoppingCart = () => {
	const [products, setProducts] = useState(initialProducts);

	function handlePlusClick(productId) {
		setProducts(
			products.map((product) => {
				if (product.id === productId) {
					return {
						...product,
						count: product.count + 1,
					};
				} else {
					return product;
				}
			})
		);
	}

	function handleMinusClick(productId) {
		let nextProducts = products.map((product) => {
			if (productId === product.id) {
				return {
					...product,
					count: product.count - 1,
				};
			} else {
				return product;
			}
		});
		nextProducts = nextProducts.filter((p) => p.count > 0);
		setProducts(nextProducts);
	}

	return (
		<div>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						{product.name} (<b>{product.count}</b>)
						<button onClick={() => handlePlusClick(product.id)}>+</button>
						<button onClick={() => handleMinusClick(product.id)}>-</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ShoppingCart;
