import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from 'react-native';
import {H3} from "../../../components/typography";
import {css} from "styled-components/native/dist/styled-components.native.esm";

export const styles = StyleSheet.create({
  section_title: {
    padding: 20,
  },
});

export const Container = styled.View`
  padding: 0 20px;
`;

export const Tabs = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: scroll;
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
  border-bottom-color: white;
  padding-left: 10px;
  
  ${props => props.active && css`
    color: black;
    border-left-color: ${props.smallDevice ? 'black' : 'white'};
    border-bottom-color: ${props.smallDevice ? 'black' : 'white'};
  `};
`;