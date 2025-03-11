import React from 'react'

const PropsPass = ({students}) => {
  return (
    <div>
      
       {students.map( (element,index) => (
         <h1 key={index}><p>Key:{index} | Value: {element}</p></h1>
       ))}
        
    
    </div>
  )
}

export default PropsPass
