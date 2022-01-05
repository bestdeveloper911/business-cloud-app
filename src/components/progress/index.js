// Dependencies
import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import Animated, { Easing } from 'react-native-reanimated'
import { loop } from 'react-native-redash'

// Components
import FadeIn from '../animations/fade-in'

// Prepare animated
const { Value, useCode, cond, eq, set, interpolate, Extrapolate, timing } = Animated

// Export component
export default ({ done = false }) => {
  // Prepare opacity
  const [dotsProgress] = useState(new Value(0))
  const [doneProgress] = useState(new Value(0))

  // Start 'dots' animation loop
  useCode(
    // Stop animation when 'done' is true
    () => cond(
      eq(done, false),
      set(dotsProgress, loop({ duration: 1500, easing: Easing.linear }))
    ),
    [done]
  );

  // Handle 'done' animation
  useEffect(() => {
    // Skip if done is false
    if (!done) {
      return;
    }

    // Prepare config
    const config = {
      duration: 750,
      toValue: 1,
      easing: Easing.inOut(Easing.ease)
    };

    // Run timing
    timing(doneProgress, config).start()
  }, [done]);

  // Animation values
  const scale = 1.0;
  const opacity = .05;

  return (
    <Container>
      <Overlay delay={500}>
        <Checkmark
          source={require('./assets/checkmark.png')}
          style={{
            opacity: interpolate(doneProgress, {
              inputRange: [0, .5, 1],
              outputRange: [0, 0, 1],
              extrapolate: Extrapolate.CLAMP
            }),
            transform: [
              {
                scale: interpolate(doneProgress, {
                  inputRange: [0, .5, .9, 1],
                  outputRange: [0, 0, 1.2, 1],
                  extrapolate: Extrapolate.CLAMP
                })
              }
            ]
          }}
        />
        <Dots
          style={{
            opacity: interpolate(doneProgress, {
              inputRange: [0, .3],
              outputRange: [1, 0],
              extrapolate: Extrapolate.CLAMP
            })
          }}
        >
          <Dot
            style={{
              opacity: interpolate(dotsProgress, {
                inputRange: [0, 1/3, 2/3],
                outputRange: [opacity, 1, opacity],
                extrapolate: Extrapolate.CLAMP
              }),
              transform: [
                {
                  scale: interpolate(dotsProgress, {
                    inputRange: [0, 1/3, 2/3],
                    outputRange: [1, scale, 1],
                    extrapolate: Extrapolate.CLAMP
                  })
                }
              ]
            }}
          />
          <Dot
            style={{
              opacity: interpolate(dotsProgress, {
                inputRange: [1/3, 2/3, 3/3],
                outputRange: [opacity, 1, opacity],
                extrapolate: Extrapolate.CLAMP
              }),
              transform: [
                {
                  scale: interpolate(dotsProgress, {
                    inputRange: [1/3, 2/3, 3/3],
                    outputRange: [1, scale, 1],
                    extrapolate: Extrapolate.CLAMP
                  })
                }
              ]
            }}
          />
          <Dot
            style={{
              opacity: interpolate(dotsProgress, {
                inputRange: [0, 1/3, 2/3, 3/3],
                outputRange: [1, opacity, opacity, 1],
                extrapolate: Extrapolate.CLAMP
              }),
              transform: [
                {
                  scale: interpolate(dotsProgress, {
                    inputRange: [0, 1/3, 2/3, 3/3],
                    outputRange: [scale, 1, 1, scale],
                    extrapolate: Extrapolate.CLAMP
                  })
                }
              ]
            }}
          />
        </Dots>
      </Overlay>
    </Container>
  )
}

// Styless
const Container = styled.View`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Overlay = styled(FadeIn)`
  flex: 1;
  background-color: rgba(21, 26, 29, .9);
  justify-content: center;
  align-items: center;
`

const Dots = styled(Animated.View)`
  flex-direction: row;
  margin-left: -${props => props.theme.spacing * .75}px;
`

const Dot = styled(Animated.View)`
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 2px;
  margin-left: ${props => props.theme.spacing * .75}px;
`

const Checkmark = styled(Animated.Image)`
  position: absolute; 
  width: 120px;
  height: 120px;
`
