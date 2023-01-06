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
import ChangePassword from '../Screens/ChangePassword';
import Profile from '../Screens/Profile';
import Paymentsuccess from '../Screens/Paymentsuccess';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const Stack = createNativeStackNavigator();
function ActionBarIcon() {
  return (
    <Image
      source={require('../assets/Profile.png')}
      style={{
        width: responsiveWidth(13.5),
        height: responsiveHeight(8),
        borderRadius: RFValue(20),
      }}
    />
  );
}
function ActionBarIcon1() {
  return (
    <MaterialCommunityIcons
      name="bell"
      size={RFValue(30)}
      style={{right: RFValue(5)}}
    />
  );
}
function ActionBarIcon2() {
  return (
    <Image
      style={{
        width: responsiveWidth(40),
        height: responsiveHeight(8),
        backgroundColor: 'white',
        marginHorizontal: RFValue(50),
      }}
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
        name="ChangePassword"
        component={ChangePassword}
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
        options={({navigation}) => ({
          headerLeft: props => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <ActionBarIcon {...props} />
              </TouchableOpacity>
            );
          },
          headerBackVisible: false,
          headerRight: props => <ActionBarIcon1 {...props} />,
          headerTitle: props => <ActionBarIcon2 {...props} />,
        })}
      />
      <Stack.Screen
        name="Topup"
        component={Topup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Paymentsuccess"
        component={Paymentsuccess}
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
        name="Profile"
        component={Profile}
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
