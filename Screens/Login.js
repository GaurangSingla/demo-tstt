import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {useIsFocused} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Tab_navi from '../android/Tab_navi';
import messaging from '@react-native-firebase/messaging';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/action';
import { ProfileService } from '../ProfileService';
import { store } from '../redux/store/store';

import notificationService from '../Services.js/notificationService';
import {
  SCREEN_ROUTE_MAPPING,
  LOGIN_SCREEN,
  ASYNC_KEY,
  INVALID_INPUT,
  DRAWER_CONTENT,
  TRANSACTION_HISTORY,
  ADD_CARD_ALERT,
  HOME_SCREEN,
  BuildType,
} from '../utils/string';
import {
  setItem,
  getItem,
  multiRemove,
  getAllKeys,
} from '../utils/StorageHandling';
import {
  requestUserPermission,
  notificationListener,
} from '../Services.js/notificationService';
const Login = ({navigation}) => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  const passwordValidationSchema = Yup.object().shape({
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 6 characters'),
  });

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  const [email, setEmail] = useState('');
  const [rememberme, setrememberme] = useState(false);
  const isFocused = useIsFocused();
  const [usrName, setUsrName] = useState('');
  const [pass, setPass] = useState('');
  const [usrNameValid, setUsrNameValid] = useState(true);
  const [passValid, setPassValid] = useState(true);
  const [data, setData] = useState([]);
  const [savenumber, setSaveNumber] = useState('');
  const asyncKeys = [
    ADD_CARD_ALERT.CARDS,
    ASYNC_KEY.LOGGEDIN,
    ASYNC_KEY.auth,
    ASYNC_KEY.token,
    ASYNC_KEY.loginMethod,
    TRANSACTION_HISTORY.txnHistory,
    DRAWER_CONTENT.names,
    DRAWER_CONTENT.mobileNumber,
    ASYNC_KEY.MOBILE,
    ASYNC_KEY.Promo_Api_Response,
    ASYNC_KEY.MOBILE_VISIBLE,
    ASYNC_KEY.ACCOUNTS,
    ASYNC_KEY.USER_PROFILE_DATA,
    ASYNC_KEY.LOGGEDIN_CREDS,
  ];

  async function printKeys() {
    var keys = await getAllKeys();
    console.log('Get all Keys Log:::: ' + keys);
  }
  useEffect(() => {
    if (isFocused) {
      multiRemove(asyncKeys);
    }

    // printKeys();
  }, [isFocused]);
  // useEffect(()=>{
  //   messaging().getToken().then(token=>{
  //    console.log('hello',token)
  //   })
  //  })
  const storeData = useSelector(state => {
    console.log(state);
    return state
  });
  console.log('store ka dta',storeData);
  const dispatch = useDispatch();
  async function hitApi() {
    let args = {
      loginId: '1868' + phoneNumber,
      password: password,
    };
    try {
      const fcmToken = await getItem('fcmToken');
      const header = {
        headers: {
          'notification-token': fcmToken,
          'client-type': 'IOS',
          'client-version': ' 1.0.0',
        },
      };
      console.log('header ===== ', header);
      // console.log('fcm token is .....', fcmToken);
      const response = await ProfileService.loginService(args, header);
      console.log(JSON.stringify(response.data));
      if (response.data.success == true) {
        console.log(
          '==========> billpay responseId',
          response.data.result.requestId,
        );
        // console.log('token at login resp==', response.data.result.token);
        console.log('storedata',storeData);
        dispatch(login(response.data.result.token))
        await setItem(ASYNC_KEY.auth, 'Bearer ' + response.data.result.token);
        await setItem(ASYNC_KEY.loginMethod, 'phoneNumber');
        setData(response.data.result);
        navigation.navigate('Tab_navi')
      } else {
        setAlertBody({
          dialogBoxType: 'Error',
          messageText: response.data.message,
        });
      }
    } catch (e) {
      console.log('Status----->', e.response);
    }
  }
  async function phone() {
    await setItem(ASYNC_KEY.loginMethod, 'phoneNumber');
    var p = await getItem(ASYNC_KEY.loginMethod);
  }

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
        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
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
      <View>
        <Formik
          initialValues={{
            password: '',
          }}
          validationSchema={passwordValidationSchema}
          onSubmit={values => {
            console.log(values);
          }}>
          {({
            handleSubmit,
            errors,
            values,
            handleChange,
            handleBlur,
            isValid,
          }) => (
            <>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.password.length || values.password.length >= 6
                        ? '#FAFAFA'
                        : 'red',
                  },
                ]}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    fontSize: 13,
                    borderWidth: 1,
                    borderColor: '#B5B5B5',
                    padding: 8,
                    height: 35,
                    marginTop: 2,
                  }}
                  placeholder="Password"
                  placeholderStyle={{top: 5, backgroundColor: 'white'}}
                  placeholderTextColor="#979797"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  onChangeText={password => setPassword(password)}
                  defaultValue={password}
                  onBlur={handleBlur('password')}
                  secureTextEntry={secureTextEntry ? false : true}
                  right={
                    <TextInput.Icon
                      style={{marginTop: 19}}
                      name={secureTextEntry ? 'eye' : 'eye-off'}
                      onPress={() => {
                        setSecureTextEntry(!secureTextEntry);
                      }}
                    />
                  }
                />
                <Text style={styles.error}>{errors.password}</Text>
              </View>
            </>
          )}
        </Formik>
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
        onPress={() => {
          data
            ? (hitApi(),
              console.log('bool', data.token),
              // console.log('login', phoneNumber),
              // console.log('password', password),
              phone,
              printKeys,
              console.log('keys', printKeys.keys)
            )
            : console.warn('invalid');
        }}>
        <Text style={styles.btn}>Sign In</Text>
      </TouchableOpacity>

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

              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            OR
          </Text>
        </View>
      </Text>
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
          <TouchableOpacity style={{flexDirection: 'row'}}>
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
          </TouchableOpacity>
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
          <TouchableOpacity style={{flexDirection: 'row'}}>
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
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', bottom: 40, marginLeft: 80}}>
        <View>
          <Text style={{fontSize: 18, color: '#989898'}}>
            Don't have an account
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
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
          </TouchableOpacity>
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
  error: {
    color: 'red',
    alignSelf: 'center',
  },
  inputField: {
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: -95,
    borderWidth: 1,
    height: 50,
    borderColor: '#B5B5B5',
    borderWidth: 2,
    backgroundColor: 'white',
  },
});
export default Login;
