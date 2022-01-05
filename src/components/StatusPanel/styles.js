import React from "react";
import styled from "styled-components/native";
import { Span, H3 } from "../typography";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  custom_span: {
    fontSize: 12,
    color: '#6b757b',
    marginBottom: 10
  },
  custom_span_1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#415c85'
  }
});

export const Container = styled.View`
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  padding: 40px 15px;
  marginBottom: 80px;
`;

export const ProgressPanel = styled.View`
  justify-content: center;
  border-radius: 6px;
`;

export const ProgressView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eaf9fa;
  padding: 20px 0;
  margin-bottom: 20px;
`;

export const ScoreView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #eaf9fa;
  padding: 20px 0;
`;

export const SubTitle = styled(H3)`
  margin: 30px 0 10px;
  font-size: 19px;
  font-weight: 600;
  width: 100%;
  color: #75787d;
  font-weight: 600;
`;
