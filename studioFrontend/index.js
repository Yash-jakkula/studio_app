/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './state';
import {PaperProvider} from 'react-native-paper';
import { ContextMain } from './components/context/OrderContext';
const Index = () => {
  return (
    <ContextMain>
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
    </ContextMain>
  );
};

AppRegistry.registerComponent(appName, () => Index);
