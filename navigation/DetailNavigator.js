import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import DetailsScreen from '../screens/DetailsScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });

const Project = createStackNavigator({
    Details: DetailsScreen,
}, config );

Project.path = '';

export default Project;
