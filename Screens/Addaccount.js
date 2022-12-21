import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import Carousel from 'pinar';
import {TextInput} from 'react-native-paper';
import {ProfileService} from '../Services.js/LoginService';
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
// import { SafeAreaView } from 'react-native-safe-area-context';
const Addaccount = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [click, onclick] = useState(false);
  const phoneInput = useRef(null);
  const [type, setType] = useState('');
  const [popup, setPopup] = useState(false);
  const [pop, setPop] = useState(false);
  const [otp, setOtp] = useState('112233');
  const [cards, setCaards] = useState([
    {
      id: 1,
      firstName: 'Fanger',
      lastName: 'Rock',
      accountNumber: 1234567,
      mobile: '18760000025',
      type: 'PREPAID',
    },
    {
      id: 2,
      firstName: 'Kevin',
      lastName: 'Durant',
      accountNumber: 147852,
      mobile: '18760041025',
      type: 'POSTPAID',
    },
  ]);
  async function sendOtpToAddAcc() {
    try {
      const gettoken = await getItem(ASYNC_KEY.auth);
      const header = {
        headers: {
          Authorization: gettoken,
        },
      };
      const argument = {
        mobile: phoneNumber,
        type: type,
      };
      const response = await ProfileService.sendOtpToAddAccount(
        argument,
        header,
      );
      console.log('anything',JSON.stringify(response))
      if (response.data.success) {
        console.log(response.data)
        await setItem(ASYNC_KEY.token, response.headers['access-medium']);
        setPopup(true);
      } else {
        console.log(response)
        Alert.alert(response.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function VerifyOtpToVerifyAcc() {
    try {
      const gettoken = await getItem(ASYNC_KEY.auth);
      const gettokens = await getItem(ASYNC_KEY.token);
      const header = {
        headers: {
          Authorization: gettoken,
          'Access-Medium': gettokens,
        },
      };
      const argument = {
        otp: otp,
      };
      const response = await ProfileService.verifyOtpAddAccount(
        argument,
        header,
      );
      if (response.data.success) {
        console.log('success', response.data);
        setPopup(false);
        setPop(true);
        navigation.navigate('Home')
      } else {
        console.log('error message', response.data);
        Alert.alert('something went wrong');
      }
    } catch (e) {
      console.log(e);
    }
  }

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: '#00E556',
          height: 190,
          width: 350,
          marginLeft: 20,
          marginTop: 20,
          borderRadius: 13,
          marginRight:10
        }}>
        <Text
          style={{
            color: 'white',
            marginTop: 10,
            marginLeft: 10,
            fontWeight: 'bold',
          }}>
          {item.type}
        </Text>
        <Text
          style={{
            color: 'white',
            marginTop: 3,
            marginLeft: 10,
            fontWeight: 'bold',
          }}>
          {item.mobile}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '700',
              marginLeft: 10,
            }}>
            A AMMO
          </Text>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#5EC674',
                marginLeft: 120,
                width: 120,
                height: 40,
                bottom: 30,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 5,
                  textAlign: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                }}>
                Pay Bill
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', marginLeft: 15, fontWeight: 'bold'}}>
            Due Amount
          </Text>
          <Text style={{color: 'white', marginLeft: 180, fontWeight: 'bold'}}>
            Due Date
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'white',
              marginLeft: 16,
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            ****
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: 230,
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            ***
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#5EC674',
                width: 150,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 85,
                marginTop: 1,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontWeight: '700'}}>Refresh</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F4F4F4',
                borderRadius: 20,
                height: 40,
                width: 40,
                marginLeft: 55,
                marginTop: 1,
              }}>
              <Image
                style={{width: 30, height: 30, marginLeft: 5, marginTop: 6}}
                source={require('../assets/settings.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
      style={{paddingHorizontal:'3%'}}
        data={cards}
        renderItem={renderItem}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 19,
            color: '#4D4848',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Add Account
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            width: '86%',
            height: 100,
            marginLeft: 2,
            marginTop: 10,
            borderRadius: 16,
          }}>
          <PhoneInput
            // style={{top: '200'}}
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
            defaultValue={phoneNumber}
            defaultCode="IN"
            layout="first"
            containerStyle={{
              width: '82%',
              backgroundColor: 'white',
              borderWidth: 1,
              bottom: 2,
              marginTop: 30,
              alignSelf: 'center',
              bottom: 5,
              height: '53%',
              borderColor: '#B5B5B5',
            }}
            textInputStyle={{height: 40}}
            textContainerStyle={{backgroundColor: 'white'}}
          />
        </View>

        <View
          style={{
            backgroundColor: 'white',
            width: '86%',
            height: 130,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10,
            borderRadius: 16,
          }}>
          <Text
            style={{
              color: '#989898',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 30,
              marginTop: 20,
            }}>
            Select account type:
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => setType('PREPAID')}
              style={{
                backgroundColor: 'lightgrey',
                width: 100,
                height: 40,
                marginTop: 220,
                bottom: 190,
                marginLeft: 55,
              }}>
              <View
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 25,
                  backgroundColor: type == 'PREPAID' ? 'lightgreen' : '#FFFFFF',
                  marginLeft: 12,
                  marginTop: 10,
                }}></View>
              <Text style={{marginLeft: 33, bottom: 17, fontWeight: 'bold'}}>
                Prepaid
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setType('POSTPAID')}
              style={{
                backgroundColor: 'lightgrey',
                width: 100,
                height: 40,
                marginTop: 220,
                bottom: 190,
                marginLeft: 55,
              }}>
              <View
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 25,
                  backgroundColor:
                    type == 'POSTPAID' ? 'lightgreen' : '#FFFFFF',
                  marginLeft: 12,
                  marginTop: 10,
                }}></View>
              <Text style={{marginLeft: 33, bottom: 17, fontWeight: 'bold'}}>
                Postpaid
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={sendOtpToAddAcc}
          style={{
            backgroundColor: '#00E556',
            width: '79%',
            height: 45,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 140,
            borderRadius: 10,
          }}>
          <Text
            style={{
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: 7,
              fontWeight: 'bold',
              fontSize: 23,
            }}>
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
      {popup ? (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '80%',
              height: '40%',
              backgroundColor: 'black',
              paddingVertical: '2%',
              paddingHorizontal: '2%',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontWeight: 'bold',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 15,
              }}>
              Verify Account
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 15,
                marginLeft: 5,
              }}>
              Please enter the OTP you have received on {'\n'}your registered
              mobile number.
            </Text>
            <TextInput
              style={styles.inputFieldText}
              placeholder="Enter OTP*"
              placeholderTextColor="#979797"
              value={otp}
              editable={false}
            />

            <View style={{flexDirection: 'row', marginTop: 80}}>
              <TouchableOpacity
                onPress={() => setPopup(false)}
                // onPressIn={() => setPop(false)}
                style={{
                  backgroundColor: 'lightgreen',
                  width: '44%',
                  height: '60%',
                  justifyContent: 'center',
                  marginLeft: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'white',
                    marginLeft: 40,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={VerifyOtpToVerifyAcc}
                style={{
                  backgroundColor: 'lightgreen',
                  width: '44%',
                  height: '60%',
                  justifyContent: 'center',
                  marginLeft: 20,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'white',
                    marginLeft: 45,
                  }}>
                  Verify
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}

      {pop ? (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '80%',
              height: '40%',
              backgroundColor: 'black',
              paddingVertical: '2%',
              paddingHorizontal: '2%',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 15,
                marginLeft: 'auto',
                marginRight:'auto'
              }}>
              Account Added Successfully
            </Text>
            <TouchableOpacity
              onPress={() => setPop(false)}
              // onPressIn={() => setPop(false)}
              style={{
                backgroundColor: 'lightgreen',
                width: '44%',
                height: '20%',
                justifyContent: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 10,
                marginTop:90
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                  marginLeft: 40,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Addaccount;
const styles = StyleSheet.create({
  inputFieldText: {
    fontSize: 15,
    padding: 5,
    backgroundColor: 'white',
    width: '85%',
    height: 30,
    borderWidth: 1,
    borderColor: '#B5B5B5',
    color: '#989898',
    top: 30,
    marginLeft: 25,
  },
});
