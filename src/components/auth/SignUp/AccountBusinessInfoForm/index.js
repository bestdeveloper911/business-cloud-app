import React from 'react';
import DropDownSelector from "../DropdownSelector";
import { BoxContainer, Input } from "../../components";
import i18n from '../../../../i18n';
import Images from '../../../../constants/Images';
import Select from "../Select";
import {View} from "react-native";
import {Box} from "../../../common";
import {Mb20View} from "../../../../screens/home/commonStyled";

const AccountBusinessInfoForm = (props) => {
  const { values, onChangeValue } = props;
  const BUSINESS_TYPE = [
    'Registered',
    'Partnership',
    'Incorporated',
    'Freelance',
    'Non-Profit',
  ];
  const EMPLOYEES_COUNT = [5, 10, 15];
  const COUNTRIES_LIST = [
    {
      name: 'Canada',
      icon: Images.French_Flag,
    },
    {
      name: 'International',
      icon: Images.French_Flag,
    },
  ];
  
  const businessTypes = [
    {
      label: i18n.t('auth.registered'),
      value: 'registered',
    },
    {
      label: i18n.t('auth.partnership'),
      value: 'partnership',
    },
    {
      label: i18n.t('auth.incorporated'),
      value: 'incorporated',
    },
    {
      label: i18n.t('auth.freelancer'),
      value: 'freelancer',
    },
    {
      label: i18n.t('auth.nonProfit'),
      value: 'non-profit',
    },
  ];
  
  const employees = [
    {
      label: 5,
      value: 5
    },
    {
      label: 10,
      value: 10
    },
    {
      label: 15,
      value: 15
    },
  ];
  
  const countries = [
    {
      label: i18n.t('auth.canada'),
      value: 'Canada',
    },
    {
      label: i18n.t('auth.international'),
      value: 'International',
    },
    {
      label: 'Carribean',
      value: 'Carribean',
    },
    {
      label: 'Africa',
      value: 'Africa',
    },
    {
      label: 'Asia',
      value: 'Asia',
    },
    {
      label: 'Latin America',
      value: 'Latin America',
    },
    {
      label: 'Acadium',
      value: 'Acadium',
    },
    {
      label: 'Seedstars',
      value: 'Seedstars',
    },
    {
      label: 'Gravitas',
      value: 'Gravitas',
    },
  ];
  return (
    <>
      <Box marginBottom={15}>
        <Input
          marginTop={8}
          label={i18n.t('auth.companyName')}
          placeholder={i18n.t('auth.companyName')}
          value={values.companyName}
          onChangeText={(value) => onChangeValue('companyName', value)}
        />
      </Box>

      <View>
        <Select
          label={i18n.t('auth.businessType')}
          placeholder='Select'
          options={businessTypes} zIndex={9}
          value={values.businessType}
          onChange={(value) => onChangeValue('businessType', value)}
        />
      </View>

      <Mb20View>
        <Select
          label={i18n.t('auth.employees')}
          placeholder={i18n.t('auth.select')}
          options={employees}
          zIndex={8}
          value={values.employees}
          onChange={(value) => onChangeValue('employees', value)}
        />
      </Mb20View>

      <Mb20View>
        <Select
          label={i18n.t('auth.country')}
          placeholder={i18n.t('auth.select')}
          options={countries} zIndex={7}
          value={values.region}
          onChange={(value) => onChangeValue('region', value)}
        />
      </Mb20View>
      <Input
        marginTop={22}
        marginBottom={10}
        label={i18n.t('auth.provinceState')}
        placeholder={i18n.t('auth.state')}
        value={values.province_state}
        onChangeText={(value) => onChangeValue('province_state', value)}
      />
    </>
  )
};

export default AccountBusinessInfoForm;
