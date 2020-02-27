import React from 'react';
import Item from './item.js';
import Price from './price.js';

class Listing extends React.Component {
    constructor(props) {
        super(props);
		this.item = props.item
		this.updatePlayer = props.updatePlayer;

		this.buy = this.buy.bind(this);
		this.sell = this.sell.bind(this);
    }

	buy() {
		if (this.item.buyPrice === 0) return;
		if (this.item.quantity <= 0) return;
		
		this.updatePlayer(player => {
			if (player.coins < this.item.buyPrice) return;

			player.coins = player.coins - this.item.buyPrice;
			let playerItem = player.inventory.find(item => item.name === this.item.name);
			playerItem.quantity = playerItem.quantity + 1;
			this.item.quantity = this.item.quantity - 1;

			return player;
		});
	}

	sell() {
		if (this.item.sellPrice === 0) return;
		
		this.updatePlayer(player => {
			let playerItem = player.inventory.find(item => item.name === this.item.name);

			if (playerItem.quantity <= 0) return;

			player.coins = player.coins + this.item.sellPrice;
			playerItem.quantity = playerItem.quantity - 1;
			this.item.quantity = this.item.quantity + 1;

			return player;
		});
	}

    render() {
        return (
            <div>
                <Item item={this.item} />
				<button onClick={this.buy}>{this.item.buyPrice}</button>
				<button onClick={this.sell}>{this.item.sellPrice}</button>
            </div>
        );
    }
}

export default Listing;
