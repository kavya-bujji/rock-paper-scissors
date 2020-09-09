import React from 'react';
import {ReactComponent as Triangle} from '../../assets/svg/bg-triangle.svg';
import Shape from '../shape/Shape';
import GameStartStyle from './game-start-style';

export default () => {

  return (
    <GameStartStyle>
      <Triangle className="triangle" />
      <div className="shape shape-paper">
        <Shape type="paper" />
      </div>
      <div className="shape shape-scissors">
        <Shape type="scissors"/>
      </div>
      <div className="shape shape-rock">
        <Shape type="rock"/>
      </div>
    </GameStartStyle>
  )
}