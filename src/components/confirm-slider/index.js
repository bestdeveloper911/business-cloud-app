// Dependencies
import React, { useState } from 'react'
import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import { onGestureEvent, withSpring, clamp } from 'react-native-redash'

// Components
import Gradient from '../gradient'

// Prepare animated
const { Value, interpolate, Extrapolate, useCode, cond, eq, call } = Animated

// Prepare spring config
const config = {
  damping: 15,
  mass: 1,
  stiffness: 300,
  overshootClamping: true,
  restSpeedThreshold: 0.1,
  restDisplacementThreshold: 0.1
}

// Prepare constants
const SLIDER_HEIGHT = 64
const KNOB_SIZE = 58
const KNOB_MARGIN = (SLIDER_HEIGHT - KNOB_SIZE) / 2

// Export component
export default React.memo(({ width = 300, label = 'Confirm', onConfirm }) => {
  // Prepare state
  const [translationX] = useState(new Value(0))
  const [velocityX] = useState(new Value(0))
  const [state] = useState(new Value(State.UNDETERMINED))

  // Get slider delta
  const DELTA = width - KNOB_SIZE - (KNOB_MARGIN * 2)

  // Spring function (with clamping)
  const translateX = clamp(withSpring({
    value: translationX,
    velocity: velocityX,
    state,
    snapPoints: [0, DELTA * 2],
    config
  }), 0, DELTA)

  useCode(
    () => cond(
      eq(translateX, DELTA),
      call([], onConfirm)
    )
  )

  // Handle gestures
  const gestureHandler = onGestureEvent({
    state,
    translationX,
    velocityX
  })

  return (
    <Container {...{ width }}>
      <PanGestureHandler {...gestureHandler}>
        <Knob
          style={{
            transform: [{ translateX }]
          }}
        >
          <KnobImage source={require('./assets/knob.png')}/>
        </Knob>
      </PanGestureHandler>
      <Label
        style={{
          opacity: interpolate(translateX, {
            inputRange: [0, DELTA / 2],
            outputRange: [1, 0],
            extrapolate: Extrapolate.CLAMP
          })
        }}
      >{label}</Label>
    </Container>
  )
})

// Styles
const Container = styled(Gradient)`
  width: ${props => props.width}px;
  height: ${SLIDER_HEIGHT}px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
`

const Label = styled(Animated.Text)`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 17px;
  line-height: 24px;
`

const Knob = styled(Animated.View)`
  position: absolute;
  left: ${KNOB_MARGIN}px;
  z-index: 10;
  width: ${KNOB_SIZE}px;
  height: ${KNOB_SIZE}px;
  background-color: ${props => props.theme.colors.black};
  border-radius: ${KNOB_SIZE * .5}px;
  align-items: center;
  justify-content: center;
`

const KnobImage = styled.Image`
  width: 15px;
  height: 24px;
`
