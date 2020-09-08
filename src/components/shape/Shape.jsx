import React, {useState} from 'react';
import {ReactComponent as Rock} from '../../assets/svg/icon-rock.svg';
import {ReactComponent as Paper} from '../../assets/svg/icon-paper.svg';
import {ReactComponent as Scissors} from '../../assets/svg/icon-scissors.svg';
import ShapeStyle from './shape-style'

export default ({ type, isLarged = false}) => {
  const [isPushed, setPush] = useState(false);

  return (
      <ShapeStyle type={type} 
        isLarged={isLarged} 
        isPushed={isPushed} 
        isEnhanced={false}
        onClick={() => setPush(!isPushed)}> 
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