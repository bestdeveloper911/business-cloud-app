import React, {useState} from "react";
import {Image, Text, View} from "react-native";

import CheckModal from "../../CheckModal";
import { TaskCompletedIcon, TaskOpenIcon } from "../../TaskCompetedIcon";
import {P} from "../../typography";
import Images from "../../../constants/Images";
import Device from "../../../constants/Layout";

import {
  styles, Wrapper, Action, Content, Desc, Right, PTIcon, DateView, PTView, Title, SubTitle, Left, TextContent,
} from "./styles";

const CheckListItem = ({data, state, isMyTask}) => {
  const [ isOpenModal, setIsOpenModal ] = useState(false);
  let backgroundColor, actionBgColor, hoverColor, dateColor, descColor, titleColor='#181e26', subTitleColor='#8d9bb0';

  const [ isOpenHovered, setIsOpenHovered ] = useState(false);
  const [ isCompletedHovered, setIsCompletedHovered ] = useState(false);

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
    case 'TODAY':
      backgroundColor = '#fef6f4';
      dateColor       = '#965f56';
      break;
    case 'COMPLETED':
      dateColor       = '#a2a5a8';
      descColor       = '#8b8e93';
      actionBgColor   = '#fff';
      titleColor      = '#a3a5a9';
      subTitleColor   = '#d2d7e0';
      break;
  }

  return (
    <Wrapper color={backgroundColor}>
      {
        isMyTask === true &&
        <Action
          bgColor={actionBgColor}
          hoverColor={hoverColor}
          onMouseOver={() => setIsCompletedHovered(true)}
          onMouseLeave={() =>setIsCompletedHovered(false)}
        >
          <TaskCompletedIcon state={state} isHovered={isCompletedHovered} />
        </Action>
      }
      <Content
        hoverColor={hoverColor}
        isExpired={state === 'EXPIRED'}
        onMouseOver={() => setIsOpenHovered(true)}
        onMouseLeave={() =>setIsOpenHovered(false)}
        // smallDevice={Device.isSmallDevice}
      >
        <TextContent>
          <Left smallDevice={Device.isSmallDevice}>
            <Title smallDevice={Device.isSmallDevice}>
              <Image
                style={styles.title_img}
                source={{uri: data.relatedLogo}}
                alt="Task Image"
              />
              <P color={titleColor} fontSize={12}>
                {data.name}
              </P>
              <SubTitle color={subTitleColor}>
                {/* data.property */}
              </SubTitle>
            </Title>
          </Left>
          <Right>
            <Text style={styles.title_color}>Cloudmeb</Text>
            <DateView color={dateColor}>{data.date}</DateView>
            {/* {
              isMyTask ?
                state !== 'EXPIRED' &&
                <PTView>
                  <PTIcon/>
                  <Text style={styles.text_color}>{data.price}</Text>
                </PTView>
                :
                <Image
                  source={Images.TeamMember03}
                  style={styles.team_member_image}
                  alt="Team Member Image"
                />
            } */}
            <TaskOpenIcon state={state} isHovered={isOpenHovered} />
          </Right>
        </TextContent>
        <Desc color={descColor} decoration={data.state === 'COMPLETED' ? 'line-through' : 'none'}>
          {data.desc}
        </Desc>
      </Content>
    </Wrapper>
  )
};

export default CheckListItem;
