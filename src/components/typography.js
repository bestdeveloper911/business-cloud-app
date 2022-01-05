// Dependencies
import styled from 'styled-components/native'

// Export body
export const Body = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.black};
  text-align: ${props => props.center ? 'center' : 'left'};
  font-size: 14px;
  line-height: 22px;
`;

// Export heading
export const Heading = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.black};
  text-align: ${props => props.center ? 'center' : 'left'};
  font-size: ${props => props.fontSize ? props.fontSize : 22}px;
  line-height: ${props => props.lineHeight ? props.lineHeight : 30}px;
`;

export const H3 = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.color ? props.color : props.theme.colors.black};
  text-align: ${props => props.center ? 'center' : 'left'};
  font-size: 22px;
  line-height: 30px;
`;

export const P = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.color ? props.color : props.theme.colors.black};
  text-align: ${props => props.center ? 'center' : 'left'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  font-size: ${props => props.fontSize ? props.fontSize + 'px' : '14px'};
  line-height: ${props => props.lineHeight ? props.lineHeight : 22}px;
`;

export const Span = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.color ? props.color : props.theme.colors.black};
  text-align: ${props => props.center ? 'center' : 'left'};
  font-size: ${props => props.fontSize ? props.fontSize : 14}px;
`;
