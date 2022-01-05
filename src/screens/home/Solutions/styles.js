import React from "react";
import styled from "styled-components/native"
import {StyleSheet} from "react-native";
import {H3} from "../../../components/typography";
import {css} from "styled-components/native/dist/styled-components.native.esm";

export const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
  }
});

export const Container = styled.View`
  padding: 0 15px 20px 15px;
  ${(props) => props.smallDevice && css`
    padding-right: 10px;
    padding-left: 10px;
  `}
`;

export const Tabs = styled.View`
  flex-direction: row;
  overflow: scroll;
  padding: 15px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;

export const TabItem = styled(H3)`
  display: flex;
  flex-direction: row;
  color: #647a9d;
  font-size: 20px;
  padding-left: 10px;
  
  ${props => !props.smallDevice ? css`
  color: #415c85;
  border-bottom-width: 2px;
  border-bottom-color: white;
    ${props.active && css`
    color: black;
    border-bottom-color: black;
    `}
  ` : css`
    border-left-width: 2px;
    border-left-color: white;
    ${props.active && css`
      color: black;
      border-left-color: black;
    `}
  `}
`;

export const SubTitle = styled(H3)`
  margin: 20px 0 10px;
  font-size: 19px;
  font-weight: 600;
  width: 100%;
  color: #75787d;
  font-weight: 600;
`;

export const DescriptionCard = styled.View`
  width: 100%;
  flex-direction: ${props => props.smallDevice ? 'column' : 'row'};
  justify-content: center;
  ${props => !props.smallDevice && css `
    min-height: 200px;
  `};
  border-bottom-width: 1px;
  border-bottom-color: #f2f3f6;
  border-top-width: 1px;
  border-top-color: #f2f3f6;
  margin-left: -15px;
  margin-right: -15px;
`;
