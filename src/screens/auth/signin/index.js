import React, {useEffect, useState} from 'react';
import {DevSettings} from 'react-native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-toast-message';
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import * as SplashScreen from 'expo-splash-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import styled from 'styled-components/native'
import i18n from '../../../i18n';
import Button from '../../../components/button';
import {Box} from "../../../components/common";
import Select from '../../../components/auth/SignUp/Select';
import Images from '../../../constants/Images';
import SignInMenu from "../Menu";
import {BoxContainer, Header, HeaderContainer, ScrollWrapper, Text, Wrapper, Error, Icon} from "../../../components/auth/components";
import {STORE_KEYS} from "../../../stores";
import theme from "../../../theme";
import {SvgGoogleIcon, SvgLogoIcon, SvgMenuIcon, SvgCopyRightIcon, SvgRedLeafIcon} from "../../../components/SvgIcon";
import TouchableOpacity from '../../../components/touchable-opacity'

const SignIn = (props) => {
  const {loginWithMail, navigation} = props;
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [values, setValues] = useState('')
  const [country, setCountry] = useState('en')
  const { showSnackMsg } = props;

  useEffect(() => {
    const getCountry = async() => {
      const initialLang = await AsyncStorage.getItem('lang')
      setCountry(JSON.parse(initialLang));
    }
    SplashScreen.hideAsync()
    getCountry()
  }, []);

  const onSignIn = () => {
    if (validation()) {
      loginWithMail(email, password).then(() => {
        navigation.push('Main');
      })
        .catch(err => {
          showSnackMsg(err);
        });
    }
  };

  const validation = () => {
    if (!email || !password) {
      showSnackMsg(i18n.t('message.emailPassRequire'));
      return false;
    }
    if (email && !email.match(/^(([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+)?$/)) {
      showSnackMsg(i18n.t('message.emailValid'));
      return false;
    }
    return true;
  };

  const changeLang = async(item) => {
    i18n.changeLanguage(item.value)
    await AsyncStorage.setItem('lang', JSON.stringify(item.value));
    setCountry(item.value)
    // Updates.reload();
    // DevSettings.reload()
  }

  return (
    <ScrollWrapper>
      <Wrapper>
        {isShowMenu && (
          <SignInMenu close={() => setIsShowMenu(false)}/>
        )}
        <HeaderContainer>
          <SvgLogoIcon
            width={50}
            height={35}
            marginTop={5}
            color={theme.colors.skyBlue}
          />
          <DropDownPicker
              items={[
                  {label: 'Deutsch', value: 'de', icon: () => <Icon source={Images.DE_Flag} />},
                  {label: 'English', value: 'en', icon: () =>  <Icon source={Images.US_Flag} />},
                  {label: 'Español', value: 'es', icon: () =>  <Icon source={Images.ES_Flag} />},
                  {label: 'Français', value: 'fr', icon: () =>  <Icon source={Images.FR_Flag} />},
                  {label: 'Italiano', value: 'it', icon: () =>  <Icon source={Images.IT_Flag} />},
                  {label: 'Português', value: 'pt', icon: () =>  <Icon source={Images.PT_Flag} />},
                  {label: '汉语', value: 'chs', icon: () =>  <Icon source={Images.CN_Flag} />},
                  {label: '日本語', value: 'ja', icon: () =>  <Icon source={Images.JP_Flag} />},
                  {label: '한국어', value: 'ko', icon: () =>  <Icon source={Images.KR_Flag} />},
              ]}
              defaultValue={country}
              containerStyle={{height: 50, width: 100}}
              style={{flexDirection: 'row-reverse', backgroundColor: theme.colors.gray2, borderWidth: 0}}
              itemStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'flex-start',
              }}
              showArrow={false}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => changeLang(item)}
          />
          <Header>
            <BoxContainer
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              zIndex={1}
            >
              <Box
                justifyContent="space-between"
                align-items="center"
              >
                <ButtonWrapper>
                  <Button
                    fontSize={25}
                    label={i18n.t('auth.login')}
                    onPress={() => navigation.navigate('SignIn')}
                    color={theme.colors.lightBerlinBlue}
                    bgColor={theme.colors.gray1}
                    large
                  />
                </ButtonWrapper>
                <ButtonWrapper>
                  <Button
                    fontSize={25}
                    label={i18n.t('auth.signup')}
                    onPress={() => navigation.navigate('SignUp')}
                    bgColor={theme.colors.purple}
                    large
                  />
                </ButtonWrapper>
                <ButtonWrapper>
                  <SvgMenuIcon
                    onPress={() => setIsShowMenu(true)}
                    fill={theme.colors.darkGray}
                  />
                </ButtonWrapper>
              </Box>
            </BoxContainer>
          </Header>
        </HeaderContainer>
        <Content>
          <BoxContainer
            marginTop={10}
            direction="column"
          >
            <Title>{i18n.t('auth.login')}</Title>
            <Text>
              {i18n.t('auth.emailUpper')}
            </Text>
            <InputWrapper>
              <TextInput
                placeholder={i18n.t('auth.emailLower')}
                placeholderTextColor={theme.colors.darkGray}
                selectionColor={theme.colors.black}
                onChangeText={(value) => setEmail(value)}
              />
            </InputWrapper>
          </BoxContainer>
          <BoxContainer
            marginTop={20}
            direction="column"
          >
            <Text marginTop={12}>
              {i18n.t('auth.passwordUpper')}
            </Text>
            <InputWrapper>
              <TextInput
                placeholder={i18n.t('auth.passwordLower')}
                secureTextEntry
                placeholderTextColor={theme.colors.darkGray}
                selectionColor={theme.colors.black}
                onChangeText={(value) => setPassword(value)}
              />
            </InputWrapper>
            {
              error && <Error>{error}</Error>
            }
          </BoxContainer>
          <BoxContainer
            marginTop={31}
            marginBottom={50}
            height={150}
            direction="column"
          >
            <CButton
              height={30}
              borderRadius={20}
              bgColor={theme.colors.purple}
              fontSize={22}
              onPress={onSignIn}
              label={i18n.t('auth.login')}
            />
            <CButton
              height={30}
              fontSize={22}
              borderRadius={20}
              bgColor={theme.colors.white}
              color={theme.colors.berlinBlue}
              label={i18n.t('auth.forgotPassword')}
            />
          </BoxContainer>
          <BoxContainer
            direction="column"
          >
            <Text center>
              {i18n.t('auth.or')}
            </Text>
            <GoogleButton color={theme.colors.white}>
              <SvgGoogleIcon />
              <Text fontSize={16} marginLeft={15}>
                {i18n.t('auth.signinGoogle')}
              </Text>
            </GoogleButton>
            {
              error && <Error>{error}</Error>
            }
          </BoxContainer>
          <BoxContainer
              width={55}
              marginTop={35}
              direction="row"
            >
            <Text fontSize={25}>2021 </Text>
            <SvgCopyRightIcon fill={theme.colors.lightBerlinBlue} />
            <Text fontSize={25}> CloudMeb</Text>
          </BoxContainer>
          <BoxContainer
            width={110}
            marginTop={20}
            direction="row"
          >
            <Text fontSize={25} lineHeight={34} center>
              {i18n.t('auth.footer.proudly')} <SvgRedLeafIcon fill='#F00' /> {i18n.t('auth.footer.canadian')}
            </Text>
          </BoxContainer>
          <BoxContainer
            width={90}
            marginTop={50}
            marginBottom={50}
            direction="row"
            justifyContent='space-between'
          >
            <Text fontSize={22} lineHeight={34} center>{i18n.t('auth.footer.termsUse')}</Text>
            <Text fontSize={22} lineHeight={34} center>{i18n.t('auth.privacyPolicy')}</Text>
          </BoxContainer>
        </Content>
      </Wrapper>
    </ScrollWrapper>
  )
};

