import React from "react";
import styled from "styled-components/native";
import { H3 } from "../../../components/typography";
import { css } from "styled-components/native/dist/styled-components.native.esm";
import theme from "../../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  touch: {
    flexDirection: 'row',
    marginRight: 20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer_1: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footer_2: {
    flexDirection: 'row',
    height: 28
  }
});

export const TitleWithLabel = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SectionTitle = styled.Text`
  font-size: 20px;
  color: ${theme.colors.darkGray};
  margin-bottom: 20px;
  font-family: ${props => props.theme.fonts.bold};
  margin-right: 20px;
`;

export const Section = styled.View`
  padding-bottom: 30px;
`;

export const SubSectionTitle = styled(SectionTitle)`
  color: #999;
  
  font-family: ${props => props.theme.fonts.medium};
  font-weight: normal;
  margin-top: 20px;
`;

export const ScrollContainer = styled.ScrollView`
`;

export const Container = styled.View`
  padding: 10px 20px 20px;
  display: flex;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer = styled(Header)`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Value = styled(Header)`
  flex-direction: row;
  height: 28px;
`;

export const Tabs = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: scroll;
  padding: 10px 0px;
  margin: 0 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;

export const TabItem = styled(H3)`
  display: flex;
  flex-direction: row;
  color: #647a9d;
  font-size: 20px;
  border-bottom-width: 2px;
  border-bottom-color: white;
  
  ${props => props.active && css`
    color: black;
    border-bottom-color: black;
  `};
`;

export const TextInput = styled.TextInput`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: ${props => props.active ? 10 : 0}px;
  padding-right: 5px;
  font-size: 18px;
`;

const Wrapper = styled.View`
  position: relative;
  margin-top: ${props => props.active ? 30 : 20}px;
  ${props => props.active && `
    border-style: solid;
    border-width: 1px;
    border-color: ${theme.colors.berlinBlue};
  `}
`;

const Label = styled.Text`
  position: absolute;
  top: -10px;
  left: ${props => props.active ? 10 : 0}px;
  font-size: 12px
  padding-right: 5px;
  padding-left: ${props => props.active ? 5 : 0}px;
  background-color: ${theme.colors.white};
  color: ${props => props.active ? theme.colors.berlinBlue : theme.colors.darkGray};
`;

const IconWrapper = styled.View`
 position: absolute;
 right: 10px;
 top: 16px
`;

export const LabelWrapper = ({name, component, active, icon}) => (
  <Wrapper active={active}>
    <Label active={active}>{name}</Label>
    {component}
    <IconWrapper>
      {icon}
    </IconWrapper>
  </Wrapper>
);

export const ButtonWrapper = styled.View`
  max-width: 250px;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

export const MainContent = styled.View`
  min-height: 680px;
`;

export const FooterSticker = styled.View`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CloseIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const FormLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const TextInput1 = styled.TextInput`
  padding: 10px;
  padding-right: 40px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid gray;
  font-size: 18px;
`;

export const TextInputWrapper = styled.View`
  position: relative;
  
`;

export const InputLabel = styled.Text`
  position: absolute;
  font-size: 16px;
  color: #DBE6F0;
  top: 15px;
  right: 5px;
`;

export const FormDescription = styled.Text`
  font-size: 16px;
  width: 100%;
  text-align: center;
  line-height: 20px;
  font-family: ${props => props.theme.fonts.regular};
`;

export const FormWrapper = styled.View`
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Strip = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.berlinBlue};
`;
