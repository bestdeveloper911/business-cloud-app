import React from "react";
import {View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import TargetItem from "../TargetItem";
import {P} from "../../typography";
import TouchableOpacity from "../../touchable-opacity";

import { SubListTitle, ListWrapper, styles } from "./styles";
const TaskList = ({data: tasksData, isMyTask, markTaskAsComplete}) => {
  const data = tasksData || {};
  const [isShowList, setIsShowList] = React.useState(true);

  React.useEffect(() => {
    setIsShowList(data.state !== 'COMPLETED');
  }, []);

  return (
    <>
      <TouchableOpacity onPress={() => data.state === 'COMPLETED' ? setIsShowList(!isShowList) : () => {}}>
        <SubListTitle mt={17}>
          <P style={styles.list_title}>{data.state}</P>
          <P style={styles.list_count}>{(data.tasks || []).length}</P>
          {
            data.state === 'COMPLETED' && isShowList &&
            <View style={styles.icon_wrapper}>
              <Icon name={ isShowList ? 'chevron-up' : 'chevron-down' } size={10} color='#8d9bb0' />
            </View>
          }
        </SubListTitle>
      </TouchableOpacity>
      <ListWrapper>
        {
          isShowList && (data.tasks || []).map(task => (
            <TargetItem data={task} state={data.state} isMyTask={isMyTask} key={task.id} markTaskAsComplete={markTaskAsComplete}/>
          ))
        }
      </ListWrapper>
    </>
  )
};

export default TaskList;
