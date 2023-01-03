import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel from 'pinar';
import Listhorizontal from './Listhorizontal';
import Addaccount from '../Screens/Addaccount';
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
import {ProfileService} from '../Services.js/LoginService';
const Home = ({navigation}) => {
  const [moredata, setmoredata] = useState();
  const [promo, setpromo] = useState();
  const [cards, setCards] = useState([]);
  const [amount, setAmount] = useState([]);
  const [press, setPress] = useState(false);
  const [loadervisible, setLoaderVisible] = useState(false);
  useEffect(() => {
    console.log('useEffect');
    getpromotions();
  }, []);
  async function getpromotions() {
    console.log('usee');
    try {
      setLoaderVisible(true);
      const gettoken = await getItem(ASYNC_KEY.auth);
      const header = {
        headers: {
          Authorization: gettoken,
        },
      };
      const response = await ProfileService.PromoApi(header);
      console.log('hell', response.data);
      setmoredata(response.data.result.moreApps);
      console.log('data set krne k liye', response.data.result.moreApps);
      setpromo(response.data.result.promotions);
      console.log(
        'morepromo ka data save rakhne k liye',
        response.data.result.promotions,
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoaderVisible(false);
    }
  }
  useEffect(() => {
    console.log('useEffect');
    getaccountDetails();
  }, []);
  async function getaccountDetails() {
    try {
      setLoaderVisible(true);
      const gettoken = await getItem(ASYNC_KEY.auth);
      const header = {
        headers: {
          Authorization: gettoken,
        },
      };
      const response = await ProfileService.accountDetails(header);
      console.log('gaurang res', response.data);
      setCards(response.data.result.accounts);
    } catch (e) {
      console.log(e);
    } finally {
      setLoaderVisible(false);
    }
  }

  async function accountBillDetail(id) {
    console.log('id console', id);
    try {
      setLoaderVisible(true);
      const gettoken = await getItem(ASYNC_KEY.auth);
      const header = {
        headers: {
          Authorization: gettoken,
        },
      };
      const response = await ProfileService.accountBillDetails(id, header);
      console.log('account Bill Details', response.data.result);
      setAmount(response.data.result);
    } catch (e) {
      console.log(e);
    } finally {
      setLoaderVisible(false);
    }
  }

  //   useEffect(() => {
  //     // console.log('useEffect');
  //     getbilldetails();
  //   }, []);
  // async function getbilldetails() {
  //   try{
  //     const gettoken = await getItem(ASYNC_KEY.auth);
  //     const header = {
  //       headers: {
  //         Authorization: gettoken,
  //       },
  //     };
  //     const response = await ProfileService.accountDetails(header);
  //     console.log(response.data);
  //   }
  // }
  const renderitem = ({item}) => {
    console.log('msg', item);
    return (
      <View
        style={{
          backgroundColor: '#00E556',
          height: 190,
          width: Dimensions.get('window').width * 0.96,
          marginLeft: Dimensions.get('window').height * 0.01,
          borderRadius: 13,
        }}>
        <Carousel>
          <>
            <Text
              style={{
                color: 'white',
                marginTop: 10,
                marginLeft: 10,
                fontWeight: 'bold',
              }}>
              {/* Postpaid: +1868 9876543210 */}
              {item.type + ' ' + item.mobile}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: '700',
                  marginLeft: 10,
                }}>
                {item.firstName + ' ' + item.lastName}
              </Text>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#5EC674',
                    marginRight: 10,
                    width: 120,
                    height: 40,
                    bottom: 10,
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
              {item.type == 'POSTPAID' ? (
                <>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 15,
                      fontWeight: 'bold',
                    }}>
                    Total Due Amount
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 130,
                      fontWeight: 'bold',
                    }}>
                    Due Date
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 15,
                      fontWeight: 'bold',
                    }}>
                    Balance
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 130,
                      fontWeight: 'bold',
                    }}>
                    {'            '} Expiry Date
                  </Text>
                </>
              )}
            </View>

            <View style={{flexDirection: 'row'}}>
              {press ? (
                <Text
                  style={{
                    color: 'white',
                    marginLeft: 22,
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  {item.type == 'POSTPAID'
                    ? amount.totalDueAmount
                    : amount.expiringDate}
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'white',
                    marginLeft: 22,
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  {'***'}
                </Text>
              )}
              {press ? (
                <Text
                  style={{
                    color: 'white',
                    marginLeft: 164,
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  {amount.dueDate}
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'white',
                    marginLeft: 164,
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  {'                  '} {'***'}
                </Text>
              )}
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  accountBillDetail(item.id);
                  setPress(true);
                }}>
                <View
                  style={{
                    backgroundColor: '#5EC674',
                    width: 150,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 85,
                    marginTop: 20,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'white', fontWeight: '700'}}>
                    Refresh
                  </Text>
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
                    marginTop: 20,
                  }}>
                  <Image
                    style={{width: 30, height: 30, marginLeft: 5, marginTop: 6}}
                    source={require('../assets/settings.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </>
        </Carousel>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Loader animating={loadervisible} />
        <FlatList
          style={{marginVertical: '2%'}}
          data={cards}
          renderItem={renderitem}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />

        <Pressable
          onPress={() => navigation.navigate('Addaccount')}
          style={{
            flex: 1,
            backgroundColor: '#48BC5F',
            color: '#FFFFFF',
            height: 40,
            width: 230,
            padding: 10,
            marginTop: 40,
            marginLeft: 'auto',
            marginRight: 'auto',
            fontWeight: 'bold',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            + Add New Account
          </Text>
        </Pressable>

        <View
          style={{
            width: '100%',
            height: Dimensions.get('screen').height * 0.3,
            backgroundColor: '#F4F4F4',
            padding: '3%',
          }}>
          <View
            style={{flex: 1, flexDirection: 'row', backgroundColor: '#F4F4F4'}}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#FCEDE6',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '1%',
                flexDirection: 'row',
                borderRadius: 15,
              }}>
              <Image
                style={{
                  // height: Dimensions.get('screen').height * 0.01,

                  aspectRatio: 1,
                  width: '18%',
                  marginRight: '8%',
                }}
                source={require('../assets/PrepaidTopup.png')}
              />
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Prepaid{'\n'}Top Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Paybill')}
              style={{
                flex: 1,
                backgroundColor: '#EDE7F1',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '1%',
                flexDirection: 'row',
                borderRadius: 15,
              }}>
              <Image
                style={{
                  // height: '33%',
                  resizeMode: 'contain',
                  width: '16%',
                  marginRight: '7%',
                }}
                source={require('../assets/Pay_Bills_Light.png')}
              />
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pay Bills</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 1, flexDirection: 'row', backgroundColor: '#F4F4F4'}}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#FEFCE8',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '1%',
                flexDirection: 'row',
                borderRadius: 15,
              }}>
              <Image
                style={{
                  // height: '26%',
                  resizeMode: 'contain',
                  width: '21%',
                  marginRight: '7%',
                }}
                source={require('../assets/Mycards.png')}
              />
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>My Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#ECF6EA',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '1%',
                flexDirection: 'row',
                borderRadius: 15,
              }}>
              <Image
                style={{
                  // height: '30%',
                  resizeMode: 'contain',
                  width: '20%',
                  marginLeft: '4%',
                }}
                source={require('../assets/TransactionHistory.png')}
              />
              <Text
                style={{fontSize: 16, fontWeight: 'bold', marginLeft: '4%'}}>
                Transaction{'\n'}History
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: 'white',
            // width: '95%',
            // marginLeft: 10,
            // marginTop: 15,
            // height: 220,
            // borderRadius: 20,
            // flex:1
            // width: '95%',
            // height: Dimensions.get('screen').height * 0.3,
            backgroundColor: 'white',
            // padding: '1%',
            margin: '2%',
            flex: 1,
            borderRadius:20
          }}>
          <View
            style={{flexDirection: 'row', marginLeft: '6%', marginTop: '3%'}}>
            <Text
              style={{
                color: '#00E556',
                fontSize: 23,
                fontWeight: 'bold',
                // marginLeft: 10,
              }}>
              bMobile
            </Text>
            <Text
              style={{
                fontSize: 23,
                fontWeight: 'bold',
                marginLeft: '2%',
                color: '#2E2F2F',
              }}>
              Offers
            </Text>
          </View>
          <Carousel>
            <View style={styles.slide1}>
              <Image
                style={{
                  height: '80%',
                  width: '90%',
                  borderRadius: 15,
                }}
                source={{
                  uri: 'https://dev-cim-api.tstt.co.tt/storage/promoImages/mrpBVxju0nvj88rKszm2pd7V87dg8C3CFi4TZO1h.png',
                }}
              />
            </View>
          </Carousel>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            backgroundColor:'red'
          }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#5CB24C',
                marginTop: 20,

                width: 180,
                height: 60,
                borderRadius: 10,
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  marginLeft: '12%',
                  marginTop: 10,
                }}
                source={require('../assets/UssdCodes.png')}
              />
              <Text
                style={{
                  marginLeft: 70,
                  bottom: 30,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Quick Codes
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#632F89',
                marginTop: 20,
                marginLeft: 10,
                width: 180,
                height: 60,
                borderRadius: 10,
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  marginLeft: '5%',
                  marginTop: 10,
                }}
                source={require('../assets/Servicelocator.png')}
              />
              <Text
                style={{
                  marginLeft: 68,
                  bottom: 40,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Service Store{'\n'}Locator
              </Text>
            </View>
          </TouchableOpacity>
        </View> */}
        <View
          style={{
            width: '100%',
            height: Dimensions.get('screen').height * 0.07,
            backgroundColor: '#F4F4F4',
            // padding: '1%',
            // paddingHorizontal:'5%',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: '3%',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#5CB24C',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              width: '47%',
              borderRadius: 15,
            }}>
            <Image
              style={{
                height: '52%',
                width: '18%',
                marginRight: '8%',
              }}
              source={require('../assets/UssdCodes.png')}
            />
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
              USSD Codes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#632F89',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              width: '47%',
              borderRadius: 15,
            }}>
            <Image
              style={{
                height: '53%',
                width: '19%',
                marginRight: '7%',
              }}
              source={require('../assets/Servicelocator.png')}
            />
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
              Service Store{'\n'}Locator
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            // backgroundColor: '#FFFFFF',
            // marginTop: 20,
            // width: '96%',
            // marginLeft: 'auto',
            // marginRight: 'auto',
            // flex: 1,
            // width:  Dimensions.get('screen').width * 0.96,
            // height: Dimensions.get('screen').height * 0.36,
            flex: 1,
            backgroundColor: 'white',
            paddingBottom: '5%',
            // padding: '1%',
            margin: '2%',
            // marginTop:'5%'
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 20,
                marginLeft: '3%',
                marginTop: '3%',
                fontWeight: 'bold',
                color: '#2E2F2F',
              }}>
              More from
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginLeft: '1%',
                color: '#00E556',
                marginTop: '3%',
                fontWeight: 'bold',
              }}>
              bMobile
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              // marginBottom: 120,
              // marginLeft: 'auto',
              // marginRight: 'auto',
              // flex:1
              justifyContent: 'space-evenly',
              marginTop: '2%',
              marginHorizontal: '1%',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                // width:  Dimensions.get('screen').width * 0.52,
                //   height: Dimensions.get('screen').height * 0.3,
                width: '48%',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: Dimensions.get('screen').width * 0.42,
                  height: Dimensions.get('screen').height * 0.2,
                  margin: '4%',
                  marginBottom: 0,
                  borderRadius: 20,
                }}
                source={require('../assets/Carhub.png')}
              />

              <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  // height: '30%',
                  width: '100%',
                  paddingVertical: '4%',
                  backgroundColor: '#00E556',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: 20,
                  marginTop: 1,
                }}>
                CarHub
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',

                width: '48%',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: Dimensions.get('screen').width * 0.42,
                  height: Dimensions.get('screen').height * 0.2,
                  margin: '4%',
                  marginBottom: 0,
                  borderRadius: 20,
                }}
                source={require('../assets/bmobilsecurity.png')}
              />

              <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  // height: 37,
                  width: '100%',
                  paddingVertical: '4%',
                  backgroundColor: '#00E556',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: 20,
                  marginTop: 1,
                }}>
                bMobile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View>
          <Image
            style={{
              height: 140,
              width: 350,
              marginLeft: '5%',
              borderRadius: 20,
              bottom: 100,
            }}
            source={require('../assets/Banner1.png')}
          />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  // slide1: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#a3c9a8',
  // },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#84b59f',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    bottom: 10,
  },
  slide1: {
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
