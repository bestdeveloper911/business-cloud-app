import React from 'react';
import theme from "../../../../theme";
import { BoxContainer, Text } from "../../components";
import {Slider, View} from "react-native";
import RadioGroup from "../RadioGroup";
import styled from "styled-components";
import Select from "../Select";
import { Mb20View } from "../../../../screens/home/commonStyled";
import i18n from '../../../../i18n';


const AccountOptionForm = (props) => {
  const { values, onChangeValue } = props;
  const VALUE_LABELS = [
    '<50',
    '50-100',
    '100-250',
    '250-500',
    '500-1000',
  ];
  const TAX_TYPES = [
    i18n.t('auth.monthly'),
    i18n.t('auth.quarterly'),
    i18n.t('auth.yearly'),
  ];
  
  const accountTypes = [
    {
      label: 'Xero',
      value: 'Xero'
    },
    {
      label: i18n.t('auth.quickbooks'),
      value: 'Quickbooks'
    },
    {
      label: i18n.t('auth.sage'),
      value: 'Sage'
    },
    {
      label: i18n.t('auth.spreadsheets'),
      value: 'Spreadsheets/Other'
    },
  ];
  
  const months = [
    {
      label: i18n.t('auth.jan'),
      value: 'January'
    },
    {
      label: i18n.t('auth.feb'),
      value: 'February'
    },
    {
      label: i18n.t('auth.mar'),
      value: 'March'
    },
    {
      label: i18n.t('auth.apr'),
      value: 'April'
    },
    {
      label: i18n.t('auth.may'),
      value: 'May'
    },
    {
      label: i18n.t('auth.jun'),
      value: 'June'
    },
    {
      label: i18n.t('auth.jul'),
      value: 'July'
    },
    {
      label: i18n.t('auth.aug'),
      value: 'August'
    },
    {
      label: i18n.t('auth.sep'),
      value: 'September'
    },
    {
      label: i18n.t('auth.oct'),
      value: 'October'
    },
    {
      label: i18n.t('auth.nov'),
      value: 'November'
    },
    {
      label: i18n.t('auth.dec'),
      value: 'December'
    },
  ];
  
  const years = [
    {
      label: '2019',
      value: '2019'
    },
    {
      label: '2020',
      value: '2020'
    },
    {
      label: '2021',
      value: '2021'
    },
    {
      label: '2022',
      value: '2022'
    },
    {
      label: '2023',
      value: '2023'
    },
  ];
  
  return (
    <>
      <BoxContainer
        marginTop={10}
        direction="column"
      >
        <Text>
          {i18n.t('auth.monthlyTransactions')}
        </Text>
        <BoxContainer width={108} paddingLeft={0} paddingRight={0}>
          <Slider
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={values.monthlyTransactions}
            onValueChange={(value) => onChangeValue('monthlyTransactions', value)}
            minimumTrackTintColor={theme.colors.lightBerlinBlue}
            maximumTrackTintColor={theme.colors.lightBerlinBlue}
            thumbTintColor={theme.colors.lightBerlinBlue}
          />
          <BoxContainer direction="row" justifyContent="space-between">
            {VALUE_LABELS.map((label) => (
              <Text key={label} color={theme.colors.superLightBerlinBlue} fontSize={16}>{label}</Text>
            ))}
          </BoxContainer>
        </BoxContainer>
      </BoxContainer>

      <Mb20View>
        <Select
          label={i18n.t('auth.fiscalYear')}
          placeholder={i18n.t('auth.select')}
          options={months}
          value={values.finalMonth}
          onChange={(value) => onChangeValue('finalMonth', value)}
        />
      </Mb20View>

      <Mb20View>
        <Select
          label=''
          placeholder={i18n.t('auth.select')}
          options={years}
          value={values.finalYear}
          onChange={(value) => onChangeValue('finalYear', value)}
        />
      </Mb20View>

      <RadioGroup
        marginTop={15}
        label={i18n.t('auth.salesTax')}
        values={TAX_TYPES}
        checked={values.salesTaxFreq}
        onCheckValue={(value) => onChangeValue('salesTaxFreq', value)}
      />

      <Mb20View>
        <Select
          label={i18n.t('auth.whatAccounting')}
          placeholder={i18n.t('auth.select')}
          options={accountTypes}
          value={values.useForAccount}
          onChange={(value) => onChangeValue('useForAccount', value)}
        />
      </Mb20View>

      <BoxContainer
        marginTop={10}
        direction="row"
        flexWrap="wrap"
      >
        <TextDescription color={theme.colors.tertiary}>{i18n.t('auth.byContinuing')}</TextDescription>
        <TextDescription>{i18n.t('auth.termsService')}</TextDescription>
        <TextDescription color={theme.colors.tertiary}>, </TextDescription>
        <TextDescription>{i18n.t('auth.privacy')} </TextDescription>
        <TextDescription>{i18n.t('auth.policy')} </TextDescription>
        <TextDescription color={theme.colors.tertiary}>{i18n.t('auth.and')}</TextDescription>
        <TextDescription> {i18n.t('auth.cookiePolicy')}</TextDescription>
      </BoxContainer>
    </>
  );
};

export default AccountOptionForm;

const TextDescription = styled(Text)`
  line-height: 35px;
`;
