import styled from "styled-components/native";
import {Box} from "../../common";
import {StyleSheet} from "react-native";

export const CusModal = styled.Modal`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ModalWrapper = styled.View`
  width: 100%;
  height: 100%;
  background: #00000080;
`;

export const ModalContent = styled.View`
  width: 80%;
  background: white;
  margin: auto;
  border-radius: 10px;
  padding: 10px;
`;

export const Header = styled(Box)`
  padding: 10px 20px;
`;

export const Content = styled(Box)`
  padding: 10px 20px;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
  height: 50px;
  margin-top: auto;
`;

export const Dot = styled.View`
  width: 7px;
  height: 7px;
  border-radius: 7px;
  background-color: #d88f32;
  margin-right: 8px;
`;


export const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    minWidth: 40,
    marginRight: 15,
  },
  desc: {
    letterSpacing: 1
  },
  w_full: {
    width: '100%'
  },
  table_wrapper: {
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ebeef2',
    display: 'flex',
    padding: 20,
  },
  table: {
  },
  w_45: {
    width: '45%',
  }
});

