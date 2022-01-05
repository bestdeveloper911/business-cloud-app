import React from "react";
import styled, { css } from "styled-components/native";
import { StyleSheet } from 'react-native';
import { H3 } from "../../typography";

export const Container = styled.TouchableOpacity`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;  
  margin-bottom: 20px;
`;

export const ImageWrapper = styled.View`
  height: 120px;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  justify-content: space-between;
  height: 110px;
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
    flexDirection: 'row'
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
  },
  min_read: {
    color: '#2e323a', fontSize: 10
  },
  flex_column: {
    flexDirection: 'column',
  },
  flex_row: {
    flexDirection: 'row',
  }
});

