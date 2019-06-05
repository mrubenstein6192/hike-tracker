import React from 'react';

const Card = props => {
  return (
    <div className='card'>
      {props.name ? (
        <h4 className='card-header'>{props.name}</h4>
      ) : ""}

      {props.image ? (
        <img src={props.image} alt={props.name} className="card-img" />
      ) : ""}

      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

export default Card;
