import React from 'react'

/*function Greet() {
	return <h3>hello diwakar</h3>
}*/

const Greet = props => {
	const {name, heroName} = props
	// console.log(props)
	return ( 
		<div> 
			<h6>hello {name} a.k.a {heroName}</h6>
		</div>
	)
}

export default Greet;