import React from 'react';
import RulesStyle from './rules-style'

export default ({setModal, isModalHide}) => {
  return (
    <RulesStyle onClick={() => setModal(!isModalHide)}>
      Rules
    </RulesStyle>
  )
}