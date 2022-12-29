import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable,
  SafeAreaView,Dimensions
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {useIsFocused} from '@react-navigation/native';
import {Modal, TextInput} from 'react-native-paper';
import { LoadingAnimation  } from 'react-native-loading-animation-image';
import {RFValue} from 'react-native-responsive-fontsize';
import Tab_navi from '../android/Tab_navi';
import messaging from '@react-native-firebase/messaging';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/actions/action';
import {ProfileService} from '../ProfileService';
import CommonModal from '../Modal/Modal';
import {store} from '../redux/store/store';

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
import Loader from '../ActivityIndicator/Activityindicator';
const Login = ({navigation}) => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
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
  const [loadervisible, setLoaderVisible] = useState(false);
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

  const [modalVisible, setModalVisible] = useState(false);
  const [press, setPress] = useState(false);
  const [alertBody, setAlertBody] = useState({
    dialogBoxType: '',
    headerText: '',
    messageText: '',
    navigateFunction: () => {},
  });
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [emptyPhone, setEmptyPhone] = useState(false);

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
    return state;
  });

  const dispatch = useDispatch();
  async function hitApi() {
    let args = {
      loginId: '1868' + phoneNumber,
      password: password,
    };

    try {
      setLoaderVisible(true);
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
      if (response.data.success) {
        console.log(
          '==========> billpay responseId',
          response.data.result.requestId,
        );
        // console.log('token at login resp==', response.data.result.token);
        console.log('storedata', storeData);
        dispatch(login(response.data.result.token));
        await setItem(ASYNC_KEY.auth, 'Bearer ' + response.data.result.token);
        await setItem(ASYNC_KEY.loginMethod, 'phoneNumber');
        setData(response.data.result);
        navigation.navigate('Tab_navi');
      } else {
        console.log('wrong crentials');
        setAlertBody({
          dialogBoxType: 'Error',
          headerText: 'Error',
          messageText: response.data.message,
          navigateFunction: () => {
            setModalVisible(false);
          },
        });
        setModalVisible(true);
      }
    } catch (e) {
      console.log('Status----->', e.response);
    } finally {
      setLoaderVisible(false);
    }
  }
  function api() {
    if (!emptyPassword && !emptyPhone) {
      hitApi();
    }
  }

  async function phone() {
    await setItem(ASYNC_KEY.loginMethod, 'phoneNumber');
    var p = await getItem(ASYNC_KEY.loginMethod);
  }

  function handleErrorField() {
    const phonevalid = validatePhone();
    const passwordvalid = validatePassword();
    if (phonevalid && passwordvalid) {
      hitApi();
    }
  }
  function validatePhone() {
    if (!phoneNumber || phoneNumber == '') {
      setUsrNameValid(false);
      return false;
    }
    return true;
  }
  function validatePassword() {
    if (!password || password == '') {
      setPassValid(false);
      return false;
    }
    return true;
  }

  let dimensions = Dimensions.get('window');
  let imageHeight = dimensions.height;
  let imageWidth = dimensions.width;
  return (
    <View>
      <SafeAreaView>
      <Loader animating={loadervisible} />
        {modalVisible ? (
          <CommonModal
            modalVisible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
            alertBody={alertBody}
          />
        ) : null}

        <Image
          style={{
            height: imageHeight,
            width: imageWidth,
            resizeMode: 'contain',
            position: 'absolute',
            bottom: '10%',
          }}
          source={require('../src/assets/babyChild.jpg')}
        />
        <View style={styles.container}>
          <Text style={styles.txt}>
            Welcome To <Text style={styles.clr}>bMobile</Text>
          </Text>
        </View>
        <PhoneInput
          style={{bottom: '80%'}}
          onChangeText={phoneNumber => {
            setPhoneNumber(phoneNumber);
            setUsrNameValid(true);
          }}
          defaultValue={phoneNumber}
          defaultCode="IN"
          layout="first"
          containerStyle={{
            borderRadius: 5,
            width: '95%',
            backgroundColor: 'white',
            borderWidth: 1,
            bottom: '27%',

            alignSelf: 'center',

            height: '7%',
            borderColor: '#B5B5B5',
          }}
          textInputStyle={{height: 40}}
          textContainerStyle={{}}
        />
        <Text
          style={{
            color: 'red',
            alignSelf: 'center',
            position: 'absolute',
            bottom: '41%',
            flex: 1,
          }}>
          {!usrNameValid ? 'Phone Number is required' : ' '}
        </Text>
        <View>
          <TextInput
            style={{
              backgroundColor: 'white',
              fontSize: 13,
              borderWidth: 1,
              borderColor: '#B5B5B5',
              padding: '1%',
              height: 40,
              marginTop: '1%',
              bottom: '155%',
              width: '95%',
              alignSelf: 'center',
              borderRadius: 10,
            }}
            placeholder="Password"
            placeholderStyle={{top: 5, backgroundColor: 'white'}}
            placeholderTextColor="#979797"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            onChangeText={password => {
              setPassword(password);
              setPassValid(true);
            }}
            defaultValue={password}
            secureTextEntry={!secureTextEntry ? false : true}
            right={
              <TextInput.Icon
                style={{marginTop: 19}}
                name={!secureTextEntry ? 'eye' : 'eye-off'}
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                }}
              />
            }
          />

          <Text
            style={{
              color: 'red',
              left: '3%',
              bottom: '115%',
              flex: 1,
              position: 'absolute',
            }}>
            {!passValid ? 'Password is required' : ' '}
          </Text>
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
                bottom: '40%',
                left: '4%',
                marginLeft: '4%',
                borderRadius: 15,
              }}
              onPress={() => {
                setrememberme(!rememberme);
              }}></Pressable>
            <Text
              style={{
                color: 'black',
                bottom: '42%',
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

                bottom: '318%',

                marginLeft: '46%',
              }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{alignContent: 'center', bottom: '15%'}}
          onPress={() => {
            handleErrorField();
          }}>
          <Text style={styles.btn}>Sign In</Text>
        </TouchableOpacity>

        <Text
          style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
            bottom: '4%',
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
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#EA4335',
              bottom: '30%',
              width: 180,
              borderRadius: 5,
            }}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <View>
                <Image
                  style={{
                    height: 40,
                    width: 40,
                    top: 5,
                    left: 5,
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
              marginHorizontal: '2%',
              bottom: '30%',
              width: 180,
              borderRadius: 5,
              height: 50,
            }}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <View>
                <Image
                  style={{
                    height: 35,
                    width: 35,
                    top: 7,
                    left: 5,
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
        <View style={{flexDirection: 'row', bottom: '2%', alignSelf: 'center'}}>
          <View>
            <Text style={{fontSize: RFValue(16), color: '#989898'}}>
              Don't have an account?
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Text
                style={{
                  paddingStart: '1%',
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
          <Text style={{bottom: '30%', textAlign: 'center', color: '#989898'}}>
            Version: DEV - 1.0.0
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: '63%',
    top: '39%',
  },
  txt: {
    color: '#4D4848',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: '2%',
    fontSize: RFValue(27),
    marginTop: '2%',
    fontWeight: 'bold',
  },
  clr: {
    marginTop: '5%',
    color: '#00E556',
  },
  btn: {
    backgroundColor: '#00E556',
    borderRadius: 10,
    height: 48,
    color: '#2E2F2F',
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: RFValue(18),
    width: '93%',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 10,
    fontWeight: 'bold',
    top: '140%',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
  },
  inputField: {
    borderRadius: 4,

    backgroundColor: 'rgba(0,0,0,0)',

    borderWidth: 1,
    height: 50,
    borderColor: '#B5B5B5',
    borderWidth: 1,
    backgroundColor: 'white',
  },
});
export default Login;
