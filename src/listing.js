import React from 'react';
import Item from './item.js';

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
		if (this.item.name === 'bread' && this.item.quantity >= this.item.maxQuantity) return;
		
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
				<div className="btn-group float-right w-25">
					<button onClick={this.buy} className="btn btn-sm btn-success w-50">Buy: {this.item.buyPrice}</button>
					<button onClick={this.sell} className="btn btn-sm btn-danger w-50">Sell: {this.item.sellPrice}</button>
				</div>
            </div>
        );
    }
}

export default Listing;
