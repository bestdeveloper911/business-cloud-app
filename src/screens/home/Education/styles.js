import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from 'react-native';
import {H3} from "../../../components/typography";
import {css} from "styled-components/native/dist/styled-components.native.esm";

export const Container = styled.View`
  margin: 0 ${props => props.theme.spacing}px;
  padding: 0 15px;
`

export const Tabs = styled.View`
  overflow: scroll;
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

export const SubTitle = styled(H3)`
  margin: 0px 0 10px;
  font-size: 19px;
  font-weight: 600;
  width: 100%;
  color: #75787d;
  font-weight: 600;
`;

export const ButtonWrapper = styled.View`
  width: 160px;
  height: 50px;
  margin-top: auto;
`;


export const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20
  },
});
