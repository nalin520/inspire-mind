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
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="BasicInformation" component={BasicInformation} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="CustomizeStatus" component={CustomizeStatus} />
      <Stack.Screen
        name="SettingNotification"
        component={SettingNotification}
      />
      <Stack.Screen name="LoginAndEmail" component={LoginAndEmail} />
      <Stack.Screen
        name="MaterialTabViewStack"
        component={MaterialTabViewStack}
      />
    </Stack.Navigator>
  );
};
export default AppNavigation;
