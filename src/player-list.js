import React from 'react';
import Player from './player.js';

function PlayerList({ players, idx }) {
	players = players.map((player) =>
		<li className={
			"list-group-item " +
			(player.deported ? 'disabled ' : '') +
			(players.indexOf(player) === idx ? 'list-group-item-dark sticky-top' : '')
		}><Player player={player} /></li>
	);

	return (
		<div>
			<h2>Players</h2>
			<ul className="list-group">
				{players}
			</ul>
		</div>
	);
}

export default PlayerList;
