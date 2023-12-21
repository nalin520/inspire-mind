import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from '../../View/Screens/Home/Home';
import {Search} from '../../View/Screens/Search/Search';
import {Feed} from '../../View/Screens/Feed/Feed';
import {Bookmark} from '../../View/Screens/Bookmark/Bookmark';
import {Profile} from '../../View/Screens/Profile/Profile';
// import {images} from '../../../Utils/images';
import {images} from '../../Utils/images';
import {ScreenNames} from './ScreenNames';
import {RootStackParamList} from './ScreenParamList';
import {Image} from 'react-native';
const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={ScreenNames.Home}
        component={Home}
        options={{
          tabBarIcon: ({size}) => <Image source={images.Home} style={{width: size, height: size}} />,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Search}
        component={Search}
        options={{
          tabBarIcon: ({size}) => <Image source={images.Search} style={{width: size, height: size}} />,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Feed}
        component={Feed}
        options={{
          tabBarIcon: ({size}) => <Image source={images.Feed} style={{width: size, height: size}} />,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Bookmark}
        component={Bookmark}
        options={{
          tabBarIcon: ({size}) => <Image source={images.Save} style={{width: size, height: size}} />,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({size}) => <Image source={images.Profile} style={{width: size, height: size}} />,
        }}
      />
    </Tab.Navigator>
  );
};
