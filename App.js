import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './android/Stack';
import Tab_navi from './android/Tab_navi';

export default  ()=>{
  return(
  <NavigationContainer>
   <Stacks/>
  </NavigationContainer>)
};