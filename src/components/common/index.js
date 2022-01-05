import styled from "styled-components/native/dist/styled-components.native.esm";

export const FullView = styled.View`
  width: 100%;
`;

export const Box = styled.View`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
  align-items: ${props => props.alignItems ? props.alignItems : 'flex-start'};

  margin-left: ${props => props.marginLeft ? props.marginLeft : 0}px;
  margin-right: ${props => props.marginRight ? props.marginRight : 0}px;
  margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;
  
  padding-top: ${props => props.paddingTop ? props.paddingTop : 0}px;
  padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : 0}px;
  padding-left: ${props => props.paddingLeft ? props.paddingLeft : 0}px;
  padding-right: ${props => props.paddingRight ? props.paddingRight : 0}px;

  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
  z-index: ${props => props.zIndex ? props.zIndex : 0};
`;
