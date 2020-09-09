import React, { useContext } from 'react';
import { Context } from '../../context';
import { pickShape } from "../../context/actions";
import randomPick from '../../utils/randomPick';
import { ReactComponent as Rock } from '../../assets/svg/icon-rock.svg';
import { ReactComponent as Paper } from '../../assets/svg/icon-paper.svg';
import { ReactComponent as Scissors } from '../../assets/svg/icon-scissors.svg';
import ShapeStyle from './shape-style'

export default ({ type, isLarged, isEnhanced, isFinished}) => {
  const [state, dispatch] = useContext(Context);

  const handlePick = () => {
    if(!isFinished) return dispatch(pickShape(type, randomPick()));
  }

  return (
      <ShapeStyle type={type} 
        isLarged={isLarged} 
        isEnhanced={isEnhanced}
        onClick={() => handlePick()}> 
      <div className="border-out" />
      <div className="border">
      <div className="border-in" />
      <div className="background" />
      {
        {
          rock: <Rock className="icon" />,
          paper: <Paper className="icon" />,
          scissors: <Scissors className="icon" />
        }[type]
      }
      </div>
    </ShapeStyle>
  )
}