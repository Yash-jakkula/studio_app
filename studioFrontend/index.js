/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './state';
import {PaperProvider} from 'react-native-paper';
const Index = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Index);
