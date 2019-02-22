import React from 'react';
import './myStyles.css'

const StyleSheet = (props) => {

	 let className =  props.primary ? 'primary' : 'secondary'
  
  return (
    <div>
     	<h6 className={'${className} font-xl' }>StyleSheet {}</h6>
    </div>
  )
}

export default StyleSheet;