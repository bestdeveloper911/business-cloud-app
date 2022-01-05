import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'

import TouchableOpacity from '../touchable-opacity'
import {P, Span} from "../typography";
import {SvgBellIcon, SvgLogoIcon, SvgMenuIcon} from "../SvgIcon";
import Images from "../../constants/Images";
import TopMenuContent from "./TopMenuContent";
import Notifications from "./Notifications";

export default ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const changenofityShow = () => {
    setShowNotify(false)
  }
  return(
    <Container>
      <TopMenu>
        <Left>
          <SvgLogoIcon />
        </Left>
        <Right>
          <PTSView>
            <P color='white' lineHeight={22}>102</P>
            <PTSText color='white' fontSize={12}>PTS</PTSText>
          </PTSView>
          <IconWrapper as={TouchableOpacity} onPress={() => setShowNotify(!showNotify)}>
            <SvgBellIcon />
          </IconWrapper>
          <IconWrapper as={TouchableOpacity} onPress={() => setIsOpen(!isOpen)}>
            {
              isOpen ? <Image source={Images.TimeImage} style={{ width: 18, height: 18 }} /> : <SvgMenuIcon />
            }
          </IconWrapper>
        </Right>
      </TopMenu>
      {
        isOpen && <TopMenuContent navigation={navigation} onClose={() => setIsOpen(false)} />
      }
      {
        showNotify && <Notifications changenofityShow={changenofityShow}/>
      }
    </Container>
  )
}

// Styles
const Container = styled.View`
  display: flex;
  width: 100%;
  position: absolute;
  background-color: transparent;
  z-index: 999;
`;

const TopMenu = styled.View`
  background-color: #405c85;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  padding: 0 15px;
  border-bottom-width: 1px;
  border-bottom-color: #FAFAFA20;
`;

const PTSView = styled.View`
  background-color: #d78c2c;
  border-radius: 15px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PTSText = styled(Span)`
  margin-left: 5px;
  margin-top: 2px;
  lineHeight: 22px;
`;

const Left = styled.View`
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`;

const Right = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
