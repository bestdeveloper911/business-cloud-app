// Dependencies
import React from 'react'
// import styled from 'styled-components/native'
import styled from "styled-components/native";

export default styled.TextInput`
  padding: 0 ${props => props.theme.spacing * .75}px;
  background-color:  ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.black};
  height: 52px;
  border-radius: 5px;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 16px;
  line-height: 22px;
  border: 1px solid ${props => props.theme.colors.tertiary};
`
