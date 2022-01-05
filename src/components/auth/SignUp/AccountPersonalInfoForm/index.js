import React from 'react';
import { Input } from "../../components";
import i18n from '../../../../i18n';

const AccountPersonalInfoForm = (props) => {
  const { values, onChangeValue } = props;

  return (
    <>
      <Input
        marginTop={8}
        label={i18n.t('auth.firstName')}
        placeholder={i18n.t('auth.firstName')}
        value={values.firstName}
        onChangeText={(value) => onChangeValue('firstName', value)}
      />
      <Input
        marginTop={20}
        label={i18n.t('auth.lastName')}
        placeholder={i18n.t('auth.lastName')}
        value={values.lastName}
        onChangeText={(value) => onChangeValue('lastName', value)}
      />
      <Input
        type="number"
        marginTop={20}
        marginBottom={10}
        label={i18n.t('auth.phone')}
        placeholder={i18n.t('auth.phone')}
        value={values.phoneNumber}
        onChangeText={(value) => onChangeValue('phoneNumber', value)}
      />
    </>
  )
};

export default AccountPersonalInfoForm;
