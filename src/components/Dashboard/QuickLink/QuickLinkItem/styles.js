import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from 'react-native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;
  border-radius: 7px;
`;

export const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: '#415c85'
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 10,
    borderRadius: 20
  }
});
