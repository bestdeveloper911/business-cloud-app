import styled, {css} from "styled-components/native";
import {P, Span} from "../../typography";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  team_member_image: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  title_img: {
    width: 20,
    height: 20,
    minWidth: 20,
    marginRight: 5,
  },
  text_color: {
    color: '#d88f32',
  },
  title_color: {
    color: '#afb9c8',
    fontSize: 12,
    marginRight: 5,
  },
});

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom-color: #e5dfde;
  border-bottom-width: 1px;
  background-color: ${props => props.color || 'transparent'};
`;

export const Left = styled.View`
  flex: 1;
  height: 40px;
  overflow: hidden;  
`;

export const Right = styled.View`
  flex-direction: row;
  max-height: 20px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5px;
`;

export const DateView = styled(P)`
  color: ${props => props.color || '#919498'};
  font-size: 12px;
`;

export const PTView = styled.View`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  color: #d88f32;
  flex-wrap: nowrap;
`;

export const PTIcon = styled.View`
  width: 4px;
  height: 4px;
  background-color: #d88f32;
  border-radius: 4px;
  margin-right: 5px;
  margin-top: 2px;
`;

export const Action = styled.View`
  width: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor || '#fcfefe'};
`;

export const Content = styled.View`
  flex: 1;
  position: relative;
  padding: 15px 10px 15px 10px;
`;

export const TextContent = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Desc = styled(P)`
  padding-right: 10px;
  color: ${props => props.color || '#181e26'};
  text-decoration-line: ${props => props.decoration}
`;

export const Title = styled.View`
  flex-direction: ${(props) => props.smallDevice ? 'column' : 'row'};
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const SubTitle = styled(P)`
  color: ${props => props.color || '#a4afc0'};
  font-size: 13px;
  margin-left: 10px;
`;
