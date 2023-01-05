import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ProfileService} from '../Services.js/LoginService';
import {fbcred} from '../redux/actions/action';
import Loader from '../ActivityIndicator/Activityindicator';
import { useSelector} from 'react-redux';
import {
  setItem,
  getItem,
} from '../utils/StorageHandling';
import {
  ASYNC_KEY,

} from '../utils/string';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
const Profile = ({navigation}) => {
  
  const storeData = useSelector(state =>state );
  const [loadervisible, setLoaderVisible] = useState(false);
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
              height: responsiveHeight(28),
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
                  width: responsiveWidth(14),
                }}
                source={require('../assets/Profile1.png')}
              />
              <Text
                style={{
                  marginHorizontal: RFValue(10),
                  marginTop:RFValue(5),
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: RFValue(20),
                }}>
                {storeData.credfb.name}{'\n'}{storeData.credfb.phonenumber}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#5EC674',
                  width: '26%',
                  height: responsiveHeight(8),
                  width: responsiveWidth(35),
                  justifyContent: 'center',
                  borderRadius: RFValue(10),
                  marginHorizontal: RFValue(20),
                }}>
                <Text
                  style={{
                    fontSize: RFValue(15),

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
