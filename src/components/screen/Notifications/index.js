import React from "react";
import styled from 'styled-components/native'
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import {Image} from "react-native";
import i18n from '../../../i18n';
import { Heading, P } from "../../typography";
import {Box} from "../../common";
import Images from "../../../constants/Images";
import {STORE_KEYS} from "../../../stores";

const Container = styled.View`
  display: flex;
  background-color: transparent;
  flex-direction: row;
  justify-content: flex-end;
  height: auto;
  z-index: 20
`;

const Wrapper = styled.View`
  margin-right: 20px;
  margin-top: -8px;
  width: 250px;
  background-color: white;
  elevation: 1;
  border-radius: 8px;
`;

const Header = styled.View`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;

const Content = styled.View`
  margin-bottom: 20px;
`;

const Footer = styled.View`
  border-top-width: 1px;
  border-top-color: #e5e5e5;
  padding: 20px;
`;

const ShowMoreBtn = styled.Text`
  padding: 9px 10px 7px;
  color: #74787d;
  fontSize: 14px;
  border-radius: 3px;
  border: 1px solid #e7e8e9;
  letter-spacing: 1px;
  width: 120px;
  text-align: center;
  margin: 0 auto;
`;

const Notifications = ({ notifications, changenofityShow }) => {
  const data = [];
  (notifications || []).map((item, index) => {
    data.push({
      'title': item?.Msg_Header__c || '-',
      'desc': item?.Message__c || '-',
      'date': item?.Msg_Date__c || '-',
      'link': item?.Link__c || '',
    })
  })

  return (
    <Container
      onStartShouldSetResponder={evt => {
        evt.persist();
        changenofityShow()
      }}
    >
      <Wrapper>
        <Header>
          <Heading>Notifications</Heading>
        </Header>
        <Content>
          {
            data?.slice(0, 2).map((item, index) =>
              <Box key={index} direction='column' paddingTop={20} paddingBottom={10} paddingLeft={20} paddingRight={20}>
                <P fontSize={20} color='#415c85'>{item?.title}</P>
                <P>{item?.desc}</P>
                <Box paddingTop={8} paddingBottom={8}>
                  <Image source={Images.IconOpen} style={{ width: 16, height: 16}} />
                </Box>
                <P color='#93a0b4' fontSize={16}>{item?.date}</P>
              </Box>
            )
          }
        </Content>
        <Footer>
          <ShowMoreBtn>{i18n.t('dashboard.showMore')}</ShowMoreBtn>
        </Footer>
      </Wrapper>
    </Container>
  )
};

export default compose(
  inject(STORE_KEYS.NOTIFICATIONSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.NOTIFICATIONSTORE]: {
         notifications,
       }
     }) => ({
      notifications,
    })
  )
)(Notifications);
