import React, { useState } from 'react';
import { View } from 'react-native';
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { STORE_KEYS } from "../../../../stores";
import { SectionTitle, Section, TitleWithLabel, SubSectionTitle, ButtonWrapper } from '../styles';
import { AddButtonWrapper, AddText, AddTextWrapper, Row, Label, Value, InvoiceSection } from "./style";
import PaymentMethod from '../../../../components/Settings/PaymentMethod';
import TouchableOpacity from "../../../../components/touchable-opacity";
import EditButton from "../../../../components/Settings/EditButton";
import VisaFormModal from "../../../../components/Settings/VisaFormModal";
import InputWithLabel from "../../../../components/Settings/InputWithLabel";
import Button from "../../../../components/button";
import i18n from '../../../../i18n';
import theme from '../../../../theme';

const Billing = (props) => {
  const {
    businessName,
    email,
    billingStreet,
    billingCity,
    billingState,
    billingPostalCode,
    billingCountry,
    updateBusinessName,
    updateBillingStreet,
    updateBillingCity,
    updateBillingState,
    updateBillingPostalCode,
    updateBillingCountry,
    updateProfile,
    brand,
    last4,
    exp_month,
    exp_year,
  } = props;
  const [addModal, setAddModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const isPaymentConnected = last4 !== '';
  const payments = isPaymentConnected ? [
    {
      'id': 1,
      'type': (brand || '').toUpperCase(),
      'address': last4,
      'date': (exp_month && exp_year) ? `${exp_month}/${exp_year}` : ''
    }
  ] : [];
  const [primaryPaymentId, setPrimaryPaymentId] = React.useState(payments[0] ? payments[0].id : '');
  const methods = [
    {
      title: 'VISA',
      options: [{ value: 1, label: i18n.t('dashboard.makePrimary') }, { value: 2, label: i18n.t('dashboard.delete') }],
      value: '4242',
      date: '12/24',
    },
    {
      title: 'Credit Card',
      options: [{ value: 1, label: i18n.t('dashboard.makePrimary') }, { value: 2, label: i18n.t('dashboard.delete') }],
      value: '4012',
      date: '11/24',
    }
  ];
 
  const onSaveBtnClick = () => {
    setEdit(false);
    updateProfile();
  };


  return (
    <>
      <Section>
        <SectionTitle>{i18n.t('dashboard.paymentMethods')}</SectionTitle>
        {methods.map((method, index) => (
          <PaymentMethod
            key={index}
            title={method.title}
            options={method.options}
            value={method.value}
            date={method.date}
          />
        ))}


        <AddButtonWrapper>
          <TouchableOpacity
            onPress={() => setAddModal(true)}
          >
            <AddTextWrapper>
              <AddText>+</AddText>
            </AddTextWrapper>
          </TouchableOpacity>
        </AddButtonWrapper>
      </Section>

      {edit ? (
        <Section>
          <TitleWithLabel>
            <SectionTitle>{i18n.t('dashboard.billingInfomation')}</SectionTitle>
          </TitleWithLabel>
            <InputWithLabel
              value={businessName}
              label={i18n.t('auth.companyName')}
              onChange={(value) => updateBusinessName(value)}
            />
            <InputWithLabel
              label={i18n.t('auth.emailUpper')}
              field="email"
              value={email}
            />
            <InputWithLabel
              value={billingStreet}
              label={i18n.t('dashboard.street')}
              onChange={(value) => updateBillingStreet(value)}
            />
            <InputWithLabel
              value={billingCity}
              label={i18n.t('dashboard.city')}
              onChange={(value) => updateBillingCity(value)}
            />
            <InputWithLabel
              value={billingState}
              label={i18n.t('auth.provinceState')}
              onChange={(value) => updateBillingState(value)}
            />
            <InputWithLabel
              value={billingPostalCode}
              label={i18n.t('dashboard.postalCode')}
              onChange={(value) => updateBillingPostalCode(value)}
            />
            <InputWithLabel
              value={billingCountry}
              label={i18n.t('auth.country')}
              onChange={(value) => updateBillingCountry(value)}
            />

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
              onPress={() => setEdit(false)}
            />
            <Button
              height={55}
              borderRadius={5}
              width={100}
              label={i18n.t('dashboard.save')}
              fontSize={16}
              onPress={() => onSaveBtnClick()}
            />
          </ButtonWrapper>
        </Section>
      ) : (
        <Section>
          <TitleWithLabel>
            <SectionTitle>{i18n.t('dashboard.billingInfomation')}</SectionTitle>
            <EditButton
              label={i18n.t('dashboard.edit')}
              onClick={() => setEdit(true)}
            />
          </TitleWithLabel>
          <Row>
            <Label>{i18n.t('auth.companyName')}</Label>
            <Value>{ businessName || '' }</Value>
          </Row>
          <Row>
            <Label>{i18n.t('auth.emailUpper')}</Label>
            <Value>{ email || '' }</Value>
          </Row>
          <SubSectionTitle>{i18n.t('dashboard.billingAddress')}</SubSectionTitle>
          <Row>
            <Label>{i18n.t('dashboard.street')}</Label>
            <Value>{ billingStreet || '-' }</Value>
          </Row>
          <Row>
            <Label>{i18n.t('dashboard.city')}</Label>
            <Value>{ billingCity || '-'}</Value>
          </Row>
          <Row>
            <Label>{i18n.t('auth.provinceState')}</Label>
            <Value>{ billingState || '-'}</Value>
          </Row>
          <Row>
            <Label>{i18n.t('dashboard.postalCode')}</Label>
            <Value>{ billingPostalCode || '-'}</Value>
          </Row>
          <Row>
            <Label>{i18n.t('auth.country')}</Label>
            <Value>{ billingCountry || '-'}</Value>
          </Row>
        </Section>
      )}
       <Section>
          <TitleWithLabel>
            <SectionTitle>{i18n.t('dashboard.invoices')}</SectionTitle>
          </TitleWithLabel>
          <InvoiceSection>
            <Row>
              <Label>#</Label>
            </Row>
            <Row style={{marginLeft: 50}}>
              <Label>{i18n.t('dashboard.date')}</Label>
            </Row>
            <Row style={{marginLeft: 90}}>
              <Label>{i18n.t('dashboard.amount')}</Label>
            </Row>
          </InvoiceSection>
        </Section>
      <VisaFormModal isOpen={addModal} close={() => setAddModal(false)} />
    </>
  );
};

export default compose(
  inject(STORE_KEYS.SALESFORCESTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.SALESFORCESTORE]: {
         billingStreet,
         billingCity,
         billingState,
         billingPostalCode,
         billingCountry,
         businessName,
         email,
         updateBusinessName,
         updateBillingStreet,
         updateBillingCity,
         updateBillingState,
         updateBillingPostalCode,
         updateBillingCountry,
         updateProfile,
         brand,
         last4,
         exp_month,
         exp_year,
       },
     }) => ({
      billingStreet,
      billingCity,
      billingState,
      billingPostalCode,
      billingCountry,
      businessName,
      email,
      updateBusinessName,
      updateBillingStreet,
      updateBillingCity,
      updateBillingState,
      updateBillingPostalCode,
      updateBillingCountry,
      updateProfile,
      brand,
      last4,
      exp_month,
      exp_year,
    })
  )
)(Billing);
