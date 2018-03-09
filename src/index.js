import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCountdownClock from 'react-countdown-clock';

class App extends Component {
	render() {
		return (
			<div>
				<ReactCountdownClock />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
