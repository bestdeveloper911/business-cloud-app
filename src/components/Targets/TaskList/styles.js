import styled from "styled-components/native";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  list_title: {
    color: '#73767b',
    fontSize: 12,
    marginRight: 6,
  },
  list_count: {
    color: '#afb9c8',
    fontSize: 12
  },
  icon_wrapper: {
    marginLeft: 10,
  }
});

export const ListWrapper = styled.View`
  border-radius: 5px;
  background-color: white;
  overflow: hidden;
  flex: 1;
  height: 100%;
  padding-bottom: 20px;
`;

export const SubListTitle = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  margin-bottom: 10px;
  margin-top: ${props => props.mt || 0}px;
  letter-spacing: 1px;
`;

