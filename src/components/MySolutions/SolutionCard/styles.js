import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  border-top-width: 2px;
  border-top-color: #f5f7f9;
  padding: 20px;
  background-color: white;
`;

export const Footer = styled.View`
  flex-direction: ${(props) => props.smallDevice ? 'column' : 'row'};
  justify-content: space-around;
  border-top-width: 1px;
  border-top-color: #f5f7f9;
  padding-top: 15px;
`;

export const ActionBtn = styled.View`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px;
  border-color: #e7e8e9;
`;

export const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    minWidth: 40,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    color: '#405c85',
  },
  desc: {
    fontSize: 18,
    color: '#51565c',
    textAlign: 'center'
  },
  footer_title: {
    color: '#97a4b7',
    lineHeight: 14,
    fontSize: 12,
  },
  footer_value: {
    color: '#405c85',
    fontSize: 16,
    lineHeight: 18,
    marginBottom: 5,
  },
  custom_view: {
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  custom_view_1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image_style: {
    width: 16,
    height: 16
  },
  color_p: {
    color: '#97a4b7',
    fontSize: 12
  },
  color_span: {
    color: '#c3cad6',
    fontSize: 12
  },
});

