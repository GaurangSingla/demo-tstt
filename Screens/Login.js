import React,{useState,useEffect} from 'react'
import {View,Text,Image,StyleSheet,TextInput,Button, TouchableOpacity} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignUpScreen from './SignUpScreen';
import {SocialIcon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useIsFocused} from '@react-navigation/native';
import Tab_navi from '../android/Tab_navi';
import Verify from './Verify';

const Login=({navigation})=>{
  const isFocused = useIsFocused();
  const [usrName, setUsrName] = useState('');
  const [pass, setPass] = useState('');
  const [usrNameValid, setUsrNameValid] = useState(true);
  const [passValid, setPassValid] = useState(true);
  
 


    return (
      
        <>
    <Image
    style={styles.img}
import {Divider} from 'react-native-elements';
import axios from 'axios';
import Password from './Password';
const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberme, setrememberme] = useState(false);

  const postUser = () => {
    axios({
      method: 'POST',
      url: 'https://dev-cim-api.tstt.co.tt/api/consumer/login',
      data: {
        loginId: '917906221470',
        password: 'Staging123$',
      },
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'notification-token':
          'qwertyuiop12347890-zxcvbnm./qwertyuiopasdfghjkzxcvbnm',
        'client-type': 'IOS',
        'client-version': '1.0.0',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': '',
      },
    })
      .then(function (response) {
        console.log('response', JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };
  return (
    <>
      <Image
        style={styles.img}
        source={require('../src/assets/babyChild.jpg')}
      />
      <View style={styles.container}>
        <Text style={styles.txt}>
          Welcome To <Text style={styles.clr}>bMobile</Text>
        </Text>
      </View>
      <PhoneInput
        style={{top: '200'}}
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        placeholder={' Mobile Number '}
        containerStyle={{
          borderRadius: 10,
          width: '95%',
          backgroundColor: 'white',
          borderWidth: 1,
          bottom: 2,
          margin: 10,
          alignSelf: 'center',
          bottom: 100,
          height: '7%',
          borderColor: '#B5B5B5',
        }}
        textInputStyle={{height: 40}}
        textContainerStyle={{}}
      />

      {/* <TextInput
        secureTextEntry={true}
        style={{
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 10,
          bottom: 100,
          width: '90%',
          alignSelf: 'center',
          paddingLeft:10
        }}
        placeholder={'password*'}
        placeholderTextColor='#ccc'
        withShadow
        
      /> */}
      <View>
        <Password />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <Pressable
            style={{
              height: 15,
              width: 15,
              backgroundColor: rememberme ? '#00E556' : null,
              borderWidth: 3,
              borderColor: '#DEDEDE',
              bottom: 26,
              marginLeft: 10,
              borderRadius: 15,
            }}
            onPress={() => {
              setrememberme(!rememberme);
            }}></Pressable>
          <Text
            style={{
              color: 'black',
              bottom: 31,
              marginLeft: '6%',
            }}>
            Remember Me
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: 'black',
              textDecorationLine: 'underline',
              textDecorationColor: 'white',
              textDecorationStyle: 'solid',
              bottom: 31,

              marginLeft: '46%',
            }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{marginTop: 65, alignContent: 'center', bottom: 79}}
        onPress={() => navigation.navigate('Tab_navi')}
        //onPress={postUser}
      >
        <Text style={styles.btn}>Sign In</Text>
      </TouchableOpacity>
      {/* <Divider width={1} orientation="Horizontal"  /> */}
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
          bottom: 68,
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              // left: -265,

              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            OR
          </Text>
        </View>
      </Text>
      {/* <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#EA4335',
            bottom: 55,
            width: '45%',
            borderRadius: 10,
            padding: 0,
            marginLeft: 15,
            height: 50,
          }}>
          <Text
            style={{
              color: '#989898',
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 'bold',
              bottom: 19,
            }}>
            <Image
              style={{
                height: 49,
                width: 40,
                
              }}
              source={require('../assets/google.png')}
            />
            Sign In with google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#3B5998',
            bottom: 55,
            width: '45%',
            borderRadius: 10,
            padding: 3,
            marginLeft: 7,
            height: 50,
          }}>
          <Text
            style={{
              color: '#989898',
              textAlign: 'center',
              fontSize: 10,
              fontWeight: 'bold',
              bottom:9
            }}>
            <Image
              style={{               
                height: 40,
                width: 35,
              }}
              source={require('../assets/facebook.webp')}
            />
            Sign In with facebook
          </Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', bottom: 100}}>
          <Text style={{color: '#989898', marginLeft: -330, fontSize: 20}}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text
              style={{
                color: '#00E556',
                marginLeft: 5,
                width: 90,
                fontSize: 20,
                textDecorationLine: 'underline',
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            color: '#989898',
            
            bottom: 18,
            marginLeft: 120,
            fontWeight: 'bold',
          }}>
          Version: DEV - 1.0.0
        </Text>
      </View> */}
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#EA4335',
            marginLeft: 12,
            bottom: 54,
            width: 180,
          }}>
          <View>
            <Image
              style={{
                height: 49,
                width: 40,
              }}
              source={require('../assets/google.png')}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: 14,
                marginLeft: 10,
                fontSize: 13,
                color: '#4D4848',
              }}>
              Sign in with google
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#3B5998',
            marginLeft: 12,
            bottom: 54,
            width: 180,
          }}>
          <View>
            <Image
              style={{
                height: 49,
                width: 40,
              }}
              source={require('../assets/facebook.webp')}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: 14,
                marginLeft: 10,
                fontSize: 13,
                color: '#4D4848',
              }}>
              Sign in with facebook
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', bottom: 40, marginLeft: 80}}>
        <View>
          <Text style={{fontSize: 18, color: '#989898'}}>
            Don't have an account
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginLeft: 7,
              color: 'green',
              textDecorationLine: 'underline',
              fontSize: 18,
              color: '#00E556',
            }}>
            Sign up
          </Text>
        </View>
      </View>
      <View>
        <Text style={{bottom: 34, textAlign: 'center', color: '#989898'}}>
          Version: DEV - 1.0.0{' '}
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  img: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: '62%',
    top: 310,
  },
  txt: {
    color: '#4D4848',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    fontSize: 27,
    marginTop: 8,
    fontWeight: 'bold',
  },
  clr: {
    marginTop: 8,
    color: '#00E556',
  },
  btn: {
    backgroundColor: '#00E556',
    borderRadius: 10,
    height: 48,
    color: '#2E2F2F',
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: 20,
    width: '93%',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
});
export default Login;
