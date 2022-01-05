import React from "react";
import styled, { css } from "styled-components/native";
import { StyleSheet } from 'react-native';
import { H3 } from "../../typography";

export const Container = styled.TouchableOpacity`
  display: flex;
  position: relative;
  align-items: center;  
  margin-bottom: 20px;
`;

export const ImageWrapper = styled.View`
  height: 200px;
  width: 100%;
`;

export const Content = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled(H3)`
  font-size: 15px;
  line-height: 20px;
`;

export const TypeProperty = styled.Text`
  border-radius: 5px;
  font-size: 10px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.color ? props.color : props.theme.colors.black};
  background-color: ${props => props.bgColor ? props.bgColor : props.theme.colors.white};
  text-align: ${props => props.center ? 'center' : 'left'};
  padding: 8px;
`;

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  property: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  type: {
    borderRadius: 5,
    fontSize: 10
  },
  readNum: {
    letterSpacing: 1,
    color: '#a2a5a8',
    fontSize: 10,
    lineHeight: 20
  },
  min_wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginLeft: 10
  }
});

