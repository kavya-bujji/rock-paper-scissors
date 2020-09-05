import React from 'react';
import {ReactComponent as Triangle} from '../../assets/svg/bg-triangle.svg';
import MainStyle from './main-style';
import Shape from '../shape/Shape';

export default () => {
  return (
    <MainStyle>
      <Triangle/>
      <div className="shape-paper">
        <Shape type="paper"/>
      </div>
      <div className="shape-scissors">
        <Shape type="scissors"/>
      </div>
      <div className="shape-rock">
        <Shape type="rock"/>
      </div>
    </MainStyle>
  )
}
