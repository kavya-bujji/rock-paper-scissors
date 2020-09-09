import React, {useState, useEffect, useContext} from 'react';
import { Context, resetGame, increaseScore } from '../../context';
import Shape from '../shape/Shape';
import GameInProgressStyle from './game-in-progress-style';

export default ({ player, house }) => {
  const [state, dispatch] = useContext(Context);
  const [result, setResult] = useState('');
  const [isFinished, setFinishing] = useState(true);
  const [isHidden, setHide] = useState(false);

  const dispatchWin = () => {
    dispatch(increaseScore());
    return setResult('You win');
  }

  const getWinner = () => {
    if(player === house) return setResult('Tie');
    else if((player === "rock" && house === "scissors") 
    || (player === "paper" && house === "rock") 
    || (player === "scissors" && house === "paper")) return dispatchWin();
    else return setResult('You lose');
  };

  const delayResponse = () => {
    setInterval(() => {
      setHide(false);
    }, 1000)

    setInterval(() => {
      setFinishing(true);
    }, 1500);
  }
  
  
  useEffect(() => {
    // delayResponse();
    getWinner();
  }, [])

  return (
    <GameInProgressStyle isFinished={isFinished}>
      <div className="you player">
        <span>You picked</span>
        <div className="shape">
          <Shape type={player} isLarged={true} isEnhanced={(result === "You win" && true)}/> 
        </div>
      </div>
      <div className="house player">
        <span>The house picked</span>
        <div className="shape">
          {!isHidden ? <Shape type={house} isLarged={true} isEnhanced={(result === "You lose" && true)} /> : <div className="blank" />}
        </div>
      </div>
      {
        isFinished 
        &&
        <div className="result">
          <span>{result}</span>
          <button onClick={() => dispatch(resetGame())}>Play again</button>
        </div>
      }
    </GameInProgressStyle>
  )

}