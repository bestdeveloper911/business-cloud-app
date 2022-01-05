import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const CardHeader = styled.View`
  width: 100%;
  padding-bottom: 15px;
`;

export const CardBody = styled.View`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  flex-direction: ${(props) => props.smallDevice ? 'column' : 'row'};
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 15px;
  box-shadow: none;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 20px;
`;

export const IconWrapper = styled.View`
  border-radius: 5px;
  border: 1px;
  border-color: #e7e8e9;
  padding: 5px 10px;
`;

export const Desc = styled.View`
  width: 100%;
  padding: 20px 30px;
  background: rgba(250,250,250,0.9)
`;

export const styles = StyleSheet.create({
  title: {
    color: '#8d9bb0'
  },
  name: {
    fontSize: 20,
    color: '#415c85',
  },
  desc: {
    fontSize: 18,
    color: '#51565c',
    textAlign: 'center'
  },
});

