import { View, Text } from 'react-native';
import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tab_navi from './android/Tab_navi';
import Stacks from './android/Stack';
import Counter from './Screens/Counter';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import {
  requestUserPermission,
  notificationListener,
} from './Services.js/notificationService';
const App = (props) => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        {/* <Counter /> */}
        <NavigationContainer>

          <Stacks />

        </NavigationContainer>
      </Provider>
    </View>

  );
};
export default App;


