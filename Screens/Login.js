import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
import {ProfileService} from '../ProfileService';
import {Profile} from 'react-native-fbsdk-next';
import {FacebookAuth, GoogleAuth} from '../utils/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';
import { UserDetailService } from '../Services.js/UserDetailService';
import {login, fbcred} from '../redux/actions/action';
import CommonModal from '../Modal/Modal';
import {useTheme} from '@react-navigation/native';
import {
  ASYNC_KEY,
  DRAWER_CONTENT,
  TRANSACTION_HISTORY,
  ADD_CARD_ALERT,
} from '../utils/string';
import {useIsFocused} from '@react-navigation/native';
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
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '157745098950-7tl1fjjf7urk51pa04crqonih8vna3p0.apps.googleusercontent.com',
    });
  }, []);
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  const storeData = useSelector(state => state);

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
    const [fbpress, setFBPress] = useState(false);
  const [alertBody, setAlertBody] = useState({
    dialogBoxType: '',
    headerText: '',
    messageText: '',
    navigateFunction: () => {},
  });
  const {colors} = useTheme();
  useEffect(() => {
    if (isFocused) {
      multiRemove(asyncKeys);
    }
  }, [isFocused]);

//   const currentProfile = Profile.getCurrentProfile().then(function (
//     currentProfile,
//   ) 
//   {
//     // if (currentProfile) {
//     //   ProfileData();
//     //   dispatch(
//     //     fbcred({
//     //       name: fbpress ? currentProfile.name : name,
//     //       phonenumber: phoneNumber,
//     //     }),
//     //   );
//     // }
//   }
// );
  async function ProfileApi() {
    try {
      console.log('appppppp');
      const authToken = await getItem(ASYNC_KEY.auth);
      const header = {
        headers: {
          accept: 'application/json',
          Authorization: authToken,
          'X-CSRF-TOKEN': ' ',
        },
      };
      console.log('header of profile', header);
      const response = await UserDetailService.ProfileDetail(header);
      console.log('Profile Api :::=>>>>', response.data.result);
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
      console.log('e', e);
    }
  }
  const ProfileData = async () => {
    const profile = await getItem(ASYNC_KEY.USER_PROFILE_DATA);
    if (profile) {
      setName(
        JSON.parse(profile).firstName + ' ' + JSON.parse(profile).lastName,
      );
    }
  };
  async function googleHit(args) {
    console.log('args value', args);
    try {
      const response = await ProfileService.googleLogin(args);
      console.log('GoogleHit Response::::: ' + JSON.stringify(response));
      if (response.data.success) {
        navigation.navigate('Tab_navi');
      }
      if (response.data.success) {
        if (!response.data.result.token) {
          googleHit(args);
        } else {
          await setItem(ASYNC_KEY.auth, 'Bearer ' + response.data.result.token);
          await setItem(ASYNC_KEY.googleIdToken, args.token);
          navigation.navigate('Tab_navi');
          await setItem(ASYNC_KEY.loginMethod, 'google');
          await setItem(ASYNC_KEY.LOGGEDIN, 'true');
          ProfileApi();
        }
      } else {
        setAlertBody({
          dialogBoxType: 'Error',
          headerText: 'Error',
          messageText: response.data.message,
        });
        setshowAlertDialog(true);
      }
    } catch (e) {
      console.log('googleerror', e);
    }
  }
  const signinwithgoogle = async () => {
    try {
      var googleAuthenticated = await GoogleAuth.login();
      console.log('google Authentication login screen ', googleAuthenticated);
      if (googleAuthenticated) {
        const args = {
          token: googleAuthenticated.idToken,
        };
        await googleHit(args);
      } else {
        console.log('error else');

        setAlertBody({
          dialogBoxType: 'Error',
          headerText: 'Error',
          messageText: 'Something Went Wrong',
          navigateFunction: () => {
            setModalVisible(false);
          },
        });
        setModalVisible(true);
      }
    } catch (e) {
      console.log('error catch ' + e.message);
      setAlertBody({
        dialogBoxType: 'Error',
        headerText: 'Error',
        messageText: 'Something Went Wrong',
        navigateFunction: () => {
          setModalVisible(false);
        },
      });
      setModalVisible(true);
    }
  };
  async function fbHit(args) {
    try {
      const response = await ProfileService.facebookLogin(args);
      console.log('fbHit Response::::: ' + JSON.stringify(response));
      //   if (response.data.success) {
      //     if (!response.data.result.token) {
      //       fbHit(args);
      //     } else {
      //       await setItem(ASYNC_KEY.auth, 'Bearer ' + response.data.result.token);
      //       await setItem(ASYNC_KEY.facebookIdToken, args.token);
      //       ProfileApii(async () => {
      //         navigation.reset({
      //           index: 0,
      //           routes: [{name: 'TabNavigation'}],
      //         });
      //       });
      //       await setItem(ASYNC_KEY.loginMethod, 'facebook');
      //       checked ? await setItem(ASYNC_KEY.LOGGEDIN, 'true') : null;
      //     }
      //   } else {
      //     setAlertBody({
      //       dialogBoxType: 'Error',
      //       headerText: 'Error',
      //       messageText: response.data.message,
      //     });
      //     setshowAlertDialog(true);
      //   }
      // } catch (e) {
      //   console.log('Status----->', e.response.status);
      //   if (e?.response?.status == 406) {
      //     versionUpdate(
      //       e?.response?.data?.result?.updateAndroidAppURL,
      //       e?.response?.data?.result?.updateIosAppURL,
      //     );
      //   } else {
      //     throw new Error(e.message);
      //   }
    } catch (e) {
      console.log('fbError', e);
    }
  }
  const faceBookPressed = async () => {
    setFBPress(true);
    try {
      var facebookAuthenticated = await FacebookAuth.login();
      console.log('fbauthenticated', facebookAuthenticated);
      if (facebookAuthenticated) {
        const args = {
          token: facebookAuthenticated.token,
        };
        navigation.navigate('Tab_navi');
        await fbHit(args);
      } else {
        console.log('error else');
        setAlertBody({
          dialogBoxType: 'Error',
          headerText: 'Error',
          messageText: 'Something Went Wrong',
        });
      }
    } catch (e) {
      console.log('error catch ' + e.message);
      setAlertBody({
        dialogBoxType: 'Error',
        headerText: 'Error',
        messageText: 'Something Went Wrong',
      });
    }
  };
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
        console.log('token at login resp==', response.data.result.token);
        console.log('storedata', storeData);
        dispatch(login(response.data.result.token));
        await setItem(ASYNC_KEY.auth, 'Bearer ' + response.data.result.token);
        await setItem(ASYNC_KEY.loginMethod, 'manual');
        await setItem(ASYNC_KEY.LOGGEDIN, 'true');
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
        <View
          style={{
            ...styles.container,
            backgroundColor:
              colors.background == '#171717' ? '#2E2F2F' : 'white',
          }}>
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
          right={
            <TextInput.Icon
              name={!secureTextEntry ? 'eye' : 'eye-off'}
              onPress={() => {
                setSecureTextEntry(!secureTextEntry);
              }}
            />
          }
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
                color: colors.background == '#171717' ? 'white' : 'black',
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
                  color: colors.background == '#171717' ? 'white' : 'black',
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
          style={{alignContent: 'center', bottom: RFValue(5)}}
          onPress={() => {
            handleErrorField();  
      // currentProfile
          }}>
          <Text style={styles.btn}>Sign In</Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            position: 'absolute',
            bottom: RFValue(-555),
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
          <TouchableOpacity    onPress={() => {
              signinwithgoogle();
              // currentProfile
            }}
            style={{
              flexDirection: 'row',
              borderColor: 'orange',
              borderWidth: RFValue(1),
              height: responsiveHeight(7),
              width: responsiveWidth(44),
              borderRadius: RFValue(10),
              justifyContent: 'center',
              top: RFValue(86),
              marginLeft: RFValue(10),
              marginRight: RFValue(5),
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
                  height: responsiveHeight(5),
                  width: responsiveWidth(8),
                  top: RFValue(5),
                  left: RFValue(5),
                }}
                source={require('../assets/google.png')}
              />

              <Text
                style={{
                  fontSize: RFValue(13),
                  color: colors.background == '#171717' ? 'white' : 'black',
                  marginVertical: RFValue(12),
                  marginLeft: RFValue(5),
                }}>
                Sign in with google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>{faceBookPressed()
            // currentProfile
            }}
            style={{
              flexDirection: 'row',
              borderWidth: RFValue(1),
              borderColor: 'blue',
              height: responsiveHeight(7),
              width: responsiveWidth(45),
              borderRadius: RFValue(10),
              marginRight: RFValue(10),
              marginLeft: RFValue(5),
              justifyContent: 'center',
              top: RFValue(86),
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
                  fontSize: RFValue(13),
                  color: colors.background == '#171717' ? 'white' : 'black',
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
