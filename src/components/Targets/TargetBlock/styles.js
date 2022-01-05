import styled, {css} from "styled-components/native";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header_top: {
    width: '100%',
    paddingBottom: 20,
  },
  header_bottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#e5dfde',
    borderTopWidth: 1,
    paddingTop: 20
  },
  left: {
    flexDirection: 'row',
  },
  avatar: {
    height: 50,
    width: 50,
    marginRight: 15
  },
  title_wrapper: {
    flexDirection: 'column',
    flex: 2
  },
  flexWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  icon_wrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 5,
    marginRight: 20,
  },
  success_image: {
    width: 50,
    height: 50
  },
  listImage: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  list_title: {
    color: '#181e26',
    fontSize: 18,
    marginRight: 10
  },
  name: {
    fontSize: 20,
    color: '#415c85',
  },
  property: {
    fontSize: 14,
    color: '#aab4c4'
  },
  count: {
    fontSize: 20,
    color: '#415c85'
  },
  date: {
    color: '#7937d3'
  },
  price: {
    color: '#d88f32'
  },
  reward: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: '#d88f32',
    marginRight: 5,
  },
  w_100: {
    width: '100%',
  },
  custom_span: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#415c85',
  },
  custom_span_1: {
    fontSize: 11,
    color: '#aab4c4',
    marginBottom: 5
  },
  color_span: {
    color: '#8d9bb0'
  },
});

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: column;
  border-radius: 7px;
  margin-bottom: 30px;
  border: none;
  background-color: ${props => props.finished === true ? '#fafcf9' : '#fff'};
  
  box-shadow: ${props => props.finished !== true ? '0 0 20px #f5f5f5;' : 'none'};
`;

export const Header = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.finished === true ? '#a6b79f' : '#75757a'};
  padding: 20px 15px;
`;

export const HeaderItem = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  padding: 0 20px;
  background-color: #fafbfb;
`;

export const ListTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-top: ${props => props.mt || 0}px;
  display: flex;
`;

export const TargetListView = styled.View`
  border-radius: 7px;
  background-color: ${props => props.color || '#fff'};
  padding-bottom: 0;
`;

export const Footer = styled.View`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const ShowMoreBtn = styled.Text`
  padding: 9px 10px 7px;
  color: #74787d;
  fontSize: 12px;
  border-radius: 3px;
  border: 1px solid #e7e8e9;
  letter-spacing: 1px;
  width: 120px;
  text-align: center;
  margin: 0 auto;
`;

