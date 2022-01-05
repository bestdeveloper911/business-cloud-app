import React from 'react';
import styled from 'styled-components/native'
import theme from "../../../../theme";
import { SvgCheckIcon } from "../../../SvgIcon";

export default ({ active, checked }) => {
  return (
    active ?
      <BackCircle>
        {checked ? (
          <CheckWrapper>
            <SvgCheckIcon stroke={theme.colors.white} active={active} />
          </CheckWrapper>
        ) : (
          <Circle active={active} />
        )}
      </BackCircle>
      :
      <Circle active={active} />
  )
};

// Styles
const Circle = styled.View`
  width: 17px;
  height: 17px;
  ${props => props.active ? `
    position: absolute;
    top: 4px;
    right: 4px;
    background-color: ${theme.colors.superLightGreen};
    border-width: 3px;
    border-style: solid;
    border-color: ${theme.colors.white};
  ` : `
    background-color: transparent;
    border-width: 4px;
    border-style: solid;
    border-color: ${theme.colors.gray1};
  `}
  border-radius: 50px;
`;

const BackCircle = styled.View`
  position: relative;
  width: 25px;
  height: 25px;
  background-color: ${theme.colors.lightGreen};
  border-radius: 20px;
`;

const CheckWrapper = styled.View`
  position : absolute;
  top: 5px;
  left: 3px;
`;
