import React from 'react';

function Item({ item }) {
    return (
		<ul>
		<li>{item.name}</li>
		<li>{item.quantity}</li>
		</ul>
    );
}

export default Item;
