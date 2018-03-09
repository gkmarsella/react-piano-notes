import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCountdownClock from 'react-countdown-clock';
import Piano from './components/piano';
import './piano.css';

class App extends Component {
	render() {
		return (
			<div>
				<ReactCountdownClock />
				<Piano />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
