import React from "react";
import {View, Image, Text} from "react-native";
import ProgressCircle from 'react-native-progress-circle'
import i18n from '../../../i18n';
//components
import {H3, Span, P} from "../../../components/typography";
import ChecklistItem from "../ChecklistItem";
//styles
import { styles, Wrapper, Body, ListTitle, TaskList} from "./styles";

const ChecklistBlock = ({data}) =>{
  return (
    <Wrapper>
      <Body>
        <View>
          <ListTitle mt={20}>
            <P style={styles.list_title}>{i18n.t(dashboard.myTasks)}</P>
            <Span style={styles.color_span}>10</Span>
          </ListTitle>
          <TaskList color={'#fafbfb'}>
            {
              data.myTasks.map((item, index) => (
                <ChecklistItem data={item} isMyTask={true} key={index}/>
              ))
            }
          </TaskList>
        </View>
        <View>
          <ListTitle mt={20}>
            <P style={styles.list_title}>{i18n.t(dashboard.teamTasks)}</P>
            <Span style={styles.color_span}>3</Span>
          </ListTitle>
          <TaskList color={'#fafbfb'}>
            {
              data.teamTasks.map((item, index) => (
                <ChecklistItem data={item} isMyTask={false} key={index}/>
              ))
            }
          </TaskList>
        </View>
      </Body>
    </Wrapper>
  )
};

export default ChecklistBlock;
