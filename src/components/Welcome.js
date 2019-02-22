import React, {Component} from 'react';

class Welcome extends Component {
	render() {
		const {name, heroName} = this.props
		return (
			<div>
			<h6>Hello {name} a.k.a {heroName}</h6>
			{this.props.children}
			</div>
		)		
	}
}

export default Welcome; 

