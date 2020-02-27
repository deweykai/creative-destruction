import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './listing.js';
import Player from './player.js';

function App() {
    return (
        <div>
            <Listing name="rice" price="22" quantity="10" selling={true} />
            <Player name="bob" />
        </div>
    );
}

export default App;
