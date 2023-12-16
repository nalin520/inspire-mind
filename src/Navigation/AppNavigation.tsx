import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../View/Screens/Welcome/Welcome';
import Login from '../View/Screens/Login/Login';
import Question from '../View/Screens/Question/Question';
import BasicInformation from '../View/Screens/BasicInformation/BasicInformation';
import SignUp from '../View/Screens/SignUp/SignUp';
import ForgotPassword from '../View/Screens/Password/ForgotPassword';
import CreatePassword from '../View/Screens/Password/CreatePassword';
import Home from '../View/Screens/Home/Home';
import Account from '../View/Screens/Profile/Account';
import Setting from '../View/Screens/Profile/Setting';
import EditProfile from '../View/Screens/Profile/EditProfile';
import CustomizeStatus from '../View/Screens/Profile/CustomizeStatus';
import SettingNotification from '../View/Screens/Profile/SettingNotification';
import LoginAndEmail from '../View/Screens/Profile/LoginAndEmail';
// import ConsultationProfile from '../View/Screens/BookConsultation/ConsultationProfile';
import MaterialTabViewStack from './MaterialTabView';
import SleepTab from './SleepTab';
import Details from '../View/Screens/Sleep/Details';
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
