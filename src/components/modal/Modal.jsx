import React from 'react';
import {ReactComponent as ImageRules} from '../../assets/svg/image-rules.svg';
import {ReactComponent as IconClose} from '../../assets/svg/icon-close.svg';
import ModalStyle from './modal-style';

export default ({ setModal }) => {
  return (
    <ModalStyle>
      <div className="container">
        <span className="rules">Rules</span>
        <IconClose className="close" onClick={() => setModal(true)} />
        <ImageRules className="image" />
      </div>
    </ModalStyle>
  )
}
