// Dependencies
import React, {  useState } from 'react'
import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { LinearGradient } from 'expo-linear-gradient'
import { onScroll } from 'react-native-redash'

// Prepare animated
const { cond, greaterThan, Value } = Animated

// Export component
export default ({ children, style, hasFooter, ...props }) => {
  // Prepare Y
  const [y] = useState(new Value(0))

  return (
    <Container {...{ style, hasFooter }}>
      <GradientContainer
        pointerEvents="none"
        style={{ opacity: cond(greaterThan(y, 0), 1, 0) }}
      >
        <ScrollGradient
          fadeDuration={0}
          colors={['rgba(0,0,0,.1)', 'transparent']}
        />
      </GradientContainer>
      <Content
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        overScrollMode="never"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: hasFooter ? 84 : 0 }}
        onScroll={onScroll({ y })}
        {...props}
      >{children}</Content>
    </Container>
  )
}

// Styles
const Container = styled.View`
  flex: 1;
`

const GradientContainer = styled(Animated.View)`
  position: absolute;
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

const Content = styled(Animated.ScrollView)`
  flex: 1;
`
