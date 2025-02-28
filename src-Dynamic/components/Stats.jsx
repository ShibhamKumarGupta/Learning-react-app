import React from 'react'

const Stats = ({statProps}) => {
  return (
      <div className="stats">
        {statProps.map( (element, index) => (
          <div className="stat" key={index}>
          <div className="number">{element.number}</div>
          <div className="label">{element.label}</div>
        </div>
        ))}
    </div>

  );
};

export default Stats;
