import styled from "styled-components/native";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  header_img: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  header_title: {
    color: '#FFFFFF',
    lineHeight: 24,
    marginLeft: 10,
    fontSize: 24
  },
  header_sub_title: {
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 18,
  },
  property: {
    fontSize: 12,
    color: '#81949c'
  },
  desc: {
    fontSize: 16,
    color: '#fbfefe'
  },
  prev_price: {
    fontSize: 10,
    textDecorationLine: 'line-through',
    color: '#46636f'
  },
  price: {
    fontSize: 17,
    color: '#fbfefe',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
    width: '100%'
  },
  custom_text: {
    fontSize: 10,
    letterSpacing: 1
  },
});

export const Container = styled.View`
  box-shadow: 0 0 20px #f5f5f5;
  border-radius: 5px;
  height: 100%;
  flex: 1;
  overflow: hidden;
`;

export const Header = styled.View`
  background-color: ${props => props.bgColor || '#FFFFFF'};
  align-items: center;
  flex-direction: row;
  padding: 10px 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
`;

export const Body = styled.View`
  flex: 1;
  padding: 10px 15px;
  padding-bottom: 20px;
  background-color: ${props => props.bgColor || '#FFFFFF'};
`;

export const Footer = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 12px;
  min-height: 50px;
  border-top-width: 1px;
  border-top-color: #81949c;
  background-color: ${props => props.bgColor || '#FFFFFF'};
`;

export const AddButton = styled.View`
  font-size: 10px;
  padding: 4px 10px;
  background-color: #fbfefe;
  border-radius: 3px;
  border: 1px solid #e3e7e8;
  letter-spacing: 1px;
`;
