import React from 'react';
import Person from './Person'

const NameList = () => {
	const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
	const persons = [
		{
			id : 1,
			name : 'Bruce',
			age : 23,
			skill : 'React'
		},
		{
			id : 2,
			name : 'Clark',
			age : 30,
			skill : 'Angular'
		},
		{
			id : 3,
			name : 'Diana',
			age : 24,
			skill : 'VU'
		}
	]

 	// const personList = persons.map(person =>(<Person key={person.id} person={person}/>) )
 	const nameList = names.map((name, index) => <h6 key={index}> {index}  : {name}</h6>)
	// return <div>{personList}</div>
	return <div>{nameList}</div>
}

export default NameList;