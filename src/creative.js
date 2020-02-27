import React from 'react';
import PlayerList from './player-list.js';
import Market from './market.js';

function createItem(name, buyPrice, sellPrice) {
	return {
		name: name,
		buyPrice: buyPrice,
		sellPrice: sellPrice,
		quantity: 9999,
	}
}

const items = [
	createItem('bread', 1, 0),
	createItem('candle', 2, 0),
	createItem('happiness', 2, 1),
	createItem('farm', 0, 3),
	createItem('mystic book', 3, 0),
];

function createPlayer(name, items) {
	let inventory = items.map((item) => ({
		name: item.name,
		quantity: 0,
	}));

	inventory.find(item => item.name === 'happiness').quantity = 3;
	inventory.find(item => item.name === 'farm').quantity = 1;
	
	return {
		name: name,
		coins: 10,
		inventory: inventory,
	};
}

class Creative extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			players: [createPlayer('joe', items)],
			items: items,
			iPlayer: 0,
		};

		this.updatePlayer = this.updatePlayer.bind(this);
	}

	updatePlayer(update) {
		let players = this.state.players;
		let player = players[this.state.iPlayer];
		player = update(player);
		this.setState({
			players: players,
		});
	}

	render() {
		return (
			<div>
				<PlayerList players={this.state.players} />
				<Market items={this.state.items} updatePlayer={this.updatePlayer} />
			</div>
		);
	}
}

export default Creative;
