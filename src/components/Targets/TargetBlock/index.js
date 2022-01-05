import React from "react";
import {View, Image} from "react-native";
import ProgressCircle from 'react-native-progress-circle'
import Icon from 'react-native-vector-icons/FontAwesome';
import i18n from '../../../i18n';
//components
import {H3, Span, P} from "../../typography";
import TaskList from "../TaskList";
import NoTaskPanel from "../NoTaskPanel";
//styles
import {
  styles, Wrapper, Header, HeaderItem, Body, ListTitle, TargetListView, Footer, ShowMoreBtn,
} from "./styles";
import TouchableOpacity from "../../touchable-opacity";
import Images from "../../../constants/Images";

const TargetBlock = ({target, showAll, setDetailViewId, markTaskAsComplete}) => {

  let isAllCompleted = target.completed;

  const [isShowContent, setIsShowContent] = React.useState(false);

  const onClickMoreBtn = (id) => {
    setDetailViewId(id);
  };
  let cnt = 0;

  return (
    <Wrapper finished={isAllCompleted} id={target.target_name}>
      <Header finished={isAllCompleted}>
        <TouchableOpacity onPress={() => setIsShowContent(!isShowContent)} style={styles.w_100}>
          <View style={styles.header_top}>
            <View style={styles.left}>
              <Image
                source={{uri: target.icon || ''}}
                style={styles.avatar}
                alt="img"
              />
              <View style={styles.title_wrapper}>
                <H3 style={{...styles.name, ...{textDecorationLine: target.completed ? 'line-through' : 'none'}}}>
                  {target.target_name}
                </H3>
                <P style={styles.property}>{target.target_property}</P>
              </View>
              {
                isAllCompleted
                  ?
                  <View style={styles.flexWrapper}>
                    <View style={styles.icon_wrapper}>
                      <Icon name={isShowContent ? 'chevron-up' : 'chevron-down'} size={20} color='#8d9bb0'/>
                    </View>
                    <Image
                      source={Images.Success}
                      style={styles.success_image}
                    />
                  </View>
                  :
                  <View style={styles.flexWrapper}>
                    <View style={styles.icon_wrapper}>
                      <Icon name={isShowContent ? 'chevron-up' : 'chevron-down'} size={20} color='#8d9bb0'/>
                    </View>
                    <ProgressCircle
                      percent={target.percentage}
                      radius={25}
                      borderWidth={3}
                      color="#8d9bb0"
                      shadowColor="#fff"
                      bgColor="#fff"
                    >
                      <Span style={styles.custom_span}>{`${target.percentage}%`}</Span>
                    </ProgressCircle>
                  </View>
              }
            </View>
          </View>
          <View style={styles.header_bottom}>
            <HeaderItem>
              <Span style={styles.custom_span_1}>{i18n.t('dashboard.tasks')}</Span>
              <H3 style={styles.count}>{target.tasks_count}</H3>
            </HeaderItem>
            <HeaderItem>
              <Span style={styles.custom_span_1}>{i18n.t('dashboard.dueDate')}</Span>
              <H3 style={styles.date}>{target.dateStr}</H3>
            </HeaderItem>
            <HeaderItem>
              <Span style={styles.custom_span_1}>{i18n.t('dashboard.reward')}</Span>
              <View style={styles.reward}>
                <View style={styles.dot}/>
                <H3 style={styles.price}>{target.price}</H3>
              </View>
            </HeaderItem>
          </View>
        </TouchableOpacity>
      </Header>
      {
        !isAllCompleted && isShowContent &&
        <Body>
          <View>
            <ListTitle mt={20}>
              <P style={styles.list_title}>{i18n.t('dashboard.myTasks')}</P>
              <Span style={styles.color_span}>{target.myTasksLength}</Span>
            </ListTitle>
            <TargetListView color={'#fafbfb'}>
              {
                (target.myTasks || []).map((item, index) => {
                  if (item.tasks.length > 0) {
                    cnt++;
                    if (!showAll && cnt > 2) return;
                    return (
                      <TaskList data={item} isMyTask={true} key={index} markTaskAsComplete={markTaskAsComplete}/>
                    )
                  }
                })
              }
            </TargetListView>
          </View>
          <View>
            <ListTitle mt={20}>
              <Image
                source={Images.Product_Cloudmeb}
                style={styles.listImage}
              />
              <P style={styles.list_title}>{i18n.t('dashboard.assingedTasks')}</P>
              <Span style={styles.color_span}>{target.teamTasksLength}</Span>
            </ListTitle>
            <TargetListView color={'#fafbfb'}>
              {
                target.teamTasksLength > 0 ? (
                  <>
                    {
                      (target.teamTasks || []).map((item, index) => (item.tasks || []).length > 0 && (
                        <TaskList data={item} isMyTask={false} key={index} markTaskAsComplete={markTaskAsComplete}/>
                      ))
                    }
                  </>
                ) : (
                  <NoTaskPanel/>
                )
              }
            </TargetListView>
          </View>
        </Body>
      }
      {
        !showAll && !isAllCompleted && isShowContent &&
        <Footer>
          <TouchableOpacity onPress={() => onClickMoreBtn(target.target_name)}>
            <ShowMoreBtn>{i18n.t('dashboard.showMore')}</ShowMoreBtn>
          </TouchableOpacity>
        </Footer>
      }
    </Wrapper>
  )
};

export default TargetBlock;
