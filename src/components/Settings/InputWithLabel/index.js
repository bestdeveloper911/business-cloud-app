import React from 'react';
import { TextInput, InputWrapper, Label } from "./style";
import theme from "../../../theme";
import { TabItem } from '../../../screens/home/Settings/styles';

const InputWithLabel = ({
  onChange, label, value, type, field
}) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <TextInput
        value={value}
        type={type || 'text'}
        editable={field === 'email' ? false : true}
        secureTextEntry={type === 'password'}
        placeholderTextColor={theme.colors.darkGray}
        selectionColor={theme.colors.black}
        onChangeText={onChange}
      />
    </InputWrapper>
  )
};

export default InputWithLabel
