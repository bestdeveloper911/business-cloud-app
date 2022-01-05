import React, {useEffect, useState} from 'react'
import {ScrollView} from "react-native";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import i18n from '../../../i18n';
import { SubTitle, SubPanel, TopView } from './styles'
import Screen from '../../../components/screen'
import FadeIn from '../../../components/animations/fade-in'
import TeamCard from '../../../components/MySolutions/TeamCard'
import SolutionPanel from '../../../components/MySolutions/SolutionPanel'
import * as SplashScreen from 'expo-splash-screen';
import Images from "../../../constants/Images";
import {Box} from "../../../components/common";
import {Heading} from "../../../components/typography";
import {Container, styles} from "../Solutions/styles";
import {STORE_KEYS} from "../../../stores";

const MySolutions = (props) => {

  const [ready, setReady] = useState(false);
  useEffect(() => {
    SplashScreen.hideAsync();
    setReady(true);
    requestProducts();
    requestServices();
    requestMyTemplates();
    requestProfile();
  }, []);

  const right = {
    icon: 'menu',
    onPress: () => navigation.navigate('Settings')
  };

  const {
    navigation,
    requestProducts,
    requestServices,
    requestMyTemplates,
    requestProfile,
    products,
    services,
    myTemplates: templates,
    // team
    onboarding_avatar,
    onboarding_Company,
    onboarding_email,
    onboarding_calendly,
    bookkeeping_avatar,
    bookkeeper_Company,
    bookkeeper_Email,
    bookkeeper_Calendly,
    accounting_avatar,
    accountant_Name,
    accountant_email,
    accounting_calendly,
    legal_avatar,
    incorporation_Name,
    incorporation_email,
    incorporation_calendly,
  } = props;

  const myProducts = [];
  const myServices = [];
  const myTemplates = [];

  products.map((item, index) => {
    myProducts.push({
      id: index + 1,
      icon: item.CP_logo__c,
      name: item.Cloud_Product_Name__c,
      subscribed: item.Start_Date__c,
      status: item.Status__c,
      currency: item.CurrencyIsoCode,
      price: item.Price__c || 0,
      cancellable: true,
      link: '#',
      solutionId: item.Id,
      subscriptionId: item.Stripe_Subscription_ID__c,
      type: "product",
    });
  });
  myProducts.sort((a, b) => {
    return new Date(a.subscribed) - new Date(b.subscribed);
  });
  services.map((item, index) => {
    myServices.push({
      id: index + 1,
      icon: item.Service_Logo_url__c,
      name: item.Cloud_Service_name__c,
      subscribed: item.Start_Date__c,
      status: item.Status__c,
      currency: item.CurrencyIsoCode,
      price: item.Client_Price__c || 0,
      cancellable: true,
      link: '#',
      solutionId: item.Id,
      subscriptionId: item.Stripe_Subscription_ID__c,
      type: "service",
    });
  });
  myServices.sort((a, b) => {
    return new Date(a.subscribed) - new Date(b.subscribed);
  });
  templates.map((item, index) => {
    myTemplates.push({
      id: index + 1,
      icon: item.Cloud_template_logo__c,
      name: item.template_name__c,
      note: '',
      property: '',
      subscribed: item.Order_date__c,
      currency: item.CurrencyIsoCode,
      price: item.Price__c || 0,
      cancellable: false,
      link: item.Download_Link__c,
      solutionId: item.Id,
      subscriptionId: "One-Time",
      type: "template",
    });
  });
  const teamData = [
    {
      title: i18n.t('dashboard.onboarding').toUpperCase(),
      name: onboarding_Company,
      profile_img: onboarding_avatar,
      email: onboarding_email,
      calendly: onboarding_calendly,
      desc: 'Team member will be assigned when you order an onboarding service.',
      bgImage: '/images/dashboard/solutions/special_offer_3.png'
    },
    {
      title: i18n.t('dashboard.bookkeeping').toUpperCase(),
      name: bookkeeper_Company,
      profile_img: bookkeeping_avatar,
      email: bookkeeper_Email,
      calendly: bookkeeper_Calendly,
      desc: 'Team member will be assigned when you order an bookkeeping service.',
      bgImage: '/images/dashboard/solutions/img_services_002.png'
    },
    {
      title: i18n.t('dashboard.accounting').toUpperCase(),
      name: accountant_Name,
      profile_img: accounting_avatar,
      email: accountant_email,
      calendly: accounting_calendly,
      desc: 'Team member will be assigned when you order an accounting service.',
      bgImage: '/images/dashboard/solutions/img_location.png'
    },
    {
      title: i18n.t('dashboard.legal').toUpperCase(),
      name: incorporation_Name,
      profile_img: legal_avatar,
      email: incorporation_email,
      calendly: incorporation_calendly,
      desc: 'Team member will be assigned when you order an legal service.',
      bgImage: '/images/dashboard/solutions/img_services_005.png'
    }
  ];

  return (
    <Screen title="My Solutions" {...{ navigation, right }} left={false}>
      {ready && (
        <FadeIn style={styles.flex_1}>
          <ScrollView>
            <TopView>
              <Box paddingTop={20} paddingLeft={20} paddingBottom={20}>
                <Heading fontSize={30} lineHeight={40}>{i18n.t('dashboard.mySolutions')}</Heading>
              </Box>
            </TopView>
            <Container>
              <SubPanel>
                <SubTitle>{i18n.t('dashboard.myTeam')}</SubTitle>
                {
                  teamData.map((item, index) => (
                    <TeamCard key={index} data={item} />
                  ))
                }
              </SubPanel>
              <SubPanel>
                <SubTitle>My Solutions</SubTitle>
                <SolutionPanel data={myProducts} title={i18n.t('dashboard.products')}/>
                <SolutionPanel data={myServices} title={i18n.t('dashboard.services')}/>
                <Box marginBottom={20}>
                  <SolutionPanel data={myTemplates} title={i18n.t('dashboard.templates')}/>
                </Box>
              </SubPanel>
            </Container>
          </ScrollView>
        </FadeIn>
      )}
    </Screen>
  )
};

export default compose(
  inject(STORE_KEYS.MYSOLUTIONSSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.MYSOLUTIONSSTORE]: {
         requestProducts,
         requestServices,
         requestMyTemplates,
         requestProfile,
         products,
         services,
         myTemplates,
         // team members
         onboarding_avatar,
         onboarding_Company,
         onboarding_email,
         onboarding_calendly,
         bookkeeping_avatar,
         bookkeeper_Company,
         bookkeeper_Email,
         bookkeeper_Calendly,
         accounting_avatar,
         accountant_Name,
         accountant_email,
         accounting_calendly,
         legal_avatar,
         incorporation_Name,
         incorporation_email,
         incorporation_calendly,
       },
     }) => ({
      requestProducts,
      requestServices,
      requestMyTemplates,
      requestProfile,
      products,
      services,
      myTemplates,
      // team members
      onboarding_avatar,
      onboarding_Company,
      onboarding_email,
      onboarding_calendly,
      bookkeeping_avatar,
      bookkeeper_Company,
      bookkeeper_Email,
      bookkeeper_Calendly,
      accounting_avatar,
      accountant_Name,
      accountant_email,
      accounting_calendly,
      legal_avatar,
      incorporation_Name,
      incorporation_email,
      incorporation_calendly,
    })
  )
)(MySolutions);
