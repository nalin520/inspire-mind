import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../View/Screens/Welcome/Welcome';
import PrivetStack from './PrivetStack';
import PublicStack from './PublicStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_NAME} from '../Constant/storage';
import {useDispatch} from 'react-redux';
import {updateUser} from '../Adapter/Redux/slice/user';
const Stack = createStackNavigator();

const AppNavigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkAuth() {
      try {
        const value = await AsyncStorage.getItem(TOKEN_NAME);
        if (!value) {
          return;
        }

        dispatch(updateUser({token: value}));
      } catch (error) {}
    }

    checkAuth();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="publicStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="privetStack" component={PrivetStack} />
      <Stack.Screen name="publicStack" component={PublicStack} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
