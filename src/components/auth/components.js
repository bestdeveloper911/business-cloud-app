import React, { useState } from "react";
import styled from "styled-components/native/dist/styled-components.native.esm";
import theme from "../../theme";
import { SvgBoxEllipsisIcon, SvgGoogleIcon, SvgRelockIcon } from "../SvgIcon";
import Button from "../button"

export const Wrapper = styled.KeyboardAvoidingView`
  position: relative;
  flex: 1;
  background-color: ${theme.colors.gray2};
`;

export const ScrollWrapper = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.gray2};
`;
export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  marginLeft: 5px;
  height: 80px;
  align-items: center;
  width: 100%;
`;
export const Header = styled.View`
  height: 64px;
  marginTop: 5px;
  marginBottom: 5px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  `;

export const Icon = styled.Image`
  width: 20px;
  resizeMode: contain;
`;

export const BoxContainer = styled.View`
  width: ${props => props.width ? props.width : 100}%;
  ${props => props.height && `height: ${props.height}px;`};
  ${props => props.flexWrap && `flex-wrap: ${props.flexWrap};`};

  ${props => props.display ? `display: ${props.display};` : ''}
  ${props => props.direction ? `flex-direction: ${props.direction};` : ''}
  ${props => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${props => props.overflow && `overflow: ${props.overflow};`}
  ${props => props.alignItems && `align-items: ${props.alignItems};`}

  margin-left: ${props => props.marginLeft ? props.marginLeft : 0}px;
  margin-right: ${props => props.marginRight ? props.marginRight : 0}px;
  margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;

  padding-top: ${props => props.paddingTop ? props.paddingTop : 0}px;
  padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : 0}px;
  padding-left: ${props => props.paddingLeft >= 0 ? props.paddingLeft : 15}px;
  padding-right: ${props => props.paddingRight >= 0 ? props.paddingRight : 15}px;

  align-self: center;
  background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : 0}px;
  z-index: ${props => props.zIndex ? props.zIndex : 0};
`;

export const Text = styled.Text`
  ${props => props.top >= 0 && `top: ${props.top}px;`}
  ${props => props.marginTop >= 0 && `margin-top: ${props.marginTop}px;`}
  ${props => props.marginLeft >= 0 && `margin-left: ${props.marginLeft}px;`}
  ${props => props.marginRight >= 0 && `margin-right: ${props.marginRight}px;`}
  margin-bottom: ${props => props.marginRight >= 0 ? props.marginRight : 8}px

  padding-top: ${props => props.paddingTop ? props.paddingTop : 0}px;
  padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : 0}px;
  padding-left: ${props => props.paddingLeft ? props.paddingLeft : 0}px;
  padding-right: ${props => props.paddingRight ? props.paddingRight : 0}px;

  ${props => props.center && 'text-align: center;'}
  ${props => props.fontWeight && `font-weight: ${props.fontWeight};`}
  background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
  fontSize: ${props => props.fontSize || 20}px;
  line-height: ${props => props.lineHeight ? props.lineHeight : 25}px;
  color: ${props => props.color || theme.colors.lightBerlinBlue};
`;

export const Error = styled.Text`
  padding: 10px;
  background-color: #E7BB2F;
  font-size: 16px;
  margin-top: ${props => props.type === 'register ' ? '30px' : '10px'};
  color: #555555;
  border-radius: 10px;
`;

export const CButton = styled(Button)`
  margin-top: 20px;
  border-style: solid;
  border-top-color: #869285;
  border-right-color: #869285;
  border-left-color: #869285;

  border-width: 0.5px;
  border-radius: ${props => (props.borderRadius || 8) + 0.5}px;

  ${props => props.border && `
    border-width: 2px;
    border-right-color: #000;
    border-bottom-color: #000;
    border-radius: ${(props.borderRadius || 13) + 2}px;
  `}
`;

export const InputWrapper = styled.View`
  position: relative;
`;

export const InputIcon = styled(SvgBoxEllipsisIcon)`
  position: absolute;
  top: 18px;
  right: 10px;
  z-index: 10;
`;

export const RelockIcon = styled(SvgRelockIcon)`
  position: absolute;
  top: 18px;
  right: 10px;
  z-index: 10;
`;

export const TextInput = styled.TextInput`
  padding: 0 ${theme.spacing * .75}px;
  background-color: ${theme.colors.gray3};
  color: ${theme.colors.black};
  height: 52px;
  border-radius: 8px;
  font-family: ${theme.fonts.regular};
  font-size: 19px;
  line-height: 22px;
  border: none;
`;

export const Input = ({ icon, marginTop, type, label, placeholder, value, onChangeText, secureTextEntry, ...rest }) => {

  const onKeyHandler = (e) => {
    const text = e.nativeEvent.text;
    if (type === 'number') {
      if(!isNaN(text)) {
        onChangeText(text);
      }
    } else{
      onChangeText(text);
    }
  };

  return (
    <BoxContainer
      marginTop={marginTop}
      direction="column"
      {...rest}
    >
      <Text>
        {label}
      </Text>
      <InputWrapper>
        <TextInput
          value={value}
          onChange={onKeyHandler}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.darkGray}
          selectionColor={theme.colors.black}
          secureTextEntry={secureTextEntry}
        />
      </InputWrapper>
    </BoxContainer>
  );
};
