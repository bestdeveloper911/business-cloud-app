// Dependencies
import React from 'react'
import ProgressCircle from 'react-native-progress-circle'
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { Container, SubTitle, ProgressPanel, ProgressView, ScoreView, styles } from "./styles";
import i18n from '../../i18n';
// Components
import TeamView from '../Dashboard/TeamView'
import QuickLink from '../Dashboard/QuickLink'
import Button from '../button'
import { Span } from "../typography";
import { SvgGoogleDriveIcon } from "../SvgIcon";
import {STORE_KEYS} from "../../stores";
import Images from '../../constants/Images';

// Export component
const StatusPanel = (props) => {
  const {
    targetOverallProgress,
    taskActivityScore,
    googleDriveLink,
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
    products,
  } = props;

  const quickLinks = [];

  const myTeam = [
    {
      name: onboarding_Company,
      img: onboarding_avatar,
      email: onboarding_email,
      calendly: onboarding_calendly,
      default_img: '/images/Solutions/Service_Accounting.svg',
      property: 'ONBOARDING'
    },
    {
      name: bookkeeper_Company,
      img: bookkeeping_avatar,
      email: bookkeeper_Email,
      calendly: bookkeeper_Calendly,
      default_img: '/images/Solutions/Service_Accounting.svg',
      property: 'BOOKKEEPING'
    },
    {
      name: accountant_Name,
      img: accounting_avatar,
      email: accountant_email,
      calendly: accounting_calendly,
      default_img: Images.Service_Accounting,
      property: 'ACCOUNTING'
    },
    {
      name: incorporation_Name,
      img: legal_avatar,
      email: incorporation_email,
      calendly: incorporation_calendly,
      default_img: Images.Service_Legal,
      property: 'LEGAL'
    },
  ];
  (products || []).map((item, index) => {
    quickLinks.push({
      name: item.Cloud_Product_Name__c,
      img: item.CP_logo__c || '',
      url: item.Login_Page__c || '',
      date: item.Start_Date__c || '',
    });
    quickLinks.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  });

  return (
    <Container>
      <ProgressPanel>
        <ProgressView>
          <Span style={styles.custom_span}>{i18n.t('dashboard.overallProgress')}</Span>
          <ProgressCircle
            percent={Number(targetOverallProgress)}
            radius={40}
            borderWidth={3}
            color="#8d9bb0"
            shadowColor="#fff"
            bgColor="#eaf9fa"
          >
            <Span style={styles.custom_span_1}>{`${targetOverallProgress}%`}</Span>
          </ProgressCircle>
        </ProgressView>
        <ScoreView>
          <Span style={styles.custom_span}>{i18n.t('dashboard.activityScore')}</Span>
          <ProgressCircle
            percent={Number(taskActivityScore)}
            radius={40}
            borderWidth={3}
            color="#8d9bb0"
            shadowColor="#fff"
            bgColor="#eaf9fa"
          >
            <Span style={styles.custom_span_1}>{`${taskActivityScore}%`}</Span>
          </ProgressCircle>
        </ScoreView>
      </ProgressPanel>

      <SubTitle>{i18n.t('dashboard.myTeam')}</SubTitle>
      <TeamView data={myTeam}/>

      <SubTitle>{i18n.t('dashboard.sharedDrive')}</SubTitle>
      {/* googleDriveLink */}
      <Button
        borderRadius={5}
        before={<SvgGoogleDriveIcon color={'white'}/>}
        label={i18n.t('dashboard.openStorage')}>
      </Button>

      <SubTitle>{i18n.t('dashboard.quickLinks')}</SubTitle>
      <QuickLink data={quickLinks}/>
    </Container>
  )
}

export default compose(
  inject(STORE_KEYS.MYSOLUTIONSSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.MYSOLUTIONSSTORE]: {
         targetOverallProgress,
         taskActivityScore,
         googleDriveLink,
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
         products,
       },
     }) => ({
      targetOverallProgress,
      taskActivityScore,
      googleDriveLink,
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
      products,
    })
  )
)(StatusPanel);
