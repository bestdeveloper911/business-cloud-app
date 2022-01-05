import React from 'react'
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import {ScrollView, View} from 'react-native';
import {SubTitle} from "./styles";
import {TabContainer} from "../commonStyled";
import {Tabs, TabItem, Container} from "../Solutions/styles";
import i18n from '../../../i18n';
import Screen from '../../../components/screen'
import TouchableOpacity from '../../../components/touchable-opacity'
import Integrations from './Integrations'
import Knowledge from './Knowledge'
import {Heading, P, Span} from "../../../components/typography";
import HelpCenter from "../../../components/Education/HelpCenter";
import {Box} from "../../../components/common";
import Device from "../../../constants/Layout";
import {STORE_KEYS} from "../../../stores";

const Education = ({
  navigation, sizeOfKnowData, sizeOfGuidesData,
}) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const right = {
    icon: 'menu',
    onPress: () => navigation.navigate('Settings')
  };

  const tabItems = [
    {
      id: 0,
      name: i18n.t('dashboard.all'),
      viewMode: 'education_all'
    },
    {
      id: 1,
      name: i18n.t('dashboard.knowledge'),
      viewMode: 'education_knowledge',
      count: sizeOfKnowData,
    },
    {
      id: 2,
      name: i18n.t('dashboard.integration'),
      viewMode: 'education_integration',
      count: sizeOfGuidesData,
    }
  ];

  return (
    <Screen title="Education" {...{navigation, right}} left={false}>
      <ScrollView>
        <Box paddingTop={20} paddingLeft={20}>
          <Heading fontSize={30} lineHeight={40}>{i18n.t('dashboard.education')}</Heading>
        </Box>
        <Tabs>
          <TabContainer smallDevice={Device.isSmallDevice}>
            {
              tabItems.map((item, index) => (
                <TouchableOpacity key={index} style={{flexDirection: 'row', marginRight: 20}} onPress={() => setActiveTab(item.id)}>
                  <TabItem active={item.id === activeTab} smallDevice={Device.isSmallDevice}>
                    {item.name}
                    {
                      item.count > 0 &&
                      <Span style={{color: '#9da9bb', fontSize: 12}}>  +{item.count}</Span>
                    }
                  </TabItem>
                </TouchableOpacity>
              ))
            }
          </TabContainer>
        </Tabs>
        <Container smallDevice={Device.isSmallDevice}>
          {
            activeTab === 0 && <><Knowledge/><Integrations /></>
          }
          {
            activeTab === 1 && <Knowledge />
          }
          {
            activeTab === 2 && <Integrations />
          }
          <SubTitle>{i18n.t('dashboard.helpCenters')}</SubTitle>
          <View style={{marginBottom: 25}}>
            <P>{i18n.t('dashboard.connectHelpCenters')}</P>
            <HelpCenter/>
          </View>
        </Container>
      </ScrollView>
    </Screen>
  );
}

export default compose(
  inject(STORE_KEYS.KNOWLEDGESTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.KNOWLEDGESTORE]: { sizeOfKnowData, sizeOfGuidesData },
     }) => ({
      sizeOfKnowData,
      sizeOfGuidesData,
    })
  )
)(Education);
