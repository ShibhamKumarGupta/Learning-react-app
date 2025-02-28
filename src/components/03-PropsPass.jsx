import React from 'react'

const PropsPass = ({students}) => {
  return (
    <div>
      <ul>
       {students.map( (element,index) => (
         <li key={index}><p>Key:{index}  Value: {element}</p></li>
       ))}
        
      </ul>
    </div>
  )
}

export default PropsPass
