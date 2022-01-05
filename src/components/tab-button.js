// Dependencies
import React from 'react'
import styled from 'styled-components/native'

// Components
import TouchableOpacity from './touchable-opacity'

export default ({onPress, index, label, active}) => (
  <Touchable {...{onPress, index}}>
    <Button {...{active}}>
      <Label {...{active}}>
        {label}
      </Label>
    </Button>
  </Touchable>
)

// Styles
const Touchable = styled(TouchableOpacity)`
  flex-basis: auto;
  flex-grow: 1;
  justify-content: center;
  height: ${props => props.theme.touchTargetSize}px;
`

const Button = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.active
  ? props.theme.colors.tertiary
  : 'transparent'};
  border-radius: ${props => props.theme.touchTargetSize * .5}px;
  height: 28px;
`

const Label = styled.Text`
  color: ${props => props.active
  ? props.theme.colors.black
  : props.theme.colors.black};
  font-family: ${props => props.theme.fonts.bold};
  margin: 0 ${props => props.theme.spacing * .5}px;
  font-size: 12px;
`
