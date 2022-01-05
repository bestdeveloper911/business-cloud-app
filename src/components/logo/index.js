// Dependencies
import React from 'react'
import styled from 'styled-components/native'

// Components
import ScaleIn from '../animations/scale-in'

// Export component
export default ({ delay = 500 }) => {
  return (
    <Header>
      <LogoImage
        source={require('./assets/logo-white.png')}
      />
    </Header>
  )
}

// Styles
const LogoImage = styled.Image` 
  width: 200px;
  height: 60px;
`

const Header = styled.View`
  height: 200px;
  margin-top: ${props => props.theme.spacing}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
