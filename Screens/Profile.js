import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ProfileService} from '../Services.js/LoginService';
import Loader from '../ActivityIndicator/Activityindicator';
import {useTheme} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import {fbcred} from '../redux/actions/action';
import ChangePassword from '../Screens/ChangePassword';
import {useSelector} from 'react-redux';
import {setItem, getItem} from '../utils/StorageHandling';
import {ASYNC_KEY} from '../utils/string';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FacebookAuth, GoogleAuth } from '../utils/auth';
const Profile = ({navigation}) => {
  const [switchTheme, setSwitchTheme] = useState(true);
  const {colors} = useTheme();
  // const [connected, setConnected] = useState(true);
  // const [darkThemeSelected, setDarkThemeSelected] = useState(useTheme().dark);
  const storeData = useSelector(state => state);
  const [loadervisible, setLoaderVisible] = useState(false);
  // useEffect(() => {
  //   setSwitchTheme(colors.background == '#171717' ? true : false);
  //   setDarkThemeSelected(colors.background == '#171717' ? true : false);
  // });
  const [DOB, setDOB] = React.useState(false);
  const [city, setCity] = React.useState(false);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [loginMethod,setLoginMethod] = useState('')
  useEffect(() => {
    lookupData();
    // getAccountsDetails();
  }, []);
  async function lookupData() {
      try {
        const CityJSON = await getItem(ASYNC_KEY.USER_PROFILE_DATA);
        console.log('viewpeofile',JSON.parse(CityJSON))
        setLoginMethod(JSON.parse(CityJSON).signUpMethod)
        setFirstName(JSON.parse(CityJSON).firstName)
        setLastName(JSON.parse(CityJSON).lastName)
        setDOB(JSON.parse(CityJSON).dob)
        setPhoneNumber(JSON.parse(CityJSON).phone)
        setEmail(JSON.parse(CityJSON).email)
      }
      catch(e) {
        console.log(e)
      }
  }
  async function logouttime() {
    try {
      setLoaderVisible(true);
      const gettoken = await getItem(ASYNC_KEY.auth);
      const header = {
        headers: {
          Authorization: gettoken,
        },
      };
      console.log(header);
      const response = await ProfileService.logout(header);
      console.log('singla', response);
      if (response.data.success) {
        AsyncStorage.removeItem(ASYNC_KEY.auth);
        await GoogleAuth.logout();
        await FacebookAuth.logout();
        await setItem(ASYNC_KEY.LOGGEDIN, 'false');
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoaderVisible(false);
    }
  }
  const navigationSwitchTheme = () => {
    EventRegister.emit('changeTheme', !switchTheme);
    console.log('colours', colors.background == '#171717' ? 'white' : 'black');
  };
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Loader animating={loadervisible} />
        <View>
          <View
            style={{
              backgroundColor: '#00E556',
              width: responsiveWidth(95),
              height: responsiveHeight(18),
              flex: 1,
              marginTop: 10,
              borderRadius: 15,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row', marginHorizontal: RFValue(20)}}>
              <Image
                style={{
                  height: responsiveHeight(8.5),
                  width: responsiveWidth(17),
                }}
                source={require('../assets/Profile1.png')}
              />
              <Text
                style={{
                  marginHorizontal: RFValue(10),
                  marginTop: RFValue(5),
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: RFValue(20),
                }}>
                {storeData.credfb.name}
                {'\n'}
                {storeData.credfb.phonenumber}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#5EC674',
                  width: '26%',
                  left:'100%',
                  height: responsiveHeight(8),
                  width: responsiveWidth(35),
                  justifyContent: 'center',
                  borderRadius: RFValue(10),
                  marginHorizontal: RFValue(20),
                }}
                onPress={() => navigation.navigate('ViewProfile')}
                >
                <Text
                  style={{
                    fontSize: RFValue(15),

                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  { loginMethod !='MOBILE' ?  `Edit Profile`: `View Profile`}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor:
                colors.background == '#171717' ? '#2E2F2F' : 'white',
              width: '95%',
              height: 540,
              marginLeft: 10,
              marginTop: 20,
              borderRadius: 15,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}
              onPress={() => navigation.navigate('ManageAccount')}
              >
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/manageAccount.png')}
              />
              <Text
                style={{
                  marginLeft: 15,
                  color: colors.background == '#171717' ? 'white' : 'black',
                  marginTop: 25,
                }}>
                Manage Account
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}
              onPress={() => navigation.navigate('Topup')}
              >
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/Recharge.png')}
              />
              <Text
                style={{
                  marginLeft: 15,
                  color: colors.background == '#171717' ? 'white' : 'black',
                  marginTop: 25,
                }}>
                Recharge
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}
              onPress={() => navigation.navigate('Paybill')}
              >
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/manageAccount.png')}
              />
              <Text
                style={{
                  marginLeft: 15,
                  color: colors.background == '#171717' ? 'white' : 'black',
                  marginTop: 25,
                }}>
                Pay Bills
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}
              onPress={() => navigation.navigate('Transaction')}
              >
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/Transaction_History.png')}
              />
              <Text
                style={{
                  marginLeft: 15,
                  color: colors.background == '#171717' ? 'white' : 'black',
                  marginTop: 25,
                }}>
                Transaction History
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}
              onPress={() => navigation.navigate('ServiceStoreLocator')}
              >
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/Servicelocator.png')}
              />
              <Text
                style={{
                  marginLeft: 15,
                  color: colors.background == '#171717' ? 'white' : 'black',
                  marginTop: 25,
                }}>
                Service Store Locator
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}
              onPress={() => {
                setSwitchTheme(!switchTheme), navigationSwitchTheme();
              }}>
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/Switch_Theme.png')}
              />
              <Text
                style={{
                  marginLeft: 15,
                  color: colors.background == '#171717' ? 'white' : 'black',
                  marginTop: 25,
                }}>
                Switch Theme
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}
              onPress={() => navigation.navigate('ChangePassword')}>
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 20,
                }}
                source={require('../assets/changepassword.png')}
              />
              <Text
                style={{
                  marginLeft: 15,
                  color: colors.background == '#171717' ? 'white' : 'black',
                  marginTop: 25,
                }}>
                Change Password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}
              onPress={() => navigation.navigate('FAQ')}
              >
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/manageAccount.png')}
              />
              <Text
                style={{
                  marginLeft: 15,
                  color: colors.background == '#171717' ? 'white' : 'black',
                  marginTop: 25,
                }}>
                FAQ's
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                logouttime();
              }}
              //  onPress={() => navigation.navigate('Login')}
            >
              <Text
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  color: '#FF7771',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 7,
                }}>
                Sign Out
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                color: '#989898',
                fontSize: 14,
                fontWeight: 'bold',
                marginTop: 4,
              }}>
              Version: DEV - 1.0.0
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
