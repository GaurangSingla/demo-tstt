import { View, Text,LogBox } from 'react-native';
import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './android/Stack';
import Tab_navi from './android/Tab_navi';
import Stacks from './android/Stack';

import Counter from './Screens/Counter';
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
    <View>
      <Text>App</Text>
    </View>
  )
}

export default  ()=>{
  return(
  <NavigationContainer>
    <App/>
  
   <Tab_navi/>
   
  </NavigationContainer>)
};