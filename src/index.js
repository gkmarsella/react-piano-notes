import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCountdownClock from 'react-countdown-clock';
import Piano from './components/piano';
import Note from './components/notes';
import './piano.css';

const NUM_NOTES = 11;

class App extends Component {

	constructor(props) {
		super(props);
		const notes = Array(NUM_NOTES).fill().map(this.randomNote, this);
		this.state = {notes};

		setInterval(() => {
	      	const notes = this.state.notes.slice();
	      	const randIndex = Math.floor(Math.random() * notes.length);
	      	notes[randIndex] = this.randomNote();
	      	this.setState({notes});
    	}, 300);
  	}

	randomNote() {
		let noteIndex = Math.floor(Math.random() * this.props.allNotes.length);
		return this.props.allNotes[noteIndex];
	}
	
	render() {
		const notes = this.state.notes.map((note, index) => (
      		<Note key={index} note={note} />
    	));
		return (
			<div>
				<div>{notes} </div>
				<ReactCountdownClock />
				<Piano />
			</div>
		)
	}
}

App.defaultProps = {
	allNotes: ['A','B','C','D','E','F','G','Ab','Bb','Db','Eb']
};

ReactDOM.render(<App />, document.getElementById('root'));
