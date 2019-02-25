import React from 'react';
import Column from './Column'

const Table = (props) => {
  return (
    <div>
    <table>
  		<tbody>
  			<tr>
  				<Column />
  			</tr>
  		</tbody>
  	</table>
    </div>
  )
}

export default Table;