import React from 'react';
import PlayerList from './player-list.js';
import Market from './market.js';

function createItem(name, buyPrice, sellPrice, quantity=9999) {
	return {
		name: name,
		buyPrice: buyPrice,
		sellPrice: sellPrice,
		quantity: quantity,
	}
}

const items = [
	createItem('bread', 0, 1),
	createItem('candle', 0, 2),
	createItem('happiness', 2, 1),
	createItem('farm', 0, 3),
	createItem('mystic book', 3, 0),
	createItem('robot', 3, 0),
];

function itemFind(items, name) {
	return items.find(item => item.name === name);
}

function createPlayer(name, items) {
	let inventory = items.map((item) => ({
		name: item.name,
		quantity: 0,
	}));

	itemFind(inventory, 'happiness').quantity = 3;
	itemFind(inventory, 'farm').quantity = 1;
	
	return {
		name: name,
		coins: 1,
		inventory: inventory,
		deported: false,
	};
}

class Creative extends React.Component {
	constructor(props) {
		super(props);
		
		let players = props.names.map(name => createPlayer(name, items));
		itemFind(items, 'robot').quantity = Math.ceil(players.length / 2);
		itemFind(items, 'bread').maxQuantity = Math.ceil(players.length);

		this.state = {
			players: players,
			items: items,
			iPlayer: -1,
		};

		this.updatePlayer = this.updatePlayer.bind(this);
		this.advance = this.advance.bind(this);

		this.newRound();
	}

	componentDidMount() {
		//setInterval(this.advance, 1000);
	}

	updatePlayer(update) {
		let players = this.state.players;
		let player = players[this.state.iPlayer];
		player = update(player);
		this.setState({
			players: players,
		});
	}

	newRound() {
		let items = this.state.items;
		let players = this.state.players;

		// reset market
		itemFind(items, 'bread').quantity = 0;
		itemFind(items, 'candle').quantity = 0;
		itemFind(items, 'mystic book').quantity = 1;

		// player house keeping
		players.forEach(player => {
			// deport people
			if (player.coins <= 0) player.deported = true;
			// ignore deported people
			if (player.deported) return;

			// everyone makes their profits
			if (itemFind(player.inventory, 'mystic book').quantity > 0) {
				// you are a candle maker if you have a mystic book
				itemFind(player.inventory, 'candle').quantity += 1;
			} else if (itemFind(player.inventory, 'farm').quantity > 0) {
				// you are a farmer if you don't have a mystic book and have a farm
				// robots increase productivity
				let bread = itemFind(player.inventory, 'bread');
				bread.quantity += 1 + itemFind(player.inventory, 'robot').quantity;
			}

			// tax people
			player.coins = player.coins - 1;
		});

		// update state
		this.setState({
			items: items,
			iPlayer: -1,
			players: players,
		});
	}

	advance() {
		let iPlayer = this.state.iPlayer + 1;
		while (iPlayer < this.state.players.length && this.state.players[iPlayer].deported) {
			iPlayer = iPlayer + 1;
		}
		this.setState({
			iPlayer: iPlayer,
		});

		if (this.state.iPlayer >= this.state.players.length - 1) this.newRound();
	}

	render() {
		return (
			<div className="container shadow mt-4 p-4">
				<h1>Creative Destruction</h1>
				<button onClick={this.advance} className="btn btn-info fixed-top">Advance</button>
				<PlayerList players={this.state.players} idx={this.state.iPlayer} />
				<Market items={this.state.items} updatePlayer={this.updatePlayer} />
			</div>
		);
	}
}

export default Creative;
