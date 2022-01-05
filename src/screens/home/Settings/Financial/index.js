import React, { useState } from 'react';
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { STORE_KEYS } from "../../../../stores";
import InputWithLabel from '../../../../components/Settings/InputWithLabel';
import SelectWithLabel from '../../../../components/Settings/SelectWithLabel';
import { SectionTitle, Section, ButtonWrapper } from '../styles';
import Button from "../../../../components/button";
import i18n from '../../../../i18n';
import theme from "../../../../theme";

const typeOptions = ['Registered', 'Partnership', 'Incorporated', 'Non-Profit', 'Freelancer'];
const frequencyOptions = ['Weekly', 'Monthly', 'Quarterly', 'Yearly'];
const transactionOptions = ['1-50', '50-100', '100-250', '250-500', '500-1000'];

const Financial = (props) => {
  const {
    businessName, businessType, q1Data, q2Data, q3Data, nextYearEnd, fiscalYearEnd,
    phone, website, monthlyTransactions, salesTaxFrequency,
    updateBusinessName, updateBusinessType, updateFiscalYearEnd, updateSalesTaxFrequency,
    updateMonthlyTransactions, updatePhone, updateWebsite, updateProfile,
  } = props;

  return (
    <>
      <Section>
        <SectionTitle>{i18n.t('dashboard.business')}</SectionTitle>
        <InputWithLabel
          label={i18n.t('auth.companyName')}
          value={businessName}
          onChange={(value) => updateBusinessName(value)}
        />
        <SelectWithLabel
          label={i18n.t('dashboard.type')}
          options={typeOptions}
          defaultValue={businessType}
          onChange={(value) =>updateBusinessType(value)}
        />
        <InputWithLabel
          label={i18n.t('auth.phone')}
          value={phone}
          onChange={(value) => updatePhone(value)}
        />
        <InputWithLabel
          label={i18n.t('dashboard.website')}
          value={website}
          onChange={(value) => updateWebsite(value)}
        />

      </Section>

      <Section>
        <SectionTitle>{i18n.t('dashboard.fiscalMilestones')}</SectionTitle>
        <InputWithLabel
          label={i18n.t('dashboard.prevFiscal')}
          value={fiscalYearEnd}
          onChange={(value) => updateFiscalYearEnd(value)}
        />
        <InputWithLabel
          label="Q1"
          field="email"
          value={q1Data}
        />
        <InputWithLabel
          label="Q2"
          field="email"
          value={q2Data}
        />
        <InputWithLabel
          label="Q3"
          field="email"
          value={q3Data}
        />
        <InputWithLabel
          label={i18n.t('dashboard.nextFiscal')}
          value={nextYearEnd}
          onChange={(value) => updateFiscalYearEnd(value)}
        />

      </Section>

      <Section>
        <SectionTitle>{i18n.t('dashboard.salesTaxReport')}</SectionTitle>
        <SelectWithLabel
          label={i18n.t('dashboard.frequency')}
          defaultValue={salesTaxFrequency}
          options={frequencyOptions}
          onChange={(value) =>updateSalesTaxFrequency(value)}
        />
      </Section>

      <Section>
        <SectionTitle>{i18n.t('auth.monthlyTransactions')}</SectionTitle>
        <SelectWithLabel
          label={i18n.t('dashboard.ofTransactions')}
          defaultValue={monthlyTransactions}
          options={transactionOptions}
          onChange={(value) =>updateMonthlyTransactions(value)}
        />
      </Section>

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
          onPress={() => updateProfile()}
        />
      </ButtonWrapper>
    </>
  );
};

export default compose(
  inject(STORE_KEYS.SALESFORCESTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.SALESFORCESTORE]: {
         businessName,
         businessType,
         q1Data,
         q2Data,
         q3Data,
         nextYearEnd,
         fiscalYearEnd,
         phone,
         website,
         monthlyTransactions,
         totalPoints,
         salesTaxFrequency,
         updateBusinessName,
         updateBusinessType,
         updateFiscalYearEnd,
         updateSalesTaxFrequency,
         updateMonthlyTransactions,
         updatePhone,
         updateWebsite,
         updateProfile,
       },
     }) => ({
      businessName,
      businessType,
      q1Data,
      q2Data,
      q3Data,
      nextYearEnd,
      fiscalYearEnd,
      phone,
      website,
      monthlyTransactions,
      totalPoints,
      salesTaxFrequency,
      updateBusinessName,
      updateBusinessType,
      updateFiscalYearEnd,
      updateSalesTaxFrequency,
      updateMonthlyTransactions,
      updatePhone,
      updateWebsite,
      updateProfile,
    })
  )
)(Financial);
