import React, { useContext } from 'react';
import { Context } from '../../context/index';
import GameStart from '../game-start/GameStart';
import GameInProgress from '../game-in-progress/GameInProgress';

export default () => {
  const [state, dispatch] = useContext(Context);

  return (
    <>
    { state.isPicked 
    ? <GameInProgress player={state.player} house={state.house} /> 
    : <GameStart /> }
    </>
  )
}
