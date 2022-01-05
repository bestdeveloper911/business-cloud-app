import React from 'react';
import { ButtonTouchable, ButtonLabel } from './style';

const EditButton = ({
  onClick, label,
}) => {
  return (
    <ButtonTouchable onPress={onClick}>
      <ButtonLabel>{label}</ButtonLabel>
    </ButtonTouchable>
  );
};

export default EditButton;
