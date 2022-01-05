import styled from "styled-components/native";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  noTaskTitle: {
    fontSize: 20,
    color: '#72767b'
  },
  img: {
    width: 25,
    height: 25,
    minWidth: 25,
    marginRight: 10,
  },
  desc: {
    fontSize: 13,
    color: '#9fa2a5',
    maxWidth: 270,
    textAlign: 'center'
  }
});

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  background: #fafbfb;
  border-radius: 7px;
  padding: 30px;
`;

export const Title = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.View`
  min-width: 120px;
  height: 40px;
  margin-top: 20px;
`;
