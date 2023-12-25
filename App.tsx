import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Adapter/Redux/Store';

import AppNavigation from './src/Navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import ThemeProvider from './src/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
