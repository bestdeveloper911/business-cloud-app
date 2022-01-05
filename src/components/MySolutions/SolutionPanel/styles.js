import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Header = styled.View`
  width: 100%;
`;

export const Content = styled.View`
  width: 100%;
  margin: 20px 0;
`;

export const EmptyBody = styled.View`
  height: 75px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f5f7f9;
  border-radius: 5px;
`;

export const Footer = styled.View`
  height: 50px;
  width: 220px;
`;

export const SolutionCardList = styled.View`
  width: 100%;
  elevation: 3;
`;

export const styles = StyleSheet.create({
  title: {
    fontSize: 20
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

