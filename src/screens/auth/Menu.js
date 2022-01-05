import React, { useEffect } from 'react';
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { STORE_KEYS } from "../../stores";
import styled from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import Button from '../../components/button';
import { Box } from "../../components/common";
import theme from "../../theme";
import i18n from '../../i18n';
import {
  SvgFacebookFIcon,
  SvgInstagramIcon,
  SvgLinkedInInIcon,
  SvgLogoIcon,
  SvgTwitterIcon,
} from "../../components/SvgIcon";
import { BoxContainer, HeaderContainer, Header, Text } from "../../components/auth/components";
import { Image, TouchableOpacity } from "react-native";
import Images from "../../constants/Images";


const SignInMenu = (props) => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  const mockItems = [
    i18n.t('auth.header.howWorks'),
    i18n.t('auth.header.education'),
    i18n.t('auth.header.resources'),
    i18n.t('auth.header.becomeParnter'),
  ];
  
  return (
    <Wrapper>
      <HeaderContainer>
        <Header>
          <BoxContainer
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <SvgLogoIcon
              width={50}
              height={35}
              marginTop={5}
              color={ theme.colors.skyBlue }
            />

            <Box
              marginRight={10}
              justifyContent="space-between"
              align-items="center"
            >
              <ButtonWrapper>
                <Button
                  label={i18n.t('auth.login')}
                  color={ theme.colors.lightBerlinBlue }
                  bgColor={ theme.colors.gray1 }
                  large
                />
              </ButtonWrapper>
              <ButtonWrapper>
                <Button
                  label={i18n.t('auth.signup')}
                  bgColor={ theme.colors.purple }
                  large
                />
              </ButtonWrapper>
              <ButtonWrapper>
                <TouchableOpacity onPress={() => props.close()}>
                  <ImageWrapper source={Images.TimeImage} />
                </TouchableOpacity>
              </ButtonWrapper>
            </Box>
          </BoxContainer>
        </Header>
      </HeaderContainer>
      <Content>
        <BoxContainer
          marginTop={ 10 }
          direction="column"
        >
          <BoxContainer
            marginTop={167}
            marginBottom={30}
          >
            {mockItems.map((item) => (
              <Title key={item}>{item}</Title>
            ))}
          </BoxContainer>
        </BoxContainer>
      </Content>
      <FooterContainer
        left={0}
        width={ 50 }
        paddingBottom={ 33 }
      >
        <Text
          fontSize={17}
          color={theme.colors.white}
        >
          marc@cloudmeb.com
          {'\n'}
          +1800 355 4936
        </Text>
      </FooterContainer>
      <FooterContainer
        right={0}
        width={ 40 }
        paddingTop={ 3 }
        paddingBottom={ 33 }
        display="flex"
        justifyContent="space-between"
        direction="row"
        alignItems="center"
      >
        <SvgLinkedInInIcon fill={ theme.colors.white } />
        <SvgFacebookFIcon fill={ theme.colors.white } />
        <SvgTwitterIcon fill={ theme.colors.white } />
        <SvgInstagramIcon fill={ theme.colors.white } />
      </FooterContainer>
    </Wrapper>
  );
};

export default compose(
  inject(STORE_KEYS.AUTHSTORE),
  observer,
)(SignInMenu);

// Styles
const Wrapper = styled.KeyboardAvoidingView`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: ${props => props.theme.colors.menuBackground};
  z-index: 100;
`;
const ButtonWrapper = styled.View`
  align-self: center;
  margin: 10px;
  margin-left: 0;
`;

const Content = styled.View`
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
`;

const Title = styled.Text`
  line-height: 62px;
  font-size: 40px;
  text-align: center;
  color: ${ props => props.theme.colors.superLightgray };
`;

const FooterContainer = styled.View`
  position: absolute;
  bottom: 0;
  ${ props => props.left && `left: ${props.left}`}%;
  ${ props => props.right && `right: ${props.right}`}%;
  width: ${ props => props.width ? props.width : 100 }%;

  ${ props => props.display ? `display: ${ props.display };` : '' }
  ${ props => props.direction ? `flex-direction: ${ props.direction };` : '' }
  ${ props => props.justifyContent ? `justify-content: ${ props.justifyContent };` : '' }

  margin-left: ${ props => props.marginLeft ? props.marginLeft : 0 }px;
  margin-right: ${ props => props.marginRight ? props.marginRight : 0 }px;
  margin-top: ${ props => props.marginTop ? props.marginTop : 0 }px;
  margin-bottom: ${ props => props.marginBottom ? props.marginBottom : 0 }px;

  padding-top: ${ props => props.paddingTop ? props.paddingTop : 0 }px;
  padding-bottom: ${ props => props.paddingBottom ? props.paddingBottom : 0 }px;
  padding-left: ${ props => props.paddingLeft ? props.paddingLeft : 15 }px;
  padding-right: ${ props => props.paddingRight ? props.paddingRight : 15 }px;

  align-self: center;
  background-color: ${ props => props.bgColor ? props.bgColor : 'transparent' };
`;

const ImageWrapper = styled(Image)`
  width: 18px;
  height: 18px;
`;
