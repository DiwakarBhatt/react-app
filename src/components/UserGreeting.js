import React from 'react';

export default class UserGreeting extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			isLoggedIn : true
		}		

	}

	render() {

		// diw:when you want to show something or nothing
		 return this.state.isLoggedIn && <div>Welcome Diwakar</div>


		//diw:This is ternary approach and go to approach also
/*		return (
			this.state.isLoggedIn ? 
			<div>Welcome Diwakar</div> : 
			<div>Welcome Guest</div>
		)*/

/*		let message 

		if (this.state.isLoggedIn) {
			message = <div>Welcome Diwakar</div>
		} else {
			message = <div>Welcome Guest</div>
		}

		return <div>{message}</div>*/

/*		if (this.state.isLoggedIn) {
			return <div>Welcome Diwakar</div>
		} else {
			return <div>Welcome Guest</div>
		}*/
	}
}
