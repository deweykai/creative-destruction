import React from 'react';
import Listing from './listing.js';

class Market extends React.Component {
	constructor(props) {
		super(props);
		this.items = props.items;
		this.updatePlayer = props.updatePlayer;
		console.log(props.updatePlayer);
	}

	render() {
		const listings = this.items.map((item) =>
			<li><Listing item={item} updatePlayer={this.updatePlayer} /></li>
		);
		return (
			<div>
				<h1>Market</h1>
				<ul>{listings}</ul>
			</div>
		);
	}
}

export default Market;
