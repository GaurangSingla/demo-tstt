import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Login from '../Screens/Login';
import SignUpScreen from '../Screens/SignUpScreen';
import Tab_navi from './Tab_navi';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../Screens/Welcome';
import CardDetails from '../Screens/CardDetails';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Paybill from '../Screens/Paybill';
import Verify from '../Screens/Verify';
import Topup from '../Screens/Topup';
import Mycards from '../Screens/Mycards';
import Transaction from '../Screens/Transaction';
const Stack = createNativeStackNavigator();
function ActionBarIcon({navigation}) {
  return (
    <TouchableOpacity >
    <Image
  source={require('../assets/Profile.png')}
    style={{ width: 45, height: 45, borderRadius: 40/2,  }} />
    </TouchableOpacity>
  );
}
function ActionBarIcon1() {
  return (
    <MaterialCommunityIcons name="bell"  size={25} />
  );
}
function ActionBarIcon2() {
  return (
    <Image style={{width:150,height:50,backgroundColor:'white',marginLeft:45}}
    source={require('../assets/toplogo.jpeg')}></Image>
  );
}
const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{headerShown:false}}
         
        />
        <Stack.Screen  name="Welcome" component={Welcome}/>
        <Stack.Screen  name="CardDetails" component={CardDetails}/>
      </Stack.Navigator>
  )
}

export default  Stacks