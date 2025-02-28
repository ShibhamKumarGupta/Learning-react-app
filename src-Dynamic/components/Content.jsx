import React from 'react'

const Content = ({contentProps}) => {
  return (
    <div>
        <div class="main-content">
      <div class="text">
        <h2>{contentProps.title}</h2>
        <p>{contentProps.desc}</p>
      </div>
      <div class="image">
        <img src={contentProps.image} alt={contentProps.altImage}/>
      </div>
    </div>
    </div>
  )
}

export default Content;
