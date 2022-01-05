// Dependencies
import React from 'react'
import { Provider } from 'mobx-react';
import styled from 'styled-components/native'
import { Platform, StatusBar, View, Text } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native'
import { screensEnabled } from 'react-native-screens'
import Toast from 'react-native-toast-message';
import RootNavigation from './navigation'
import Stores from './stores';
import './i18n';
import theme from './theme';
import { YellowBox } from 'react-native';
import _ from 'lodash';

// YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
// Use native navigation container components
screensEnabled();

// Keep the splash screen visible until manually hidden
SplashScreen.preventAutoHideAsync();
const toastConfig = {
  success: ({ text1, props, ...rest }) => (
    <ToastView>
      <ToastText>{text1}</ToastText>
    </ToastView>
  ),
};
// Bootstrap project
const App = () => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
  return (
      <Provider {...Stores()}>
        <ThemeProvider {...{ theme}}>
          <Container isMobile={isMobile}>
            <Gradient fadeDuration={0} resizeMode="stretch" source={require('./assets/gradient.png')} />
            <RootNavigation/>
            <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
          </Container>
        </ThemeProvider>
      </Provider>
  )
};

// Styles
const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  ${props => !props.isMobile && `
    max-width: 500px;
    margin: auto;
    width: 100%;
  `};
`;

const ToastView = styled.View`
  height: 60px;
  width: 85%;
  background-color: rgb(49, 49, 49);
  align-self: flex-start;
  margin-left: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 5px 15px;
`;

const ToastText = styled.Text`
  color: #FFF;
`;

const Gradient = styled.Image`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
`;

export default App
