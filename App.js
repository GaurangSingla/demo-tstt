import { View, Text,LogBox } from 'react-native';
import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './android/Stack';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import {
  requestUserPermission,
  notificationListener,
} from './Services.js/notificationService';

LogBox.ignoreAllLogs();
const App = (props) => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
 
  return (
    <View style={{ flex: 1 ,backgroundColor:'#FFF'}}>
      <Provider store={store}>
      
        <NavigationContainer>

          <Stacks />

        </NavigationContainer>
      </Provider>
    </View>

  );
};
export default App;


