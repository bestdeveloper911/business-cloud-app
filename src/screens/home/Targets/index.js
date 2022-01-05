import React, {useState, useEffect} from 'react'
import {ScrollView} from "react-native";
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import i18n from '../../../i18n';
import Screen from '../../../components/screen'
import FadeIn from '../../../components/animations/fade-in'
import StatusPanel from "../../../components/StatusPanel";
import {Heading, Span} from "../../../components/typography";
import {TabContainer} from "../commonStyled";
import {TabItem, Tabs, Container} from "../Solutions/styles";

import data from '../../../data';
import TouchableOpacity from "../../../components/touchable-opacity";
import TargetList from "../../../components/Targets/TargetList";
import {Box} from "../../../components/common";
import Device from "../../../constants/Layout";
import {STORE_KEYS} from "../../../stores";

const TargetPage = ({
  navigation, cloudmebTargets, tabItems, requestCloudmebTargets, markTaskAsComplete, requestCloudTasks,
}) => {
  const right = {
    icon: 'menu',
    onPress: () => navigation.navigate('Settings')
  };

  useEffect(() => {
    requestCloudmebTargets();
    requestCloudTasks();
  }, []);

  const [selectedTabId, setSelectedTabId] = useState('Active');
  const [detailViewId, setDetailViewId] = useState('');

  const getTargets = (tabIndex) => {
    if (tabIndex === 'Active') {
      return cloudmebTargets.filter(item => !item.completed);
    }
    if (tabIndex === 'Completed') {
      return cloudmebTargets.filter(item => item.completed);
    }
    return cloudmebTargets;
  };

  const targets = getTargets(selectedTabId);

  return (
    <Screen {...{navigation, right}} left={false}>
      <FadeIn>
        <ScrollView>
          <Box paddingTop={20} paddingLeft={20}>
            <Heading fontSize={30} lineHeight={40}>{i18n.t('dashboard.targets')}</Heading>
          </Box>
          <Tabs>
            <TabContainer smallDevice={Device.isSmallDevice}>
              {
                tabItems.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={{flexDirection: 'row', marginRight: 20}}
                      onPress={() => setSelectedTabId(item.name)}
                    >
                        <TabItem active={item.name === selectedTabId} smallDevice={Device.isSmallDevice}>
                          {item.name} <Span style={{color: '#9da9bb', fontSize: 12}}>{item.count}</Span>
                        </TabItem>
                    </TouchableOpacity>
                  );
                })
              }
            </TabContainer>
          </Tabs>
          <Container smallDevice={Device.isSmallDevice}>
            <TargetList
              targets={targets}
              markTaskAsComplete={markTaskAsComplete}
            />
            <StatusPanel/>
          </Container>
        </ScrollView>
      </FadeIn>
    </Screen>
  )
}

export default compose(
  inject(STORE_KEYS.TARGETSSTORE, STORE_KEYS.CHECKLISTSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.TARGETSSTORE]: {
         cloudmebTargets,
         tabItems,
         requestCloudmebTargets,
         markTaskAsComplete,
       },
       [STORE_KEYS.CHECKLISTSTORE]: {
         requestCloudTasks,
       }
     }) => ({
      cloudmebTargets,
      tabItems,
      requestCloudmebTargets,
      markTaskAsComplete,
      requestCloudTasks,
    })
  )
)(TargetPage);
