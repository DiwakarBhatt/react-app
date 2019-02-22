import React, {Component} from 'react';

class Message extends Component {

	constructor() {
		super()
		this.state = {
			message : 'Welcome visitor'
		}
	}

	changeMessage() {
		this.setState( {
			message : 'Thank you for suscribing'
		})
	}

	render() {
		return (
			<div>
				<h6>{this.state.message}</h6>	
				<button onClick={() => this.changeMessage()}>Subscribe</button>	
			</div>
		)
	}
}

export default Message; 

