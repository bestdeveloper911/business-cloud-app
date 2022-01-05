// Dependencies
import React, { useState } from 'react'
import * as Haptics from 'expo-haptics'
import { Platform, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import Animated, { Easing } from 'react-native-reanimated'
import { timing } from 'react-native-redash'
import theme from '../theme'

// Components
import LinearGradient from './gradient'

// Prepare animated
const { Value, Clock, useCode, set, interpolate, Extrapolate, cond, neq } = Animated

// Constants
const WIDTH = 60
const HEIGHT = 35
const KNOB_SIZE = 29
const KNOB_MARGIN = (HEIGHT - KNOB_SIZE) / 2
const KNOB_DELTA = WIDTH - KNOB_SIZE - (KNOB_MARGIN * 2)

// Export component
export default React.memo(({ value, onChange }) => {
  const [{ animation, clock }] = useState({
    animation: new Value(value ? 1 : 0),
    clock: new Clock()
  })

  useCode(
    () => cond(
      neq(animation, value ? 1 : 0),
      set(
        animation,
        timing({
          clock,
          to: value ? 1 : 0,
          from: animation,
          duration: 120,
          easing: Easing.linear
        })
      )
    ),
    [value]
  )

  const handleToggle = () => {
    if (!!onChange) {
      if (Platform.OS === 'ios' || Platform.OS === 'android') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
      }
      onChange(!value)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handleToggle}>
      <Container>
        <GradientContainer
          style={{
            opacity: interpolate(animation, {
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: Extrapolate.CLAMP
            })
          }}
        >
          <Gradient />
        </GradientContainer>
        <Knob
          style={{
            transform: [
              {
                translateX: interpolate(animation, {
                  inputRange: [0, 1],
                  outputRange: [-KNOB_DELTA, 0],
                  extrapolate: Extrapolate.CLAMP
                })
              }
            ]
          }}
        />
      </Container>
    </TouchableWithoutFeedback>
  )
})

// Styles
const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  border-radius: ${props => props.theme.touchTargetSize * .5}px;
  overflow: hidden;
  background: rgba(0,0,0,.3);
`

const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
`

const GradientContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Knob = styled(Animated.View)`
  position: absolute;
  top: ${KNOB_MARGIN}px;
  right: ${KNOB_MARGIN}px;
  background-color: ${props => props.theme.colors.white};
  width: ${KNOB_SIZE}px;
  height: ${KNOB_SIZE}px;
  border-radius: ${KNOB_SIZE * .5}px;
`
