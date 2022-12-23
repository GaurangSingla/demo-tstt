import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ProfileService} from '../Services.js/LoginService';
import Loader from '../ActivityIndicator/Activityindicator';
import {
  setItem,
  getItem,
  multiRemove,
  getAllKeys,
} from '../utils/StorageHandling';
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
// import { TouchEventType } from 'react-native-gesture-handler/lib/typescript/TouchEventType';
// import { ScrollView } from 'react-native-gesture-handler'
// import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = ({navigation}) => {
  const [loadervisible,setLoaderVisible] = useState(false);
  async function logouttime() {
    try {
      setLoaderVisible(true)
      const gettoken = await getItem(ASYNC_KEY.auth);
      const header = {
        headers: {
          Authorization: gettoken,
        },
      };
      console.log(header);
      const response = await ProfileService.logout(header);
      console.log('singla', response);
      if(response.data.success) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }
    } catch (e) {
      console.log(e);
    }
    finally{
      setLoaderVisible(false);
    }
  }

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
              width: '95%',
              height: 130,
              marginLeft: 10,
              marginTop: 10,
              borderRadius: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  height: 50,
                  width: 50,
                  marginLeft: '7%',
                  marginTop: 45,
                }}
                source={require('../assets/Profile1.png')}
              />
              <Text
                style={{
                  marginTop: 50,
                  marginLeft: 15,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                a p{'\n'}18681111112
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#5EC674',
                  width: '26%',
                  height: 30,
                  marginLeft: 80,
                  marginTop: 55,
                }}>
                <Text
                  style={{
                    marginTop: 5,
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  View Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '95%',
              height: 540,
              marginLeft: 10,
              marginTop: 20,
              borderRadius: 15,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}>
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/manageAccount.png')}
              />
              <Text style={{marginLeft: 15, color: '#4D4848', marginTop: 25}}>
                Manage Account
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}>
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/Recharge.png')}
              />
              <Text style={{marginLeft: 15, color: '#4D4848', marginTop: 25}}>
                Recharge
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}>
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/manageAccount.png')}
              />
              <Text style={{marginLeft: 15, color: '#4D4848', marginTop: 25}}>
                Pay Bills
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}>
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/Transaction_History.png')}
              />
              <Text style={{marginLeft: 15, color: '#4D4848', marginTop: 25}}>
                Transaction History
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}>
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/Servicelocator.png')}
              />
              <Text style={{marginLeft: 15, color: '#4D4848', marginTop: 25}}>
                Service Store Locator
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}>
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/Switch_Theme.png')}
              />
              <Text style={{marginLeft: 15, color: '#4D4848', marginTop: 25}}>
                Switch Theme
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}>
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 20,
                }}
                source={require('../assets/changepassword.png')}
              />
              <Text style={{marginLeft: 15, color: '#4D4848', marginTop: 25}}>
                Change Password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', height: 60, width: '80%'}}>
              <Image
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: '7%',
                  marginTop: 17,
                }}
                source={require('../assets/manageAccount.png')}
              />
              <Text style={{marginLeft: 15, color: '#4D4848', marginTop: 25}}>
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
