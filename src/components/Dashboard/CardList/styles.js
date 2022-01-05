import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card_title: {
    textAlign: 'center',
    color: '#425d86',
    marginBottom: 20
  },
  card_content: {
    justifyContent: 'center',
  }
});

export const Card = styled.View`
  border-radius: 5px;
  background-color: ${props => props.bgColor || '#f7fdfd'};
  padding: 10px 20px 50px;
  height: 180px;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const Wrapper = styled.View`

`;
