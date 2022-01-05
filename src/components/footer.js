// Dependencies
import React from 'react'
import styled, { css } from 'styled-components/native'
import theme from '../theme'

// Components
import FixedFooter from './fixed-footer'
import Button from './button'

// Export component
export default ({ buttons }) => {
  return (
    <FixedFooter>
      <Container single={buttons.length === 1}>
        {
          buttons.map((button, index) => (
            <FooterButton
              {...button}
              key={index}
              index={index}
            />
          ))
        }
      </Container>
    </FixedFooter>
  )
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  padding: ${props => props.theme.spacing}px;
  
  ${props => props.single && css`
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
  `}
`;

const FooterButton  = styled(Button)`
  margin-left: ${props => props.index && props.theme.spacing};
  border-radius: 0;
`;
