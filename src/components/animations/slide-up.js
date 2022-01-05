// Dependencies
import React, { useState, useEffect } from 'react'
import Animated, { Easing } from 'react-native-reanimated'

// Prepare animated
const { Value, timing, interpolate, Extrapolate } = Animated  

// Prepare component
const Animation = ({ children, duration, delay, style }) => {
  // Prepare opacity
  const [progress] = useState(new Value(0))

  // Prepare config
  const config = {
    duration,
    toValue: 1,
    easing: Easing.out(Easing.ease)
  }

  // Start animation
  useEffect(() => {
    // Delay animation
    setTimeout(() => {
      // Run timing
      timing(progress, config).start()
    }, delay)
  }, [])

  return (
    <Animated.View
      pointerEvents="box-none"
      style={{
        opacity: interpolate(progress, {
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: Extrapolate.CLAMP
        }),
        transform: [
          {
            translateY: interpolate(progress, {
              inputRange: [0, 1],
              outputRange: [50, 0],
              extrapolate: Extrapolate.CLAMP
            })
          }
        ],
        ...style
      }}
    >
      {children}
    </Animated.View>
  )
}

// Prepare default values
Animation.defaultProps = {
  duration: 500,
  delay: 0
};

// Export component
export default Animation