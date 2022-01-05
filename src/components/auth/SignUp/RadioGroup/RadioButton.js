import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'
import theme from "../../../../theme";
import { BoxContainer, Text } from "../../components";

const RadioButton = ({ active, select, label }) => {

  return (
    <SelectArea onPress={select}>
      <BoxContainer direction='row' paddingLeft={0} marginBottom={15}>
        <BackCircle active={active}>
          <Circle active={active} />
        </BackCircle>
        <Text marginLeft={10}>{label}</Text>
      </BoxContainer>
    </SelectArea>
  )
};

export default RadioButton;
// Styles
const Circle = styled.View`
  ${props => props.active ? `
    background-color: ${theme.colors.lightGreen};
    border-color: ${theme.colors.white};
  ` : `
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.white};
  `}
  position: absolute;
  top: 2px;
  right: 2px;
  width: 22px;
  height: 22px;
  border-radius: 50px;
  border-width: 5px;
  border-style: solid;
`;

const BackCircle = styled.View`
  ${props => props.active ? `
    background-color: ${theme.colors.lightGreen};
  ` : `
    background-color: ${theme.colors.darkGray};
  `}
  position: relative;
  width: 26px;
  height: 26px;
  border-radius: 20px;
`;

const SelectArea = styled.TouchableOpacity`
  width: 50%;
`;
