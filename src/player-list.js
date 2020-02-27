import React from 'react';
import Player from './player.js';

class PlayerList extends React.Component {
	constructor(props) {
		super(props);
		this.players = props.players || [];
	}

	render() {
		const players = this.players.map((player) =>
			<li><Player player={player} /></li>
		);
		
		return (
			<div>
				<h1>Players</h1>
				<ul>
					{players}
				</ul>
			</div>
		);
	}
}

export default PlayerList;
