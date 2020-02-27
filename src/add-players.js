import React from 'react';
import Creative from './creative.js';

class PlayerSetup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			names: [],
			setupDone: false,
		};
		this.inputValue = '';
		this.finishSetup = this.finishSetup.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	finishSetup() {
		this.setState({
			setupDone: true,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		let names = this.state.names;
		names.push(event.target.name.value);
		event.target.name.value = '';
		this.setState({names: names});

		console.log(event);
	}

	render() {
		if (this.state.setupDone) {
			return (<Creative names={this.state.names} />);
		}

		let names = this.state.names.map(name =>
			<li className="list-group-item">{name}</li>
		);

		return (
			<div className="container p-4 mt-4 shadow">
				<h2>Setup players</h2>
				<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label for="name">Name</label>
					<input type="text" className="form-control" placeholder="name" id="name" name="name" />
				</div>
				<input type="submit" value="Submit" className="btn btn-secondary btn-sm btn-block" />
				</form>
				<ul className="list-group mt-3 mb-3">{names}</ul>
				<button onClick={this.finishSetup} className="btn btn-primary btn-block">Finish Setup</button>
			</div>
		);
	}
}

export default PlayerSetup;
