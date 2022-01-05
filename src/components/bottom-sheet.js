// Dependencies
import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Dimensions, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import Animated, { Easing } from 'react-native-reanimated'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import { onGestureEvent, timing, withSpring, clamp } from 'react-native-redash'

// Get screen height
const { height } = Dimensions.get('screen')

// Prepare animated
const { Value, Clock, cond, useCode, set, block, not, eq, clockRunning, interpolate, Extrapolate } = Animated

// Prepare spring config
const config = {
  damping: 15,
  mass: 1,
  stiffness: 150,
  overshootClamping: true,
  restSpeedThreshold: 0.1,
  restDisplacementThreshold: 0.1
}

// Export component
export default React.memo(({ children, active = false, onClose, touchable = true }) => {
  // Prepare values
  const [contentHeight, setContentHeight] = useState(0)
  const [translationY] = useState(new Value(0))
  const [velocityY] = useState(new Value(0))
  const [state] = useState(new Value(State.UNDETERMINED))
  const [offset] = useState(new Value(0))
  const [goUp] = useState(new Value(0))
  const [goDown] = useState(new Value(0))
  const [clock] = useState(new Clock())

  // Handle 'active' prop
  useEffect(() => {
    goUp.setValue(active ? 1 : 0)
    goDown.setValue(active ? 0 : 1)
  }, [active]);

  // Handle gestures
  const gestureHandler = touchable ? onGestureEvent({
    state,
    translationY,
    velocityY
  }) : null;

  // Spring function (with clamping)
  const translateY = clamp(withSpring({
    value: translationY,
    velocity: velocityY,
    offset,
    state,
    snapPoints: [-contentHeight, 0],
    onSnap: ([point]) => {
      if (point === 0) {
        !!onClose && onClose()
      }
    },
    config
  }), -contentHeight, 0)

  // Handle 'active' animations apart from gestures
  // Re-evaluate whenever 'contentHeight' changes
  useCode(
    () => block([
      cond(goUp,
        [
          set(
            offset,
            timing({
              clock,
              duration: 250,
              easing: Easing.inOut(Easing.ease),
              from: offset,
              to: -contentHeight
            })
          ),
          cond(not(clockRunning(clock)), [set(goUp, 0)])
        ]
      ),
      cond(goDown,
        [
          set(
            offset,
            timing({
              clock,
              duration: 250,
              easing: Easing.inOut(Easing.ease),
              from: offset,
              to: 0
            })
          ),
          cond(not(clockRunning(clock)), [set(goDown, 0)])
        ]
      )
    ]),
    [contentHeight]
  )

  return (
    <Fragment>
      <TouchableWithoutFeedback
        onPressIn={() => {
          goDown.setValue(1)
          !!onClose && onClose()
        }}
      >
        <Background
          style={{
            transform: [{
              translateY: cond(eq(translateY, 0), height, 0)
            }],
            opacity: interpolate(translateY, {
              inputRange: [-contentHeight, 0],
              outputRange: [.9, 0],
              extrapolate: Extrapolate.CLAMP
            })
          }}
        />
      </TouchableWithoutFeedback>
      <PanGestureHandler {...gestureHandler} minDeltaY={30}>
        <Sheet
          style={{
            transform: [{ translateY }]
          }}
        >
          <SheetLayout
            onLayout={({ nativeEvent: { layout } }) => {
              const { height } = layout
              if (!contentHeight) {
                setContentHeight(height)
              }
            }}
          >
            <SheetHeader/>
            <SheetContent>{children}</SheetContent>
          </SheetLayout>
        </Sheet>
      </PanGestureHandler>
    </Fragment>
  )
});

// Styles
const Background = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #151a1d;
`

const Sheet = styled(Animated.View)`
  position: absolute;
  z-index: 200;
  left: 0;
  right: 0;
  top: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #1b1f27;
`

const SheetHeader =  styled.View`
  margin-top: ${props => props.theme.spacing * .5}px;
  align-self: center;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background-color: rgba(255,255,255,.15);
`

const SheetContent = styled.View`
  padding: ${props => props.theme.spacing}px;
  flex: 1;
`

const SheetLayout = styled.View`
  position: relative;
`
