import React from 'react';

const Hello = () => {
/*	return (
		<div>
			<h5>Hello IBM</h5>
		</div>
	)*/
	return React.createElement(
		'div',
		 {id:'hello', className:'helloName'}, 
		 React.createElement('h5', null, 'Hello Ibm')
		)
}

export default Hello;