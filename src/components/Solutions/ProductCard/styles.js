import styled from "styled-components/native";
import {StyleSheet, Modal, Dimensions} from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  header_img: {
    width: 28,
    height: 28,
    marginRight: 10
  },
  header_title: {
    color: '#405c85',
    lineHeight: 24,
    fontSize: 16
  },
  header_sub_title: {
    color: '#97a4b7',
    fontSize: 12,
    lineHeight: 18,
  },
  header_modal_sub_title: {
    color: '#97a4b7',
    lineHeight: 18,
    marginLeft: 10,
    marginTop: 5,
  },
  property: {
    fontSize: 11,
    paddingBottom: 5,
    color: '#8295b0',
    letterSpacing: 1
  },
  desc: {
    fontSize: 16,
    color: '#fbfefe'
  },
  prev_price: {
    fontSize: 10,
    textDecorationLine: 'line-through',
    color: '#c5c9ca'
  },
  price: {
    color: '#405c85',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  warning: {
    color: '#b73f8a',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  custom_span: {
    fontSize: 30,
    marginRight: 5
  },
  custom_text: {
    fontSize: 10,
    letterSpacing: 1
  },
  video_style: {
    width: '100%',
    height: '60%',
    backgroundColor: 'black',
  },
  flex_wrap: {
    flexWrap: 'wrap',
  },
  video: {
    width: '100%',
    height: 300,
  }
});

export const Container = styled.View`
  border: 1px solid #bbb;
  border-radius: 5px;
  min-width: 120px;
  overflow: hidden;
  padding: 0 1px;
  height: 100%;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #ebeef2;
  padding: 10px 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Body = styled.View`
  flex: 1;
  padding: 10px 15px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 12px;
  background-color: #fbfefe;
  min-height: 50px;
`;

export const Desc = styled.View`
  align-items: flex-start;
`;

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

export const ButtonWrapper = styled.View`
  flex: 1;
  height: 50px;
  margin-top: auto;
`;

export const VideoWrapper = styled.View`
  background-color: #84868A;
  height: 300px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Video = styled.View`
  background-color: black;
  height: 180px;
`;
