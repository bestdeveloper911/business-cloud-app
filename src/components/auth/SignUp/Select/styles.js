
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import theme from "../../../../theme";

export const SelectWrapper = styled.View`
  padding: 0 15px;
`;

export const Wrapper = styled.View`
  height: 50px;
  position: relative;
`;

export const Container = styled.View`
  display: flex;
  width: 100%;
  position: absolute;
  background-color: transparent;
  z-index: ${props => props.isOpen ? (props.zIndex ? props.zIndex : 999999999) : 0};
`;

export const SelectInput = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 15px;
  background-color: ${theme.colors.gray3};
  border-radius: 10px;
`;

export const Menus = styled.View`
  border-radius: 5px;
  margin-top: 10px;
  background-color: #fafafa;
  padding: 10px 0;
`;

export const Option = styled.View`
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ImageIcon = styled.Image`
  width: 20px;
  margin-right: 10px;
  resizeMode: contain;
`;


export const styles = StyleSheet.create({
  icon_wrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
    right: 15,
    top: 0,
    bottom: 0,
  },
});