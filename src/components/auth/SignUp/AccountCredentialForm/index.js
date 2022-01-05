import React from 'react';
import { Input } from "../../components";
import i18n from '../../../../i18n';

const AccountCredentialForm = (props) => {
  const { values, onChangeValue } = props;

  return (
    <>
      <Input
        marginTop={28}
        label={i18n.t('auth.emailUpper')}
        placeholder={i18n.t('auth.emailLower')}
        value={values.email}
        onChangeText={(value) => onChangeValue('email', value)}
      />
      <Input
        marginTop={32}
        label={i18n.t('auth.passwordUpper')}
        placeholder={i18n.t('auth.passwordLower')}
        secureTextEntry
        value={values.password}
        onChangeText={(value) => onChangeValue('password', value)}
      />
      <Input
        marginTop={32}
        marginBottom={32}
        label={i18n.t('auth.retypePassword')}
        placeholder={i18n.t('auth.passwordLower')}
        secureTextEntry
        value={values.confirmPass}
        onChangeText={(value) => onChangeValue('confirmPass', value)}
      />
    </>
  )
};

export default AccountCredentialForm;
