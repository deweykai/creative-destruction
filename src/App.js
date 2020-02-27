import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerSetup from './add-players.js';
import Creative from './creative.js';

function App() {
    return (
		<PlayerSetup />
		//<Creative names={['kai', 'joe']} />
    );
}

export default App;
