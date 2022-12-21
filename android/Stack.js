import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Login from '../Screens/Login';
import SignUpScreen from '../Screens/SignUpScreen';
import Tab_navi from './Tab_navi';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../Screens/Welcome';
import CardDetails from '../Screens/CardDetails';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Paybill from '../Screens/Paybill';
import Verify from '../Screens/Verify';
import Topup from '../Screens/Topup';
import Mycards from '../Screens/Mycards';
import Transaction from '../Screens/Transaction';
import Addaccount from '../Screens/Addaccount';
const Stack = createNativeStackNavigator();
function ActionBarIcon({Navigation}) {
  return (
    <TouchableOpacity >
      <Image
        source={require('../assets/Profile.png')}
        style={{width: 50, height: 50, borderRadius: 40 / 2,right:55}}
      />
    </TouchableOpacity>
  );
}
function ActionBarIcon1() {
  return <MaterialCommunityIcons name="bell" size={25} style={{right:5}}/>;
}
function ActionBarIcon2() {
  return (
    <Image
      style={{width: 150, height: 50, backgroundColor: 'white', marginLeft: 30}}
      source={require('../assets/toplogo.jpeg')}></Image>
  );
}
const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CardDetails"
        component={CardDetails}
        options={{
          headerRight: props => <ActionBarIcon1 {...props} />,
          headerTitle: props => <ActionBarIcon2 {...props} />,
        }}
      />
      <Stack.Screen
        name="Verify"
        component={Verify}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tab_navi"
        component={Tab_navi}
        options={{
         
          
         
          headerLeft: props => <ActionBarIcon {...props} />,
          headerRight: props => <ActionBarIcon1 {...props} />,
          headerTitle: props => <ActionBarIcon2 {...props} />,}}
      />
      <Stack.Screen
        name="Topup"
        component={Topup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Paybill"
        component={Paybill}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Addaccount"
        component={Addaccount}
        options={{
          headerRight: props => <ActionBarIcon1 {...props} />,
          headerTitle: props => <ActionBarIcon2 {...props} />,
        }}
      />
      <Stack.Screen
        name="Mycards"
        component={Mycards}
        options={{
          headerRight: props => <ActionBarIcon1 {...props} />,
          headerTitle: props => <ActionBarIcon2 {...props} />,
        }}
      />

      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{
          headerRight: props => <ActionBarIcon1 {...props} />,
          headerTitle: props => <ActionBarIcon2 {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default Stacks;
