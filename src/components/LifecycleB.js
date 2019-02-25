import React from 'react';

export default class LifecycleB extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: 'Rahul'
		}
		console.log('LifecycleB constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleB getDerivedStateFromProps')
		return null;
	}

	componentDidMount() {
		console.log('LifecycleB componentDidMount')
	}

	shouldComponentUpdate() {
		console.log('LifecycleB shouldComponentUpdate')
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleB getSnapShotBeforeUpdate')
		return null;
	}

	componentDidUpdate() {
		console.log('LifecycleB componentDidUpdate')
	}

	render() {
		console.log('LifecycleB render')
		return (
			<div>
				LifecycleB
			</div>
		);
	}
}
