// Dependencies
import React from 'react'
import {
  Container,
  CardHeader,
  CardBody,
  Avatar,
  Content,
  IconWrapper,
  Desc,
  styles } from "./styles";

// Components
import { H3, P } from "../../typography";
import { SvgCalendarIcon } from "../../SvgIcon";
import TouchableOpacity from '../../touchable-opacity';
import Device from "../../../constants/Layout";

// Export component
export default  ({ data }) => {
  return (
    <Container>
      <CardHeader>
        <P style={styles.title}>{data.title}</P>
      </CardHeader>
      {
        data.name ?
          <CardBody smallDevice={Device.isSmallDevice}>
            <Content>
              <Avatar source={{uri: data.profile_img}}/>
              <H3 style={styles.name}>{ data.name }</H3>
            </Content>
            <IconWrapper as={TouchableOpacity}>
              <SvgCalendarIcon/>
            </IconWrapper>
          </CardBody> :
          <Desc>
            <P style={styles.desc}>{ data.desc }</P>
          </Desc>
      }
    </Container>
  );
}
