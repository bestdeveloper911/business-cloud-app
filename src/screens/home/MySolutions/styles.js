import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from 'react-native';
import {H3} from "../../../components/typography";
import {css} from "styled-components/native/dist/styled-components.native.esm";

export const Container = styled.View`
  flex: 1;
  margin: 0;
  padding: 0 35px;
  background-color: #fafafa;
`;

export const SubPanel = styled.View`
  width: 100%;
`;

export const SubTitle = styled(H3)`
  margin: 30px 0 10px;
  font-size: 19px;
  font-weight: 600;
  width: 100%;
  color: #75787d;
  font-weight: 600;
`;

export const TopView = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  padding: 0 15px;
`;