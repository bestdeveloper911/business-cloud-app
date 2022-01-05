import { StyleSheet } from 'react-native';
import theme from "../../../theme";
import styled from "styled-components/native";

export const Label = styled.Text`
  position: absolute;
  top: -10px;
  left: 10px;
  background: white;
  padding: 2px 3px;
  z-index: 1;
  font-size: 14px;
  color: ${theme.colors.berlinBlue};
`;

export const SelectWrapper = styled.View`
  position: relative;
  margin-bottom: 15px;
`;

export const styles = StyleSheet.create({
  select: {
    borderRadius: 0,
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#405c85',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
  },
  dropdown: {
    paddingHorizontal: 0,
    width: '100%',
  },
  dropdownText: {
    fontSize: 16,
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 0,
  },
  highlight: {
    backgroundColor: '#eeeeee',
  },
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
