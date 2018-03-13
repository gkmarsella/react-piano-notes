import React, { Component } from 'react';

class PianoKeys extends Component {
	render() {
		return (
			<div className="pianoKeys">
				<ul className="set">
					<li className="white b"></li>
					<li className="black as"></li>
					<li className="white a"></li>
					<li className="black gs"></li>
					<li className="white g"></li>
					<li className="black fs"></li>
					<li className="white f"></li>
					<li className="white e"></li>
					<li className="black ds"></li>
					<li className="white d"></li>
					<li className="black cs"></li>
					<li className="white c"></li>
				</ul>
			</div>
		)
	}
}

export default PianoKeys;