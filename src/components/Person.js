import React from 'react';

const Person = ({person}) => {
  return (
    <div>
		<h6>I am {person.name}, of age {person.age} with skills {person.skill}</h6>    	
    </div>
  )
}

export default Person;