export default compose(
  inject(STORE_KEYS.AUTHSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.AUTHSTORE]: {
         loginWithMail,
         showSnackMsg,
       }
     }) => ({
      loginWithMail,
      showSnackMsg,
    })
  )
)(SignIn);

// Styles

const ButtonWrapper = styled.View`
  align-self: center;
  margin: 8px;
`;

const Content = styled.View`
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

const Title = styled.Text`
  margin-bottom: 35px;
  font-size: 47px;
  text-align: center;
  color: #305780;
`;

const CButton = styled(Button)`
  margin-top: 20px;
  border-style: solid;
  border-top-color: #869285;
  border-right-color: #869285;
  border-left-color: #869285;

  border-width: 0.5px;
  border-radius: ${props => (props.borderRadius || 8) + 0.5}px;

  ${props => props.label === 'Login' && `
    border-right-color: #000;
    border-bottom-color: #000;
    border-radius: ${(props.borderRadius || 13) + 2}px;
  `}
`;

const InputWrapper = styled.View`
  position: relative;
`;

const TextInput = styled.TextInput`
  padding: 0 ${props => props.theme.spacing * .75}px;
  background-color: ${props => props.theme.colors.gray3};
  color: ${props => props.theme.colors.black};
  height: 52px;
  border-radius: 8px;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 19px;
  line-height: 22px;
  border: none;
`;

const GoogleButton = styled(TouchableOpacity)`
  justify-content: center;
  display: flex;
  align-items: center;
  width: 70%;
  align-self: center;
  flex-direction: row;
  background-color: ${props => props.color};
  padding: 10px;
`