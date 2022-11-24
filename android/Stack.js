import { View, Text } from 'react-native'
import React from 'react'
import Login from '../Screens/Login';
import SignUpScreen from '../Screens/SignUpScreen';
import Tab_navi from './Tab_navi';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Stacks = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen 
          name="Login"
          component={Login}
         
        />
        <Stack.Screen   name="Login" component={SignUpScreen} options={{headerTintColor:'red',headerBackTitle:"false"}} />
        <Stack.Screen  name="Signup" component={Tab_navi}  options={{headerTintColor:'red'}} />
     
      </Stack.Navigator>
  )
}

export default Stacks