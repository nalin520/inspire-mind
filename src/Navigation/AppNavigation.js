import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../View/Screens/Welcome/Welcome';
import Login from '../View/Screens/Login/Login';
import Question from '../View/Screens/Question/Question';
import BasicInformation from '../View/Screens/BasicInformation/BasicInformation';
import SignUp from '../View/Screens/SignUp/SignUp';
import ForgotPassword from '../View/Screens/Password/ForgotPassword';
import CreatePassword from '../View/Screens/Password/CreatePassword';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="BasicInformation" component={BasicInformation} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
