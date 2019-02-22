import React from 'react';

const heading = {
	fontSize: '20px',
	color: 'blue'
}

const Inline = (props) => {
  return (
    <div>
    	<h6 className='error'>Error from inline</h6>
    	<h6 style={heading}>Inline</h6>
    </div>
  )
}

export default Inline;