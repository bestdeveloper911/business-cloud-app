import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from 'react-native';
import {H3} from "../../../components/typography";
import {css} from "styled-components/native/dist/styled-components.native.esm";

export const styles = StyleSheet.create({
  section_title: {
    padding: 20,
  },
  wrapper: {
    paddingLeft: 15,
    paddingRight: 15
  },
  desc: {
    color: '#8d9bb0',
    marginLeft: 10
  }
});

export const Container = styled.View`
  padding: 0 30px;
`;

export const Tabs = styled.View`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  justify-content: space-between;
  padding: 15px 5px;
  margin: 0 -20px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;

export const TabItem = styled(H3)`
  display: flex;
  flex-direction: row;
  color: #647a9d;
  font-size: 20px;
  border-left-width: 2px;
  border-left-color: white;
  padding-left: 10px;
  
  ${props => props.active && css`
    color: black;
    border-left-color: black;
  `};
`;
