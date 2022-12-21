import { View, Text } from 'react-native'
import React from 'react'
import Login from '../Screens/Login';
import SignUpScreen from '../Screens/SignUpScreen';
import Tab_navi from './Tab_navi';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../Screens/Welcome';
import CardDetails from '../Screens/CardDetails';
import Addaccount from '../Screens/Addaccount';
const Stack = createNativeStackNavigator();
const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen 
          name="Login"
          component={Login}
        />
        <Stack.Screen   name="SignUpScreen" component={SignUpScreen}// options={{headerTintColor:'red',headerBackTitle:"false"}}
         />
        <Stack.Screen  name="Tab_navi" component={Tab_navi}  options={{
        }}  // options={{headerTintColor:'red'}} 
           <Stack.Screen   name="Addaccount" component={Addaccount} options={{headerShown:true}} />
        />
        <Stack.Screen  name="Welcome" component={Welcome}/>
        <Stack.Screen  name="CardDetails" component={CardDetails}/>
      </Stack.Navigator>
  )
}

export default Stacks