// Dependencies
import React, { useState } from 'react'
import * as Haptics from 'expo-haptics'
import { Platform, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import Animated, { Easing } from 'react-native-reanimated'
import { timing } from 'react-native-redash'

// Components
import LinearGradient from './gradient'

// Prepare animated
const { Value, Clock, useCode, set, interpolate, Extrapolate, cond, neq } = Animated

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
          duration: 100,
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
        {!value && <EmptyContainer />}
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
          <CenterContainer/>
        </GradientContainer>
      </Container>
    </TouchableWithoutFeedback>
  )
})

// Styles
const Container = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.tertiary};
`

const EmptyContainer = styled.View`
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 12px;
  border: 2px solid ${props => props.theme.colors.dim};
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

const CenterContainer = styled(Animated.View)`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.black};
`
