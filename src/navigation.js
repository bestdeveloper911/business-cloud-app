import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import Loading from './screens/loading'
import TabBarIcon from "./components/TabBarIcon";

import SignIn from './screens/auth/signin';
import SignUp from './screens/auth/signup';
import Dashboard from './screens/home/Dashboard';
import Targets from './screens/home/Targets';
import Checklists from './screens/home/Checklists';
import Education from './screens/home/Education';
import Solutions from './screens/home/Solutions';
import MySolutions from './screens/home/MySolutions';
import Settings from "./screens/home/Settings";
import i18n from './i18n';
import { withTranslation } from 'react-i18next';

const config = {
  headerMode: 'none',
  cardStyle: {backgroundColor: 'rgba(255,0,0,0)'}
};

const MainNavStack = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions:({ screenProps: { t } }) => ({
        title: i18n.t('dashboard.dashboard'),
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="dashboard" />,
      })
    },
    Targets: {
      screen: Targets,
      navigationOptions:({ screenProps: { t } }) => ({
        title: t('dashboard.targets'),
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="target" />,
      })
    },
    Checklists: {
      screen: Checklists,
      navigationOptions:({ screenProps: { t } }) => ({
        title: t('dashboard.checklists'),
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="checklist" />,
      })
    },
    Education: {
      screen: Education,
      navigationOptions:({ screenProps: { t } }) => ({
        title: t('dashboard.education'),
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="education" />,
      })
    },
    Solutions: {
        screen: Solutions,
        navigationOptions:({ screenProps: { t } }) => ({
          title: t('dashboard.solutions'),
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="solution" />,
        })
    },
  },
  {
    initialRouteName: "Dashboard",
    tabBarOptions: {
      style: {
        height: 55,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#cad0d9'
      },
      activeTintColor: '#2b72b5',
    }
  }
);

const AppStack = createStackNavigator(
  {
    Main: {
      screen: MainNavStack
    },
    MySolutions: {
      screen: MySolutions
    },
    Settings: {
      screen: Settings
    },
  },
  {
    ...config,
    initialRouteName: 'Main',
    mode: 'modal'
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn
    },
    SignUp: {
      screen: SignUp
    },
  },
  {
    ...config,
    initialRouteName: 'SignIn',
  }
);

const MainStack = createSwitchNavigator(
  {
    Loading: Loading,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading'
  }
);
const AppContainer = createAppContainer(MainStack);
class RootNavigation extends React.Component {

  render() {
    const { t, i18n } = this.props;

    return (
      <AppContainer
        screenProps={{
          t,
          i18n
        }}
      />
    );
  }
}

export default withTranslation()(RootNavigation)
