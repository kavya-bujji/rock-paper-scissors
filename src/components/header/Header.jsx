import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import HeaderStyle from './header-style';

export default () => {
  return (
    <HeaderStyle>
      <Logo className="logo" />
      <div className="score">
        <span className="text">Score</span>
        <span className="number">12</span>
      </div>
    </HeaderStyle>
  )
}