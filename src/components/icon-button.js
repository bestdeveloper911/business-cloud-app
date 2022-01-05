// Dependencies
import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components/native'

// Components
import TouchableOpacity from './touchable-opacity'
import LinearGradient from './gradient'

// Prepare gradient
const Gradient = ({ children, primary, color, ...props }) => {
  return primary ? (
    <LinearGradient {...props}>
      {children}
    </LinearGradient>
  ) : (
    <View {...props}>
      {children}
    </View>
  )
}

// Export component
export default ({ onPress, image, text, primary, ...props }) => {
  return (
    <Action onPress={onPress}>
      <IconWrapper primary={primary}>
        {/* <FontAwesome name="check" size={25} color="#fff" /> */}
        <Image source={image} {...props} />
      </IconWrapper>
      <ActionText>{text}</ActionText>
    </Action>
  )
}

// Styles
const Action = styled(TouchableOpacity)`
  margin: 0 ${props => props.theme.spacing * .5}px;
  padding: ${props => props.theme.spacing}px;
  justify-content: center;
  align-items: center;
`

const IconWrapper = styled(Gradient)`
  width: ${props => props.theme.touchTargetSize}px;
  height: ${props => props.theme.touchTargetSize}px;
  border-radius: ${props => props.theme.touchTargetSize * .5}px;
  margin-bottom: ${props => props.theme.spacing * .5}px;
  background-color: ${props => props.theme.colors.tertiary};
  justify-content: center;
  align-items: center;
`

const ActionText = styled.Text`
  color: #E7EEF8;
  font-family: ${props => props.theme.fonts.medium};
  font-size: 14px;
`
