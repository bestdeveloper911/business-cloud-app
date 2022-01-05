import React from 'react';
import styled from 'styled-components/native'
import { Image } from "react-native";
import {compose, withProps } from "recompose";
import {inject, observer} from "mobx-react";
import i18n from '../../../i18n';
import {STORE_KEYS} from "../../../stores";
import {SvgChecklistIcon, SvgEducationIcon, SvgLogoIcon, SvgSolutionsIcon, SvgTargetIcon} from "../../SvgIcon";
import {H3, P} from "../../typography";
import TouchableOpacity from '../../touchable-opacity';
import Images from "../../../constants/Images";
import {Box} from "../../common";

const TopMenuContent = (props) => {
  const { navigation, onClose, logout, businessName } = props;

  const color = 'white';
  const menus = [
    {
      label: i18n.t('dashboard.dashboard'),
      route: 'Dashboard',
      icon: <SvgLogoIcon color={color}/>
    },
    {
      label: i18n.t('dashboard.targets'),
      route: 'Targets',
      icon: <SvgTargetIcon color={color}/>
    },
    {
      label: i18n.t('dashboard.checklists'),
      route: 'Checklists',
      icon: <SvgChecklistIcon color={color}/>
    },
    {
      label: i18n.t('dashboard.education'),
      route: 'Education',
      icon: <SvgEducationIcon color={color}/>
    },    {
      label: i18n.t('dashboard.solutions'),
      route: 'Solutions',
      icon: <SvgSolutionsIcon color={color}/>
    },
  ];

  const goToRoute = (routeName, params) => {
    navigation.navigate(routeName, params);
    onClose();
  };

  const onLogout = async () => {
    await logout();
    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <Wrapper>
        <TopView>
          {
            menus.map((item, index) =>
              <TouchableOpacity key={index} onPress={() => goToRoute(item.route)} >
                <MenuItemView active={navigation.state.routeName === item.route}>
                  <IconWrapper>
                    {item.icon}
                  </IconWrapper>
                  <P fontSize={18} color='white' lineHeight={25}>{item.label}</P>
                </MenuItemView>
              </TouchableOpacity>
            )
          }
        </TopView>
        <BottomView>
          <Box marginBottom={20}>
            <Box marginRight={10}><Image source={Images.Avatar} /></Box>
            <Box marginRight={20}><P color='white' fontSize={12}>{businessName || ''}</P></Box>
            <Box>
              <P
                color='#95a4ba'
                onPress={onLogout}
              >
                {i18n.t('dashboard.logout')}
              </P>
            </Box>
          </Box>
          <Box marginBottom={20}>
            <P
              color='white'
              fontSize={18}
              lineHeight={25}
              onPress={() => goToRoute('MySolutions')}
            >
              {i18n.t('dashboard.mySolutions')}
            </P>
          </Box>
          <Box marginBottom={20}>
            <P color='#95a4ba' lineHeight={25}>{i18n.t('dashboard.settings').toUpperCase()}</P>
          </Box>
          <Box>
            <Box marginRight={25}>
              <P
                color='white'
                fontSize={18}
                lineHeight={25}
                onPress={() => goToRoute('Settings', { tab: 'financial' })}
              >
                {i18n.t('dashboard.financial')}
              </P>
            </Box>
            <Box marginRight={25}>
              <P
                color='white'
                fontSize={18}
                lineHeight={25}
                onPress={() => goToRoute('Settings', { tab: 'billing' })}
              >
                {i18n.t('dashboard.billing')}
              </P>
            </Box>
            <Box marginRight={25}>
              <P
                color='white'
                fontSize={18}
                lineHeight={25}
                onPress={() => goToRoute('Settings', { tab: 'profile' })}
              >
                {i18n.t('dashboard.profile')}
              </P>
            </Box>
          </Box>
        </BottomView>
      </Wrapper>
    </Container>
  )
};

const Container = styled.View`
  max-height: 550px;
  width: 100%;
  background-color: #405c85;
  z-index: 99999;
`;

const Wrapper = styled.View`
  width: 100%;
  z-index: 9999
`;

const TopView = styled.View`
  border-bottom-width: 1px;
  padding: 30px 40px;
  border-bottom-color: #FAFAFA20; 
`;

const MenuItemView = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  z-index: 99999;
  border-radius: 8px;
  
  ${props => props.active ? `
    background-color: #546c91;
  ` : `
    background-color: transparent;
  `}
`;

const IconWrapper = styled.View`
  width: 30px;
  height: 25px;
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const BottomView = styled.View`
  display: flex;
  padding: 30px 40px 50px 55px;
`;

export default compose(
  inject(STORE_KEYS.AUTHSTORE, STORE_KEYS.SALESFORCESTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.AUTHSTORE]: {
         logout,
       },
       [STORE_KEYS.SALESFORCESTORE]: {
         businessName,
       },
     }) => ({
      logout,
      businessName,
    })
  )
)(TopMenuContent);
