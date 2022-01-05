import React, { useState } from "react";
import { Image, Text } from "react-native";

//components
import CheckModal from "../../CheckModal";
import { TaskCompletedIcon, TaskOpenIcon } from "../../TaskCompetedIcon";
//styles
import { styles, Wrapper, Action, Content, Desc, Right, PTIcon, DateView, PTView } from "./styles";

const TargetItem = ({data, state, isMyTask, markTaskAsComplete}) => {
  const [ isOpenModal, setIsOpenModal ] = useState(false);
  let backgroundColor, actionBgColor, hoverColor, dateColor, descColor, titleColor='#181e26', subTitleColor='#8d9bb0';

  switch (state) {
    case 'EXPIRED':
      backgroundColor = '#d37466';
      descColor       = '#fff';
      dateColor       = '#fff';
      titleColor      = '#fff';
      subTitleColor   = '#e6c4c0';
      actionBgColor   = '#d37466';
      hoverColor      = '#c37167';
      break;
    case 'COMPLETED':
      dateColor       = '#a2a5a8';
      descColor       = '#8b8e93';
      actionBgColor   = '#fff';
      titleColor      = '#a3a5a9';
      subTitleColor   = '#d2d7e0';
      break;
  }

  if(state === 'Today') {
    backgroundColor = '#fefaee';
    actionBgColor   = '#fefaee';
    dateColor       = '#d37466';
  }

  const onActionProcess = () => {
    if (markTaskAsComplete) {
      markTaskAsComplete(data?.objectId, state !== 'COMPLETED');
    }
  };

  const handleCheck = (check) => {
    if (!check && state === 'COMPLETED') {
      onActionProcess();
    }
    if (check && state !== 'COMPLETED') {
      onActionProcess();
    }
    setIsOpenModal(false);
  };

  return (
    <Wrapper color={backgroundColor}>
      {
        isMyTask === true &&
          <Action
            bgColor={actionBgColor}
            hoverColor={hoverColor}
            onPress={() => setIsOpenModal(true)}
          >
            <TaskCompletedIcon state={state} isHovered={false} />
          </Action>
      }
      <Content
        hoverColor={hoverColor}
        isExpired={state === 'EXPIRED'}
      >
        <Desc color={descColor}>
          {data.desc}
        </Desc>
        <Right>
          <DateView color={dateColor}>{data.date}</DateView>
          {
            isMyTask ?
              state !== 'EXPIRED' && data.price !== null &&
              <PTView>
                <PTIcon/>
                <Text style={styles.color_text}>{data.price}</Text>
              </PTView>
              :
              <Image
                source={{uri: data.team_member_image}}
                style={styles.team_member_image}
                alt="Team Member Image"
              />
          }
          <TaskOpenIcon state={state} isHovered={false} />
        </Right>
      </Content>
      <CheckModal
        isOpen={isOpenModal}
        handleClose={() => setIsOpenModal(false)}
        onDisAgree={() => handleCheck(false)}
        onAgree={() => handleCheck(true)}
      />
    </Wrapper>
  )
}

export default TargetItem;
