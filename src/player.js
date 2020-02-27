import React from 'react';
import Item from './item.js';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.player = props.player;
    }

    render() {
		let items = this.player.inventory.map((item) =>
			<li><Item item={item} /></li>
		);

        return (
            <div>
                {this.player.name}
				{this.player.coins}
				<ul>{items}</ul>
            </div>
        );
    }
}

export default Player;
