/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/Adapter/i18next/config';
import axiosInit from './src/libs/axios';

axiosInit();

AppRegistry.registerComponent(appName, () => App);
