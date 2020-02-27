import React from 'react';

function Item({ item }) {
	let quantityMessage;
	if (item.quantity > 50) {
		quantityMessage = '';
	} else {
		quantityMessage = ' x' + item.quantity;
	}

    return (
		<span className="align-middle">
		{item.name} 
		{quantityMessage}
		</span>
    );
}

export default Item;
