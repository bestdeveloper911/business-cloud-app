import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from 'react-native';
import { H3 } from "../../typography";

export const Wrapper = styled.View`
  width: 100%;
  margin-bottom: 40px;
`;

export const Item = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background: ${props => props.bgColor || '#fff'};
  border-radius: 5px;
  overflow: hidden;
  padding: 10px 20px;
  margin-top: 10px;
`;

export const Image = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 20px;
  margin-right: 15px;
`;

export const Content = styled(H3)`
  font-size: 16px;
  color: #435d86;
`;


