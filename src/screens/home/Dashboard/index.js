import React, { useEffect } from 'react'
import {Text, ScrollView} from "react-native";
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import i18n from '../../../i18n';
import Screen from '../../../components/screen'
import FadeIn from '../../../components/animations/fade-in'
import StatusPanel from "../../../components/StatusPanel";
import {H3, Heading, Span} from "../../../components/typography";
import {styles} from "./styles";
import MainCarousel from "../../../components/Dashboard/MainCarousel";
import TargetList from "../../../components/Targets/TargetList";
import {Box} from "../../../components/common";
import {STORE_KEYS} from "../../../stores";

const Dashboard = ({
  navigation, cloudmebTargets, requestCloudmebTargets, isXeroLogged,
  markTaskAsComplete, activeTargetsLength, requestCloudTasks,
}) => {
  useEffect(() => {
    requestCloudmebTargets();
    requestCloudTasks();
  }, []);

  const right = {
    icon: 'menu',
    onPress: () => navigation.navigate('Settings')
  };

  const targets = [];
  cloudmebTargets.map(item => {
    if (!item.completed) {
      targets.push(item);
    }
  });

  return (
    <Screen title={i18n.t('dashboard.dashboard')} {...{navigation, right}} left={false}>
      <FadeIn>
        <ScrollView>
          <Box paddingTop={20} paddingLeft={20}>
            <Heading fontSize={30} lineHeight={40}>{i18n.t('dashboard.dashboard')}</Heading>
          </Box>
          <MainCarousel isXeroLogged={isXeroLogged}/>
          <Text style={styles.section_title}>
            <H3 className="main-title">{i18n.t('dashboard.targets')} <Span>{Number(activeTargetsLength) || 0}</Span></H3>
          </Text>
          <TargetList
            targets={targets}
            markTaskAsComplete={markTaskAsComplete}
          />
          <StatusPanel/>
        </ScrollView>
      </FadeIn>
    </Screen>
  )
}

export default compose(
  inject(STORE_KEYS.TARGETSSTORE, STORE_KEYS.XEROSTORE, STORE_KEYS.CHECKLISTSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.TARGETSSTORE]: {
         cloudmebTargets,
         requestCloudmebTargets,
         markTaskAsComplete,
         activeTargetsLength,
       },
       [STORE_KEYS.XEROSTORE]: {
         isXeroLogged,
       },
       [STORE_KEYS.CHECKLISTSTORE]: {
         requestCloudTasks,
       }
     }) => ({
      cloudmebTargets,
      requestCloudmebTargets,
      markTaskAsComplete,
      activeTargetsLength,
      isXeroLogged,
      requestCloudTasks,
    })
  )
)(Dashboard);
