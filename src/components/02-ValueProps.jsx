import React from 'react'

const ValueProps = (props) => {
  return (
    <div>
            <h1>String literals: {props.strData}</h1>
            <h1>Number literals:{props.numData}</h1>
            <h1>Boolean literals:{props.boolData? "True" :" False"}</h1>
            <h1>Plain object literals:{props.objData.name} {props.objData.title}</h1>
            <h1>Array literals: {props.arrData[6]}</h1>
            <h1>JSX: {props.jsxData}</h1>
            <h1>Variables having any kind of value: {props.anyData}</h1>
    </div>
  )
}

export default ValueProps
