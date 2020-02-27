import React from 'react';
import Item from './item.js';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.player = props.player;
    }

    render() {
		let items = this.player.inventory.map((item) =>
			<div className="flex-fill p-1 bg-light border"><Item item={item} /></div>
		);
		
        return (
            <div className="container">
					<div>
						Name: {this.player.name} {this.player.deported ? ' (Deported)' : ''}
					</div>
					<div>
						Coins: {this.player.coins}
					</div>
				<div className="d-flex flex-md-row flex-column rounded-sm border">{items}</div>
            </div>
        );
    }
}

export default Player;
