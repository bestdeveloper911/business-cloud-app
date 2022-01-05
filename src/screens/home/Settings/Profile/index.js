import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {DevSettings} from 'react-native';
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import DropDownPicker from 'react-native-dropdown-picker';
import {ButtonWrapper, Section, SectionTitle, TitleWithLabel} from "../styles";
import { Label, Value, Row } from "../Billing/style";
import { Icon } from "../../../../components/auth/components";
import EditButton from "../../../../components/Settings/EditButton";
import InputWithLabel from "../../../../components/Settings/InputWithLabel";
import Button from "../../../../components/button";
import theme from "../../../../theme";
import i18n from '../../../../i18n';
import Images from '../../../../constants/Images';
import {STORE_KEYS} from "../../../../stores";

const Profile = ({email, username, updateProfileName, updateProfile}) => {
  const [generalEdit, setGeneralEdit] = useState(false);
  const [country, setCountry] = useState('en')
  const [general, setGeneral] = useState({
    name: '',
    email: '',
    language: '',
  });

  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const contents = {
    general: [
      { label: i18n.t('auth.name'), field: 'name' },
      { label: i18n.t('auth.emailUpper'), field: 'email' },
      { label: i18n.t('dashboard.language'), field: 'language' },
    ],
    password: [
      { label: i18n.t('dashboard.currentPassword'), field: 'current' },
      { label: i18n.t('dashboard.newPassword'), field: 'new' },
      { label: i18n.t('dashboard.confirmPassword'), field: 'confirm' },
    ],
  };

  useEffect(() => {
    const getCountry = async() => {
      const initialLang = JSON.parse(await AsyncStorage.getItem('lang')) || 'en'
      setCountry(initialLang);
    }
    getCountry();
    setGeneral({
      ...general,
      name: username,
      email: email,
    });
  }, []);

  const handleChangeGeneral = (key) => (value) => {
    setGeneral({
      ...general,
      [key]: value,
    });
    if (key === 'name') {
      updateProfileName(value || '');
    }
  };

  const handleChangePassword = (key) => (value) => {
    setPassword({
      ...password,
      [key]: value,
    })
  };

  const changeLang = async(item) => {
    setCountry(item.value)
  };

  const onSave = async() => {
    i18n.changeLanguage(country)
    await AsyncStorage.setItem('lang', JSON.stringify(country));
    updateProfile();
    DevSettings.reload()
  };

  return (
    <>
      <Section>
        {generalEdit ? (
          <>
            <TitleWithLabel>
              <SectionTitle>{i18n.t('dashboard.general')}</SectionTitle>
            </TitleWithLabel>
            {contents.general.map((item, index) => (
              <>
              {item.field !== 'language'
                && <InputWithLabel
                  key={index}
                  label={item.label}
                  field={item.field}
                  value={general[item.field]}
                  onChange={handleChangeGeneral(item.field)}
                />}
              </>
            ))}
            <ButtonWrapper>
              <Button
                height={55}
                borderRadius={5}
                bgColor={theme.colors.gray}
                color={theme.colors.berlinBlue}
                width={110}
                marginRight={20}
                label="Cancel"
                fontSize={16}
                onPress={() => setGeneralEdit(false)}
              />
              <Button
                height={55}
                borderRadius={5}
                width={100}
                label="Save"
                fontSize={16}
                onPress={() => {}}
              />
            </ButtonWrapper>
          </>
        ) : (
          <>
            <TitleWithLabel>
              <SectionTitle>{i18n.t('dashboard.general')}</SectionTitle>
              <EditButton label={i18n.t('dashboard.edit')} onClick={() => setGeneralEdit(true)} />
            </TitleWithLabel>
            {contents.general.map((item, index) => (
              <Row key={index}>
                <Label>{item.label}</Label>
                {/* <Value>{general[item.field] ? general[item.field] : '-'}</Value> */}
                {item.field !== 'language'
                  ? <Value>{general[item.field] ? general[item.field] : '-'}</Value>
                  : <DropDownPicker
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
                  containerStyle={{height: 50, width: 200}}
                  style={{flexDirection: 'row-reverse'}}
                  itemStyle={{
                    flexDirection: 'row-reverse',
                    justifyContent: 'flex-start',
                  }}
                  showArrow={false}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  onChangeItem={item => changeLang(item)}
                />}
              </Row>
            ))}
          </>
        )}
      </Section>

      <Section>
        <TitleWithLabel>
          <SectionTitle>{i18n.t('auth.passwordUpper')}</SectionTitle>
        </TitleWithLabel>
        {contents.password.map((item, index) => (
          <InputWithLabel
            key={index}
            type='password'
            label={item.label}
            value={password[item.field]}
            onChange={handleChangePassword(item.field)}
          />
        ))}
        <ButtonWrapper>
          <Button
            height={55}
            borderRadius={5}
            bgColor={theme.colors.gray}
            color={theme.colors.berlinBlue}
            width={110}
            marginRight={20}
            label={i18n.t('dashboard.cancel')}
            fontSize={16}
            onPress={() => {}}
          />
          <Button
            height={55}
            borderRadius={5}
            width={100}
            label={i18n.t('dashboard.save')}
            fontSize={16}
            onPress={() => onSave()}
          />
        </ButtonWrapper>
      </Section>
    </>
  );
};

export default compose(
  inject(STORE_KEYS.AUTHSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.AUTHSTORE]: {
         email,
         username,
         updateProfileName,
         updateProfile,
       },
     }) => ({
      email,
      username,
      updateProfileName,
      updateProfile,
    })
  )
)(Profile);
