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
import MaterialTabViewStack from './MaterialTabView';
import SleepTab from './SleepTab';
import Details from '../View/Screens/Sleep/Details';
import TrackPlayer from '../View/Screens/Sleep/TrackPlayer';
import AllEvent from '../View/Screens/Events/AllEvent';
import EventDetails from '../View/Screens/Events/EventDetails';
import EventTab from './EventTab';
import PreferededPlan from '../View/Screens/BookConsultation/Preferedplan';
import PlanSelect from '../View/Screens/BookConsultation/PlanSelection';
import DateSelect from '../View/Screens/BookConsultation/DateSelection';
import Appointment from '../View/Screens/BookConsultation/AppointmentPreview';
import IntervalBell from '../View/Screens/Home/IntervalBell';
import AddBell from '../View/Screens/Home/AddBell';
import IntervalBellList from '../View/Screens/Home/IntervalBellList';
import Timer from '../View/Screens/Home/Timer';
import Journal from '../View/Screens/Journal/Journal';
import JournalText from '../View/Screens/Journal/JournalText';
import JournalAudio from '../View/Screens/Journal/JournalAudio';
const Stack = createStackNavigator();

const PrivetStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName="event_allEvent"
      initialRouteName="journal_audio"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="profile_account" component={Account} />
      <Stack.Screen name="profile_setting" component={Setting} />
      <Stack.Screen name="profile_edit" component={EditProfile} />
      <Stack.Screen
        name="profile_customizestatus"
        component={CustomizeStatus}
      />
      <Stack.Screen
        name="profile_notification"
        component={SettingNotification}
      />
      <Stack.Screen name="profile_login_email" component={LoginAndEmail} />
      <Stack.Screen name="consultant_tab" component={MaterialTabViewStack} />
      <Stack.Screen name="sleep_tab" component={SleepTab} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="sleep_track_player" component={TrackPlayer} />
      <Stack.Screen name="event_allEvent" component={AllEvent} />
      <Stack.Screen name="event_eventdetails" component={EventDetails} />
      <Stack.Screen name="event_eventTab" component={EventTab} />
      <Stack.Screen name="prefered_plan" component={PreferededPlan} />
      <Stack.Screen name="plan_select" component={PlanSelect} />
      <Stack.Screen name="date_select" component={DateSelect} />
      <Stack.Screen name="appointment" component={Appointment} />
      <Stack.Screen name="interval_bell" component={IntervalBell} />
      <Stack.Screen name="add_bell" component={AddBell} />
      <Stack.Screen name="add_bell_list" component={IntervalBellList} />
      <Stack.Screen name="timer" component={Timer} />
      <Stack.Screen name="journal" component={Journal} />
      <Stack.Screen name="journal_text" component={JournalText} />
      <Stack.Screen name="journal_audio" component={JournalAudio} />
    </Stack.Navigator>
  );
};
export default PrivetStack;
