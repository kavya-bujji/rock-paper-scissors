import React, {useState} from 'react';
import GameInProgressStyle from './game-in-progress-style';
import Shape from '../shape/Shape';

export default () => {
  const [result, setResult] = useState(true);

  return (
    <GameInProgressStyle result={result}>
      <div className="you player">
        <span>You picked</span>
        <div className="shape">
          <Shape type="scissors" isLarged={true} /> 
          <div className="blank" />
        </div>
      </div>
      <div className="house player">
        <span>The house picked</span>
        <div className="shape">
          <Shape type="paper" isLarged={true} />
        </div>
      </div>
      {
        result 
        ? 
        <div className="result">
          <span>You lose</span>
          <button>Play again</button>
        </div>
        : null
      }
    </GameInProgressStyle>
  )

}