import React, { useState } from "react";
import { View } from "react-native";
import {SubListTitle} from "../ChecklistItem/styles";
import {P, Span} from "../../typography";
import {TaskListWrapper} from "../ChecklistBlock/styles";
import TaskItem from "../TaskItem";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import TouchableOpacity from "../../touchable-opacity";

const states = [
  'EXPIRED', 'TODAY', 'THIS WEEK', 'NEXT WEEK', 'THIS MONTH', 'NEXT MONTH', 'NEXT 3 MONTHS', 'THIS YEAR', 'NEXT YEAR', 'COMPLETED'
];

const CheckListGroup = ({ tasks, label, header = true}) => {

  const [isShowContent, setIsShowContent] = useState(false);

  const getFilterCheckList = (state) => {
    let mTasks = [];
    tasks.map(item => {
      if (item.state === state) {
        mTasks = item.tasks;
      }
    });
    return mTasks;
  };

  return (
    <View>
      {
        states?.map((state, index) => {
          const filterTasks = getFilterCheckList(state);
          if (!filterTasks?.length) return <View key={index} />;

          return (
            <View key={index}>
              <TouchableOpacity onPress={() => setIsShowContent(!isShowContent)} style={styles.w_full}>
                <SubListTitle mt={17}>
                  <P style={styles.list_title}>{state}</P>
                  <Span style={styles.list_count}>{filterTasks.length}</Span>
                  {
                    state === 'COMPLETED' &&
                    <View style={styles.icon_wrapper}>
                      <Icon name={ isShowContent ? 'chevron-up' : 'chevron-down' } size={10} color='#8d9bb0' />
                    </View>
                  }
                </SubListTitle>
              </TouchableOpacity>
              {
                (isShowContent || state !== 'COMPLETED') &&
                  <TaskListWrapper>
                    {
                      filterTasks?.map((item, index) =>
                        <TaskItem data={item} state={item.state} isMyTask={item.type === 'mine'} key={index}/>
                      )
                    }
                  </TaskListWrapper>
              }
            </View>
          )
        })
      }
    </View>
  )
};

export default CheckListGroup;
