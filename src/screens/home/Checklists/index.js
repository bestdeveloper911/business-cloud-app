import React, {useState, useEffect} from 'react'
import {ScrollView, View} from "react-native";
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";

import Screen from '../../../components/screen'
import FadeIn from '../../../components/animations/fade-in'
import StatusPanel from "../../../components/StatusPanel";
import {Heading, P, Span} from "../../../components/typography";
import {styles} from "./styles";
import {TabContainer} from "../commonStyled";
import i18n from '../../../i18n';
import data from './data';
import TouchableOpacity from "../../../components/touchable-opacity";
import {TabItem, Tabs, Container} from "../Solutions/styles";
import {TaskGroupTitle} from "../../../components/Checklist/ChecklistBlock/styles";
import TaskList from "../../../components/Checklist/TaskList";
import {Box} from "../../../components/common";
import Device from '../../../constants/Layout';
import {STORE_KEYS} from "../../../stores";

const CheckList = ({
  navigation, tasks, lengthOfMyTasks, lengthOfTeamTasks, markTaskAsComplete, requestCloudTasks, tabItems,
}) => {
  const [selectedTabId, setSelectedTabId] = useState('Todo');

  const right = {
    icon: 'menu',
    onPress: () => navigation.navigate('Settings')
  };

  useEffect(() => {
    requestCloudTasks();
  }, []);

  const getTasks = (mTasks) => {
    // Todo: filter tasks based on selectedTabId
    return mTasks;
  };

  const myTasks = getTasks(tasks.myTasks);
  const teamTasks = getTasks(tasks.teamTasks);

  return (
    <Screen title="Checklists" {...{navigation, right}} left={false}>
      <FadeIn>
        <ScrollView>
          <Box paddingTop={20} paddingLeft={20}>
            <Heading fontSize={30} lineHeight={40}>{i18n.t('dashboard.checklists')}</Heading>
          </Box>
          <Tabs>
            <TabContainer smallDevice={Device.isSmallDevice}>
              {
                tabItems.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{flexDirection: 'row', marginRight: 20}}
                    onPress={() => setSelectedTabId(item.name)}
                  >
                    <TabItem active={selectedTabId === item.name} smallDevice={Device.isSmallDevice}>
                      {item.name}
                      { !!item.count && <Span style={{color: '#9da9bb', fontSize: 12}}> {item.count}</Span> }
                    </TabItem>
                  </TouchableOpacity>
                ))
              }
            </TabContainer>
          </Tabs>
          <Container smallDevice={Device.isSmallDevice}>
            <View style={styles.wrapper}>
              <TaskGroupTitle>
                <P fontSize={18}>{i18n.t('dashboard.myTasks')}</P>
                {
                  !!lengthOfMyTasks && <Span style={styles.desc}>{lengthOfMyTasks}</Span>
                }
              </TaskGroupTitle>
              <TaskList
                tasks={myTasks}
                markTaskAsComplete={markTaskAsComplete}
                selectedTabId={selectedTabId}
              />
              <TaskGroupTitle>
                <P fontSize={18}>{i18n.t('dashboard.teamTasks')}</P>
                {
                  !!lengthOfTeamTasks && <Span style={styles.desc}>{lengthOfTeamTasks}</Span>
                }
              </TaskGroupTitle>
              <TaskList
                tasks={teamTasks}
                markTaskAsComplete={markTaskAsComplete}
                selectedTabId={selectedTabId}
                isTeam={true}
              />
            </View>
            <StatusPanel/>
          </Container>
        </ScrollView>
      </FadeIn>
    </Screen>
  )
}

export default compose(
  inject(STORE_KEYS.CHECKLISTSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.CHECKLISTSTORE]: {
         tasks,
         lengthOfMyTasks,
         lengthOfTeamTasks,
         markTaskAsComplete,
         requestCloudTasks,
         tabItems,
       },
     }) => ({
      tasks,
      lengthOfMyTasks,
      lengthOfTeamTasks,
      markTaskAsComplete,
      requestCloudTasks,
      tabItems,
    })
  )
)(CheckList);
