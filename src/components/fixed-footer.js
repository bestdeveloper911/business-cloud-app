// Dependencies
import React from 'react'
import styled from 'styled-components/native'
import { Platform } from 'react-native';

// Export component
export default ({ children }) => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
  return (
    <Container pointerEvent="box-none" isMobile={isMobile}>
      {/*<Gradient*/}
      {/*  fadeDuration={0}*/}
      {/*  pointerEvents="none"*/}
      {/*  source={require('../assets/gradient-footer.png')}*/}
      {/*  resizeMode="stretch"*/}
      {/*/>*/}
      <Content pointerEvent="box-none">
        {children}
      </Content>
    </Container>
  )
}

// Styles
const Container = styled.View`
  position: absolute;
  bottom: ${props => props.isMobile ? '0' : '35px'};
  left: 0;
  width: 100%;
`

const Content = styled.View`
  flex: 1;
`

const Gradient = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
