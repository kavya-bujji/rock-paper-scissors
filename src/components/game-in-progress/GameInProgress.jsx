import React, {useState, useEffect, useContext} from 'react';
import { Context} from '../../context';
import { increaseScore, resetGame } from "../../context/actions";
import GameInProgressStyle from './game-in-progress-style';
import Pick from '../pick/Pick';

export default ({ player, house }) => {
  const [state, dispatch] = useContext(Context);
  const [result, setResult] = useState('');

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
  
  useEffect(() => {
    getWinner();
  }, [])

  return (
    <GameInProgressStyle>
      <div className="you player">
        <Pick text="You picked" type={player} winner={(result === "You win") && true}/>
      </div>
      <div className="house player">
        <Pick text="The house picked" type={house} winner={(result === "You lose") && true}/>
      </div>
      <div className="result">
        <span>{result}</span>
        <button onClick={() => dispatch(resetGame())}>Play again</button>
      </div>
    </GameInProgressStyle>
  )

}