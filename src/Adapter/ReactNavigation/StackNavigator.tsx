import {RootStackParamList} from './ScreenParamList';
import {ScreenNames} from './ScreenNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../View/Screens/Home/Home';
import {TabNavigator} from './TabNavigator';
import {Timer} from '../../View/Screens/Home/Timer';
import {Duration} from '../../View/Screens/Home/Duration';
import { Welcome } from '../../View/Screens/Welcome/Welcome';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName={ScreenNames.Welcome}>
      <Stack.Screen name={ScreenNames.Welcome} component={Welcome} />
      <Stack.Screen name={ScreenNames.TabScreen} component={TabNavigator} />
      <Stack.Screen name={ScreenNames.Timer} component={Timer} />
      <Stack.Screen name={ScreenNames.Duration} component={Duration} />
    </Stack.Navigator>
  );
};
