import styled, {css} from "styled-components/native";
import {P, Span} from "../../typography";
import {StyleSheet, Dimensions} from "react-native";

export const styles = StyleSheet.create({
  team_member_image: {
    width: 20,
    height: 20,
    marginLeft: 10,
    borderRadius: 50,
  },
  color_text: {
    color: '#d88f32',
  }
});

export const Wrapper = styled.View`
  flex-direction: row;
  width: 100%;
  border-bottom-color: #e5dfde;
  border-bottom-width: 1px;
  background-color: ${props => props.color || 'transparent'};
  display: flex;
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
  align-items: center;
  flex-direction: row;
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

export const Action = styled.TouchableOpacity`
  width: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor || '#fcfefe'};
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  height: 100%;
  padding: 15px 10px 15px 10px;
  flex-wrap: wrap;
  flex-grow: 1;
`;

export const Desc = styled(P)`
  padding-right: 10px;
  flex: 2;
  color: ${props => props.color || '#181e26'};
`;
