import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Adapter/Redux/Store';
//asdf

import AppNavigation from './src/Navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
// import WelcomeOne from './src/View/Screens/Welcome/WelcomeOne';
function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
