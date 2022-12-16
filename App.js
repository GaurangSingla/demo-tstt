<<<<<<< Updated upstream
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tab_navi from './android/Tab_navi';
import Stacks from './android/Stack';
import Counter from './Screens/Counter';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
const App = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        {/* <Counter /> */}
        <NavigationContainer>

          <Stacks />

        </NavigationContainer>
      </Provider>
=======

import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tab_navi from './android/Tab_navi';
import Stacks from './android/Stack';
import messaging from '@react-native-firebase/messaging';


import {
  requestUserPermission,
  notificationListener,
} from './Services.js/notificationService';
const App=()=>{
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  return(
    <View>
   <App/>
>>>>>>> Stashed changes
    </View>

  );
};
export default App;


