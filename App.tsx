import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/Adapter/Redux/Store';
import {Welcome} from './src/View/Screens/Welcome/Welcome';
import Login from './src/View/Screens/Login/Login';
import SignUp from './src/View/Screens/SignUp/SignUp';
import BasicInformation from './src/View/Screens/BasicInformation/BasicInformation';
import CreatePassword from './src/View/Screens/Password/CreatePassword';
import ForgotPassword from './src/View/Screens/Password/ForgotPassword';
import Question from './src/View/Screens/Question/Question';
// import WelcomeOne from './src/View/Screens/Welcome/WelcomeOne';
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      {/* <SafeAreaView> */}
      {/* <Welcome /> */}
      {/* <Question /> */}

      {/* <Login /> */}
      <SignUp />
      {/* <BasicInformation /> */}
      {/* <ForgotPassword /> */}
      {/* <CreatePassword /> */}
      {/* <WelcomeOne /> */}
      {/* </SafeAreaView> */}
    </Provider>
  );
}

export default App;
