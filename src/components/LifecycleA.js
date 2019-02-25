import React from 'react';
import LifecycleB from './LifecycleB';

export default class LifecycleA extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: 'Rahul'
		}
		console.log('LifecycleA constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleA getDerivedStateFromProps')
		return null;
	}

	componentDidMount() {
		console.log('LifecycleA componentDidMount')
	}

	shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate')
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleA getSnapShotBeforeUpdate')
		return null;
	}

	componentDidUpdate() {
		console.log('LifecycleA componentDidUpdate')
	}

	changeState = () => {
		this.setState({
			name: 'Modi' 
		});
	}


	render() {
		console.log('LifecycleA render')
		return (
			<div>
				<div>LifecycleA</div>
				<div><button onClick={this.changeState}>Change State</button></div>
				<div><LifecycleB /></div>
			</div>
		);
	}
}
