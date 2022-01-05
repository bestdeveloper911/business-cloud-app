// Dependencies
import React from 'react'
import styled, { css } from 'styled-components/native'

import theme from '../theme';

// Components
import TouchableOpacity from './touchable-opacity'
import Gradient from './gradient'

// Export component
export default ({ children, label, before, after, large, link, primary, footer, light, color, bgColor, borderRadius, fontSize, ...props }) => {
  return (
    <Touchable
      large={large}
      borderRadius={borderRadius}
      {...props}
    >
      <Button as={primary ? Gradient : null} {...{ large, link, bgColor, borderRadius }}>
        {before}
        {label && <Label style={{color: color ? color : theme.colors.white}} {...{ large, link, footer, light, primary, fontSize }}>{label}</Label>}
        {after}
      </Button>
    </Touchable>
  )
}

// Styles
const Touchable = styled(TouchableOpacity)`
  height: ${props => props.theme.touchTargetSize}px;
  flex-basis: ${props => props.theme.touchTargetSize}px;

  ${props => props.large && css`
    height: 54px;
    flex-basis: 54px;
  `};

  ${props => props.height && css`
    height: ${props.height}px !important;
    flex-basis: 60px;
  `};

  ${props => props.width && css`
    flex: none;
    width: ${props.width}px !important;
  `};

  ${props => props.marginRight && css`
    margin-right: ${props.marginRight}px !important;
  `};
`;

const Button = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  background-color: ${props => props.bgColor || '#415c85'};

  border-radius: ${props => props.borderRadius || 13}px;

  ${props => props.large && css`
    border-radius: 5px; 
  `};

  ${props => (props.primary || props.link) && css`
    background-color: transparent;
  `};
`;

const Label = styled.Text`
  color: ${props => props.theme.colors.white} !important;
  font-family: ${props => props.theme.fonts.bold};
  margin: 0 ${props => props.theme.spacing * .5}px;

  ${props => !props.primary && css`
    color: ${props => props.theme.colors.primary}
  `}
  
  ${props => props.fontSize && css`
    font-size: ${props.fontSize}px;
  `};
  
  ${props => props.footer && css`
    font-size: 16px;
  `};

  ${props => props.large && css`
    font-size: 17px;
  `};

  ${props => props.small && css`
    font-size: 13px;
  `};
  
  ${props => props.link && css`
    color: ${props => props.theme.colors.white};
  `};
  
  ${props => props.light && css`
    font-family: ${props => props.theme.fonts.medium};
  `};
`;
