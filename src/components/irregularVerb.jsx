import React from 'react'

function IrregularVerb(props) {
  return (
    <tr>
    <td className='first' > {props.first} </td>
    <td className='second' > {props.second} </td>
    <td className='third' > {props.third} </td>
  </tr>
  )
}

export default IrregularVerb