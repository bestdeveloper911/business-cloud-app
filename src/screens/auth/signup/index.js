import React, { useEffect, useState } from 'react';
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { STORE_KEYS } from "../../../stores";
import styled from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import i18n from '../../../i18n';
import Button from '../../../components/button';
import { Box } from "../../../components/common";
import theme from "../../../theme";
import { SvgCopyRightIcon, SvgLogoIcon, SvgMenuIcon, SvgRedLeafIcon } from "../../../components/SvgIcon";
import { BoxContainer, CButton, Header, ScrollWrapper, Text, Wrapper, Error } from "../../../components/auth/components";
import ProgressLine from "../../../components/auth/SignUp/ProgressLine";
import AccountCredentialForm from "../../../components/auth/SignUp/AccountCredentialForm";
import AccountPersonalInfoForm from "../../../components/auth/SignUp/AccountPersonalInfoForm";
import AccountBusinessInfoForm from "../../../components/auth/SignUp/AccountBusinessInfoForm";
import AccountOptionForm from "../../../components/auth/SignUp/AccountOptionForm";
import Images from '../../../constants/Images';
import SignInMenu from "../Menu";

const SignUp = (props) => {
  const { navigation, registerWithMail, showSnackMsg, checkExistEmail, setPendingEmail } = props;

  const [currentStep, setCurrentStep] = useState(1);
  const [isShowMenu, setIsShowMenu] = useState(false);
 
  const [error, setError] = useState(null);

  const [step1, setStep1] = useState({
    email: '',
    password: '',
    confirmPass: '',
  });

  const [step2, setStep2] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const [step3, setStep3] = useState({
    companyName: '',
    businessType: '',
    employees: '',
    region: '',
    province_state: '',
  });

  const [step4, setStep4] = useState({
    onboardStatus: '',
    monthlyTransactions: 1,
    finalMonth: '',
    finalYear: '',
    salesTaxFreq: '',
    useForAccount: '',
  });

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  const getDayOnMon = (year, month) => {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) return 31;
    if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
    if (month === 2) {
      if (year % 4 === 0 && year % 100 !== 0) return 29;
      return 28;
    }
    return 1;
  }

  const onNextStep = async() => {
    if (validation() && currentStep < 5) {
      if (currentStep === 1) {
        const isExist = await checkExistEmail(step1.email);
        if (isExist) {
          showSnackMsg('Email is already existing.');
          return;
        } else {
          setCurrentStep(currentStep + 1);
        }
      } else if (currentStep === 2 || currentStep === 3) {
        setCurrentStep(currentStep + 1);
      } else if (currentStep === 4) {
        const fiscalYearEnd = `${step4.finalYear}-${step4.finalMonth}-${getDayOnMon(step4.finalYear, step4.finalMonth)}`;
        const socialMode = '';
        registerWithMail(
          `${step2.firstName} ${step2.lastName}`, step1.email, step1.password, step2.phoneNumber, step3.companyName, step3.businessType,
          step3.region, step4.onboardStatus, step4.monthlyTransactions, step4.salesTaxFreq, fiscalYearEnd, socialMode
        )
          .then(mode => {
            if (!mode) {
              setPendingEmail(step1.email);
              setCurrentStep(currentStep + 1);
            }
          })
          .catch(err => {
            showSnackMsg('Sorry, your registration is failed.');
          });
      } else {
        setError(null);
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const validation = () => {
    if (currentStep === 1) {
      const { email, password, confirmPass } = step1;
      if (!email || !password || !confirmPass) {
        showSnackMsg(i18n.t('message.allFieldsRequire'));
        return false;
      }
      if (!email.match(/^(([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+)?$/)) {
        showSnackMsg(i18n.t('message.emailValid'));
        return false;
      }
      if (password !== confirmPass) {
        showSnackMsg(i18n.t('message.passwordMatch'));
        return false;
      }
    }
    else if (currentStep === 2) {
      const { firstName, lastName, phoneNumber } = step2;
      if (!firstName || !lastName || !phoneNumber) {
        showSnackMsg(i18n.t('message.allFieldsRequire'));
        return false;
      }
    }
    else if (currentStep === 3) {
      const { companyName, businessType, employees, region, province_state } = step3;
      if (!companyName || !businessType || !employees || !region || !province_state) {
        showSnackMsg(i18n.t('message.allFieldsRequire'));
        return false;
      }
    }
    else if (currentStep === 4) {
      const { monthlyTransactions, finalMonth, finalYear, salesTaxFreq, useForAccount } = step4;
      if (!monthlyTransactions || !finalMonth || !finalYear || !salesTaxFreq || !useForAccount) {
        showSnackMsg(i18n.t('message.allFieldsRequire'));
        return false;
      }
    }
    return true;
  };

  return (
    <>
      {isShowMenu && (
        <SignInMenu close={() => setIsShowMenu(false)} />
      )}
      <ScrollWrapper>
        <Wrapper>
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
                color={theme.colors.skyBlue}
              />

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
          <Content>
              {/*<ImageWrapper>*/}
            <Image source={Images.SignUpImage} />
              {/*</ImageWrapper>*/}
            <Title>{i18n.t('auth.createAccount')}</Title>
            {currentStep < 5 && (
              <ProgressLine stepCount={4} currentStep={currentStep} />
            )}
            {currentStep === 1 &&
              <AccountCredentialForm
                values={step1}
                onChangeValue={(key, value) => setStep1({
                  ...step1,
                  [key]: value,
                })}
              />
            }
            {currentStep === 2 &&
              <AccountPersonalInfoForm
                values={step2}
                onChangeValue={(key, value) => setStep2({
                  ...step2,
                  [key]: value,
                })}
              />
            }
            {currentStep === 3 &&
              <AccountBusinessInfoForm
                values={step3}
                onChangeValue={(key, value) => setStep3({
                  ...step3,
                  [key]: value,
                })}
              />
            }
            {currentStep === 4 &&
              <AccountOptionForm
                values={step4}
                onChangeValue={(key, value) => setStep4({
                  ...step4,
                  [key]: value,
                })}
              />
            }
            {currentStep === 5 && (
              <WelcomeMessage>
                Thank you for your registration. Please verify your email.
              </WelcomeMessage>
            )}
            {
              error &&
              <BoxContainer
                direction="column"
              >
                <Error type='register'>{error}</Error>
              </BoxContainer>
            }

            {currentStep < 5 && (
              <BoxContainer
                height={95}
                direction="column"
              >
                <CButton
                  borderRadius={20}
                  bgColor={theme.colors.purple}
                  border
                  fontSize={22}
                  label={currentStep < 4 ? i18n.t('auth.next') : i18n.t('auth.signup')}
                  onPress={onNextStep}
                />
              </BoxContainer>
            )}
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
    </>
  );
};

export default compose(
  inject(STORE_KEYS.AUTHSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.AUTHSTORE]: {
         registerWithMail,
         showSnackMsg,
         checkExistEmail,
         setPendingEmail
       }
     }) => ({
      registerWithMail,
      showSnackMsg,
      checkExistEmail,
      setPendingEmail
    })
  )
)(SignUp);

// Styles

const ButtonWrapper = styled.View`
  align-self: center;
  margin: 10px;
`;

const Content = styled.View`
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
`;

const Title = styled.Text`
  margin-bottom: 25px;
  font-size: 47px;
  text-align: center;
  color: #305780;
`;

const WelcomeMessage = styled.Text`
  margin-top: 37px;
  margin-bottom: 130px;
  line-height: 48px;
  font-size: 32px;
  text-align: center;
  color: ${ props => props.theme.colors.black };
`;

const Image = styled.Image`
  position: absolute;
  top: -330px;
  right: 0;
  width: 110%;
  resizeMode: contain;
  opacity: 0.1;
  z-index: -1;
`;
