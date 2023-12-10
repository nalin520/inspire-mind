import React from 'react';
import {SafeAreaView} from 'react-native';
import {Test} from './src/View/Screens/Test';
import {Provider} from 'react-redux';
import {store} from './src/Adapter/Redux/Store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Test />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
