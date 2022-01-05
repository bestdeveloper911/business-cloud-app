// Dependencies
import React from 'react'
import styled from 'styled-components/native'
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Stop
} from 'react-native-svg'
import Animated from 'react-native-reanimated'

// Constants
const { multiply, sub, cos, sin, add } = Animated
const AnimatedCircle = Animated.createAnimatedComponent(Circle)

// Export component
export default ({ progress, size, strokeWidth, primary, secondary, circleColor, start, end, ...props }) => {
  const r = size / 2 - strokeWidth / 2
  const circumference = r * 2 * Math.PI
  const cx = size / 2
  const cy = size / 2

  const x = add(multiply(cos(multiply(progress, Math.PI * 2)), r), cx)
  const y = add(multiply(sin(multiply(progress, Math.PI * 2)), r), cy)
  const strokeDashoffset = multiply(sub(1, progress), Math.PI * 2 * r)

  return (
    <Container {...props}>
      <SvgWrapper width={size} height={size}>
        <Defs>
          <LinearGradient id="gradient">
            <Stop stopColor={primary} offset="0%" />
            <Stop stopColor={secondary} offset="100%" />
          </LinearGradient>
        </Defs>
        <Circle
          stroke="rgba(150, 155, 166, 0.1)"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={`${circumference}, ${circumference}`}
          {...{ strokeWidth, strokeDashoffset, r, cx, cy }}
        />
        <AnimatedCircle
          stroke="url(#gradient)"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={`${circumference}, ${circumference}`}
          {...{ strokeWidth, strokeDashoffset, r, cx, cy }}
        />
        {end && (
          <AnimatedCircle
            stroke="transparent"
            fill={circleColor}
            cx={x}
            cy={y}
            r={strokeWidth / 2 - 1}
          />
        )}
        {start && (
          <Circle
            stroke="transparent"
            fill={circleColor}
            cx={r + cx}
            cy={cy}
            r={strokeWidth / 2 - 1}
          />
        )}
      </SvgWrapper>
    </Container>
  )
}

// Styles
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SvgWrapper = styled(Svg)`
  transform: rotateZ(-90deg);
`;
