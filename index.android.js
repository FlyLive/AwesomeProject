/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import IndexScreen from './common/Index.js';
import MyAppScreen from './common/MyApp.js';

const AwesomeProject = StackNavigator({
    Index: { screen: IndexScreen },
    MyApp: { screen: MyAppScreen },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
