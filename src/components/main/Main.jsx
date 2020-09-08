import React, { useState } from 'react';
import MainStyle from './main-style';
import GameStart from '../game-start/GameStart';
import GameInProgress from '../game-in-progress/GameInProgress';

export default () => {
  const [isSelected, setSelection] = useState(true);

  return (
    <>
    { isSelected ? <GameInProgress />: <GameStart /> }
    </>
  )
}
