import React, {useState, useRef,useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Pressable,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {ProfileService} from '../ProfileService';
// import {Profile} from 'react-native-fbsdk-next';
import {useDispatch,useSelector} from 'react-redux';
import {login, fbcred} from '../redux/actions/action';
import CommonModal from '../Modal/Modal';
import {
  ASYNC_KEY,
  DRAWER_CONTENT,
  TRANSACTION_HISTORY,
  ADD_CARD_ALERT,
} from '../utils/string';
import { useIsFocused } from '@react-navigation/native';
import {setItem, getItem, multiRemove} from '../utils/StorageHandling';
import {
  requestUserPermission,
  notificationListener,
} from '../Services.js/notificationService';
import Loader from '../ActivityIndicator/Activityindicator';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
const Login = ({navigation}) => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  const storeData = useSelector(state => state
    );
  

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
  const [fbToken, setFBToken] = useState('');
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
      // currentProfile;
    }

    // printKeys();
  }, [isFocused]);
  // useEffect(()=>{
  //   messaging().getToken().then(token=>{
  //    console.log('hello',token)
  //   })
  //  })

  // const currentProfile = Profile.getCurrentProfile().then(function (
  //   currentProfile,
  // ) {
  //   if (currentProfile) {
  //     // dispatch(fbcred(currentProfile.name));
  //   }
  // });
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
      // console.log(JSON.stringify(response.data));
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

  // let dimensions = Dimensions.get('window');
  return (
    <View>
      <SafeAreaView style={{flex: 1}}>
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
            height: responsiveScreenHeight(100),
            width: responsiveScreenWidth(100),
            position: 'absolute',
          }}
          source={require('../src/assets/babyChild.jpg')}
        />
        <View style={styles.container}>
          <Text style={styles.txt}>
            Welcome To <Text style={styles.clr}>bMobile</Text>
          </Text>
        </View>
        <PhoneInput
          onChangeText={phoneNumber => {
            setPhoneNumber(phoneNumber);
            setUsrNameValid(true);
          }}
          defaultValue={phoneNumber}
          defaultCode="IN"
          layout="first"
          containerStyle={{
            borderRadius: RFValue(5),
            width: responsiveScreenWidth(90),
            backgroundColor: 'white',
            borderWidth: RFValue(1),
            bottom: '27%',

            alignSelf: 'center',

            height: responsiveHeight(8),
            borderColor: '#B5B5B5',
          }}
          textInputStyle={{height: responsiveHeight(60)}}
          textContainerStyle={{}}
        />
        <Text
          style={{
            color: 'green',
            alignSelf: 'center',
            position: 'absolute',
            top: RFValue(368),
            flex: 1,
            fontSize: RFValue(10),
          }}>
          {!usrNameValid ? 'Phone Number is required' : ' '}
        </Text>

        <TextInput
          style={{
            backgroundColor: 'white',
            fontSize: RFValue(15),
            borderWidth: RFValue(1),
            borderColor: '#B5B5B5',
            position: 'absolute',
            height: responsiveHeight(7),
            width: responsiveWidth(90),
            top: RFValue(382),
            alignSelf: 'center',
            borderRadius: RFValue(10),
          }}
          textInputStyle={{height: responsiveHeight(60)}}
          placeholder="Password"
          placeholderStyle={{top: 15, backgroundColor: 'white'}}
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
          // right={
          //   <TextInput.Icon
          //     name={!secureTextEntry ? 'eye' : 'eye-off'}
          //     onPress={() => {
          //       setSecureTextEntry(!secureTextEntry);
          //     }}
          //   />
          // }
        />

        <Text
          style={{
            color: 'green',
            left: '6%',
            top: RFValue(430),
            flex: 1,
            marginVertical: RFValue(5),
            position: 'absolute',
            fontSize: RFValue(10),
          }}>
          {!passValid ? 'Password is required' : ' '}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            top: RFValue(446),
            position: 'absolute',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginHorizontal: RFValue(10),
            }}>
            <Pressable
              style={{
                height: responsiveHeight(2.5),
                width: responsiveWidth(4),
                backgroundColor: rememberme ? '#00E556' : null,
                borderWidth: 3,
                borderColor: '#DEDEDE',
                left: '4%',
                marginLeft: '4%',
                borderRadius: RFValue(10),
                top: RFValue(3),
              }}
              onPress={() => {
                setrememberme(!rememberme);
              }}></Pressable>
            <Text
              style={{
                color: 'black',
                marginLeft: RFValue(2),
                fontSize: RFValue(15),
                left: RFValue(4),
              }}>
              Remember Me
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  textDecorationLine: 'underline',
                  fontSize: RFValue(15),
                  right: RFValue(18),
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{alignContent: 'center', bottom: RFValue(17)}}
          onPress={() => {
            handleErrorField();
          }}>
          <Text style={styles.btn}>Sign In</Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            position: 'absolute',
            bottom: RFValue(-550),
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'black',

              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: RFValue(14),
            }}>
            OR
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderColor: 'orange',
              borderWidth: RFValue(1),
              height: responsiveHeight(8),
              width: responsiveWidth(43),
              borderRadius: RFValue(10),
              justifyContent: 'center',
              top: RFValue(80),
              marginLeft: RFValue(10),
              marginRight: RFValue(5),
            }}
            >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: responsiveHeight(5),
                  width: responsiveWidth(8),
                  top: RFValue(5),
                  left: RFValue(5),
                }}
                source={require('../assets/google.png')}
              />

              <Text
                style={{
                  fontSize: RFValue(14),
                  color: '#4D4848',
                  marginVertical: RFValue(12),
                  marginLeft: RFValue(5),
                }}>
                Sign in with google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderWidth: RFValue(1),
              borderColor: 'blue',
              height: responsiveHeight(8),
              width: responsiveWidth(43),
              borderRadius: RFValue(10),
              marginRight: RFValue(10),
              marginLeft: RFValue(5),
              justifyContent: 'center',
              top: RFValue(80),
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: responsiveHeight(4.5),
                  width: responsiveWidth(6),

                  left: RFValue(5),
                }}
                source={require('../assets/facebook.webp')}
              />

              <Text
                style={{
                  fontSize: RFValue(14),
                  color: '#4D4848',
                  marginLeft: RFValue(10),
                  top: RFValue(5),
                }}>
                Sign in with facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            top: RFValue(625),
            alignSelf: 'center',
            position: 'absolute',
          }}>
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
                  fontSize: RFValue(16),
                  color: '#00E556',
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{bottom: RFValue(-165), alignItems: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#989898',
              position: 'absolute',
              fontSize: RFValue(15),
            }}>
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
    borderRadius: RFValue(20),
    height: responsiveHeight(60),
    top: RFValue(255),
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
    borderRadius: RFValue(10),
    height: responsiveHeight(8),
    color: '#2E2F2F',
    alignSelf: 'center',
    fontSize: RFValue(18),
    width: responsiveWidth(90),
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: RFValue(15),
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
  },
  inputField: {
    borderRadius: RFValue(5),

    backgroundColor: 'rgba(0,0,0,0)',

    borderWidth: RFValue(1),
    height: responsiveHeight(10),
    borderColor: '#B5B5B5',
    backgroundColor: 'white',
  },
});
export default Login;
