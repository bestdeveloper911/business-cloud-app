import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from 'react-native';

export const Wrapper = styled.View`
  width: 100%;
  position: relative;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

export const Photo = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Content = styled.View`
  justify-content: space-between;
  flex-grow: 1
`;

export const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: '#415c85',
    margin: 0,
    lineHeight: 18
  },
  property: {
    color: '#9eaabc',
    fontSize: 11
  }
});

