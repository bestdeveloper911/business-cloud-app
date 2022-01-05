import React from "react";

//components
import TaskItem from "../TaskItem";
import {P, Span} from "../../../components/typography";

//styles
import { SubListTitle, ListWrapper, styles } from "./styles";
const ChecklistItem = ({data, isMyTask}) => {

  const [isShowList, setIsShowList] = React.useState(true);

  React.useEffect(() => {
    setIsShowList(data.state !== 'COMPLETED');
  }, []);
  
  return (
    <>
      <SubListTitle mt={17}>
        <P style={styles.list_title}>{data.state}</P>
        <Span style={styles.list_count}>{data.tasks.length}</Span>
        {/*{*/}
        {/*  data.state === 'COMPLETED' && isShowList &&*/}
        {/*  <i*/}
        {/*    className="fa fa-angle-up ml-1"*/}
        {/*    onClick={() => setIsShowList(!isShowList)}*/}
        {/*  />*/}
        {/*}*/}
        {/*{*/}
        {/*  data.state === 'COMPLETED' && !isShowList &&*/}
        {/*  <i*/}
        {/*    className="fa fa-angle-down ml-1"*/}
        {/*    onClick={() => setIsShowList(!isShowList)}*/}
        {/*  />*/}
        {/*}*/}
      </SubListTitle>
      <ListWrapper>
        {
          isShowList && data.tasks.map(task => (
            <TaskItem data={task} state={data.state} isMyTask={isMyTask} key={task.id}/>
          ))
        }
      </ListWrapper>
    </>
  )
};

export default ChecklistItem;
