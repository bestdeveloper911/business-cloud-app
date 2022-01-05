// Dependencies
import React, { Fragment } from 'react'
import { Image, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import Constants from 'expo-constants'
import Animated from 'react-native-reanimated'
import { LinearGradient } from 'expo-linear-gradient'
import theme from '../../../theme'

// Components
import TouchableOpacity from '../../touchable-opacity'

// Prepare animated
const { cond, greaterThan } = Animated

// Constants
import { MIN_HEADER_HEIGHT, HEADER_DELTA } from '../../main-header/constants'

// Get profile image size
const size = theme.touchTargetSize

// Export component
export default ({ y, navigation, onScroll }) => {
  return (
    <Fragment>
      <GradientContainer
        pointerEvents="none"
        style={{ opacity: cond(greaterThan(y, HEADER_DELTA), 1, 0) }}
      >
        <ScrollGradient
          fadeDuration={0}
          colors={['rgba(0,0,0,.1)', 'transparent']}
        />
      </GradientContainer>
      <Container>
        <Gradient
          fadeDuration={0}
          resizeMode="stretch"
          source={require('../../../assets/gradient.png')}
        />
        <ImageContainer onPress={() => navigation.navigate('Settings')} activeOpacity={.5}>
          <ImageRounded>
            <Image
              source={require('../../../assets/profile-image.png')}
              style={{ width: size, height: size }}
            />
          </ImageRounded>
        </ImageContainer>
        <TouchableContainer onPress={onScroll}>
          <TouchableView />
        </TouchableContainer>
      </Container>
    </Fragment>
  )
}

// Styles
const Container = styled.View`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: ${MIN_HEADER_HEIGHT}px;
  background-color: ${props => props.theme.colors.background};
  overflow: hidden;
  flex-direction: row;
`

const Gradient = styled.Image`
  width: 100%;
  height: 100px;
  position: absolute;
  top: -${Constants.statusBarHeight}px;
  left: 0;
`

const ImageContainer = styled(TouchableOpacity)`
  margin-left: ${theme.spacing - 5}px;
  margin-top: ${theme.spacing - 5}px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  width: ${size + 10}px;
  height: ${size + 10}px;
`

const TouchableContainer = styled(TouchableWithoutFeedback)`
  position: absolute;
  z-index: 1002;
`

const TouchableView = styled.View`
  margin: ${theme.spacing - 5}px;
  flex: 1;
`

const ImageRounded = styled.View`
  width: ${size}px;
  height: ${size}px;
  border-radius: ${size / 2}px;
  overflow: hidden;
`

const GradientContainer = styled(Animated.View)`
  position: absolute;
  top: ${MIN_HEADER_HEIGHT}px;
  z-index: 1000;
  width: 100%;
`

const ScrollGradient = styled(LinearGradient)`
  width: 100%;
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
`
