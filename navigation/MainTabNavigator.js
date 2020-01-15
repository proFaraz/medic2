import React from 'react';
import { Platform } from 'react-native';
//import { createBottomTabNavigator, createTabNavigator, TabBarBottom } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailsScreen from '../screens/DetailsScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
}, config );

HomeStack.navigationOptions = {
  tabBarColor: '#180df2',
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={'md-home'}
      />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator({
  Links: LinksScreen,
  Details: DetailsScreen
}, config );

LinksStack.navigationOptions = {
  tabBarColor: '#1eac36',
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-search'}
    />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen
}, config );

SettingsStack.navigationOptions = {
  tabBarColor: '#9290db',
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-information-circle'}
    />
  ),
};

SettingsStack.path = '';


const tabNavigator = createMaterialBottomTabNavigator(
  {
  HomeStack,
  LinksStack,
  SettingsStack,
  },
  
  {
    shifting: true,
    activeColor: '#ffffff',
  }
);

  tabNavigator.path = '';

  export default tabNavigator;

// export default createMaterialBottomTabNavigator(
//   {
//     HomeStack,
//     LinksStack,
//     SettingsStack,
//   },
  
//   {
//     shifting: true,
//     activeColor: '#ffffff',
//   }
// );
