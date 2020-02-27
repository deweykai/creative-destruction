import React from 'react';
import Listing from './listing.js';

class Market extends React.Component {
	constructor(props) {
		super(props);
		this.items = props.items;
		this.updatePlayer = props.updatePlayer;
	}

	render() {
		const listings = this.items.map((item) =>
			<li className="list-group-item p-0 pl-3"><Listing item={item} updatePlayer={this.updatePlayer} /></li>
		);
		return (
			<div>
				<h2>Market</h2>
				<ul className="list-group">{listings}</ul>
			</div>
		);
	}
}

export default Market;
