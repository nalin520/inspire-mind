import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/Adapter/Redux/Store';
import {Welcome} from './src/View/Screens/Welcome/Welcome';
// import WelcomeOne from './src/View/Screens/Welcome/WelcomeOne';
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Welcome />
        {/* <WelcomeOne /> */}
      </SafeAreaView>
    </Provider>
  );
}

export default App;
