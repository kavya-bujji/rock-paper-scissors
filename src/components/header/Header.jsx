import React, {useContext} from 'react';
import { Context } from '../../context/index';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import HeaderStyle from './header-style';

export default () => {
  const [state, dispatch] = useContext(Context);

  return (
    <HeaderStyle>
      <Logo className="logo" />
      <div className="score">
        <span className="text">Score</span>
        <span className="number">{state.score}</span>
      </div>
    </HeaderStyle>
  )
}