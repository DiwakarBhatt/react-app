import React from 'react';

export default class Form extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			userName: '',
			comments: '',
			topic: 'vue'
		}
	}

	handleUsernameChange = (event) => {
		this.setState({
			userName: event.target.value
		});
		
	}

	handleCommentsChange = (event) => {
		this.setState({
			comments: event.target.value
		});
	}

	handleTopicChange = (event) => {
		this.setState({
			topic: event.target.value 
		});
	}

	handleSubmit = (event) => {
		alert(`${this.state.userName} : ${this.state.comments} : ${this.state.topic}`);
		event.preventDefault();
	}

	render() {
		const {userName, comments, topic} = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>UserName</label>
					<input type="text" 
					       value={userName} 
					       onChange={this.handleUsernameChange}/>
				</div>

				<div>
					<label>Comments</label>
					<textarea value={comments}
					          onChange={this.handleCommentsChange}>
					</textarea>
				</div>

				<div>
					<select value={topic} onChange={this.handleTopicChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>

				<div>
					<button type="submit">Submit</button>
				</div>

			</form>
		);
	}
}
