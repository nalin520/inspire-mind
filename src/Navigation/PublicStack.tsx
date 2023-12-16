import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../View/Screens/Welcome/Welcome';
import Login from '../View/Screens/Login/Login';
import Question from '../View/Screens/Question/Question';
import BasicInformation from '../View/Screens/BasicInformation/BasicInformation';
import SignUp from '../View/Screens/SignUp/SignUp';
import ForgotPassword from '../View/Screens/Password/ForgotPassword';
import CreatePassword from '../View/Screens/Password/CreatePassword';

const Stack = createStackNavigator();

const PublicStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="question" component={Question} />
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="createPassword" component={CreatePassword} />
      <Stack.Screen name="basicInformation" component={BasicInformation} />
    </Stack.Navigator>
  );
};
export default PublicStack;
