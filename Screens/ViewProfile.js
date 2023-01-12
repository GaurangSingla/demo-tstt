import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { UserDetailService } from '../Services.js/UserDetailService';
import {useTheme} from '@react-navigation/native';
import {setItem, getItem} from '../utils/StorageHandling';
import {ASYNC_KEY} from '../utils/string';
const ViewProfile = () => {
  const {colors} = useTheme();
  const [DOB, setDOB] = React.useState(false);
  const [city, setCity] = React.useState(false);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [loginMethod, setLoginMethod] = useState('');
  useEffect(() => {
    lookupData();
    // getAccountsDetails();
  }, []);
//   const handleSignUpArgs = () => {
//     let name = firstName;
//     if (loginMethod == 'MOBILE') {
//       const args = {
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//       };
//       return args;
//     }
//     const args = {
//       firstName: str[0],
//       lastName: str[str.length - 1],
//       phone: phoneNumber,
//     };
//     return args;
//   };
  async function editProfileApi() {
    try {
      const authToken = await getItem(ASYNC_KEY.auth);
    //   const args=handleSignUpArgs();
      const header = {
        headers: {
          Authorization: authToken,
        },
      };
      console.log('h of profile', header);
      const response = await UserDetailService.editProfileDetail(args, header);
      console.log('Edit Profile Api :::=>>>>', response.data.result);
      if (response.data != undefined) {
        if (response.data.result) {
          console.log('login hasNotification');
          if (
            response.data.result.accounts &&
            response.data.result.accounts.length > 0
          ) {
            console.log('Accounts Already created ::==>>>');
          } else {
            console.log('No Account created :::===>>>>>>');
            await setItem(ASYNC_KEY.ACCOUNTS, '');
          }

          await setItem(
            ASYNC_KEY.USER_PROFILE_DATA,
            JSON.stringify(response.data.result),
          );
        } else {
          await setItem(ASYNC_KEY.USER_PROFILE_DATA, '');
        }
      } else {
        console.log(response.status);
      }
    } catch (e) {
      console.log(e);
    }
  }
  async function lookupData() {
    try {
      const CityJSON = await getItem(ASYNC_KEY.USER_PROFILE_DATA);
      console.log(JSON.parse(CityJSON));
      setLoginMethod(JSON.parse(CityJSON).signUpMethod);
      setFirstName(JSON.parse(CityJSON).firstName);
      setLastName(JSON.parse(CityJSON).lastName);
      setDOB(JSON.parse(CityJSON).dob);
      setPhoneNumber(JSON.parse(CityJSON).phone);
      setEmail(JSON.parse(CityJSON).email);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <SafeAreaView>
      <Text
        style={{
          textAlign: 'center',
          marginTop: '10%',
          fontSize: 28,
          fontWeight: 'bold',
        }}>
        Profile
      </Text>
      <TextInput
        style={{...styles.inputFieldText}}
        placeholder="First Name"
        label="First Name"
        placeholderTextColor="#979797"
        autoCapitalize="none"
        textContentType="username"
        value={firstName}
        //   defaultValue={name}
      />
      <TextInput
        style={{...styles.inputFieldText}}
        placeholder="Last Name"
        label="Last Name"
        placeholderTextColor="#979797"
        autoCapitalize="none"
        textContentType="username"
        value={lastName}
        //   defaultValue={name}
      />
      <TextInput
        style={{...styles.inputFieldText}}
        placeholder="Date of Birth"
        label="Date of Birth"
        placeholderTextColor="#979797"
        autoCapitalize="none"
        textContentType="username"
        value={DOB}
        //   defaultValue={name}
      />
      <TextInput
        style={{...styles.inputFieldText}}
        placeholder="City"
        label="City"
        placeholderTextColor="#979797"
        autoCapitalize="none"
        textContentType="username"
        value={city}
        //   defaultValue={name}
      />
      <TextInput
        style={{...styles.inputFieldText}}
        placeholder="Mobile Number"
        label="Mobile Number"
        placeholderTextColor="#979797"
        autoCapitalize="none"
        textContentType="username"
        value={phoneNumber}
        //   defaultValue={name}
      />
      <Image
        style={{
          height: '7%',
          width: '7%',
          alignSelf: 'flex-end',
          right: '14%',
          bottom: '9.5%',
        }}
        source={require('../assets/GreenTick.png')}
      />
      <TextInput
        style={{...styles.inputFieldText, bottom: '7%'}}
        placeholder="Email"
        label="Email"
        placeholderTextColor="#979797"
        autoCapitalize="none"
        textContentType="username"
        value={email}
        //   defaultValue={name}
      />
      <Image
        style={{
          height: '7%',
          width: '7%',
          alignSelf: 'flex-end',
          right: '14%',
          bottom: '16.5%',
        }}
        source={require('../assets/GreenTick.png')}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'lightgreen',
          height: '8%',
          width: '80%',
          alignSelf: 'center',
          justifyContent: 'center',
          borderRadius: 18,
        }}
        onPress={() => editProfileApi()}
        >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Update
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ViewProfile;
const styles = StyleSheet.create({
  inputFieldText: {
    fontSize: 15,
    padding: 10,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    height: 45,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignSelf: 'center',
    borderColor: '#B5B5B5',
    color: '#989898',
    marginBottom: '3%',
    marginTop: '2%',
  },
  inputField: {
    borderRadius: 3,
    alignSelf: 'center',
    width: '95%',
    // backgroundColor: 'white',
  },
});
