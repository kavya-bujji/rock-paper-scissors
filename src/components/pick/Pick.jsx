import React from 'react';
import Shape from '../shape/Shape';

export default ({text, type, winner}) => {

  return (
    <>
      <span>{text}</span>
      <div className="shape">
        <Shape type={type} 
          isLarged={true} 
          isEnhanced={(winner) && true} 
          isFinished={true} /> 
      </div>
    </>
  )
}