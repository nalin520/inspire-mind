import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../View/Screens/Welcome/Welcome';
import PrivetStack from './PrivetStack';
import PublicStack from './PublicStack';
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="privetStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="privetStack" component={PrivetStack} />
      <Stack.Screen name="publicStack" component={PublicStack} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
