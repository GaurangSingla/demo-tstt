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
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
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
import {RFValue} from 'react-native-responsive-fontsize';
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
    return (
      <View
        style={{
          backgroundColor: '#00E556',
          width: Dimensions.get('window').width * 0.96,
          height: Dimensions.get('window').height * 0.33,
          padding: RFValue(10),
          borderRadius: RFValue(15),
          marginHorizontal: RFValue(10),
        }}>
        <Carousel>
          <>
            <Text
              style={{
                color: 'white',
                marginTop: RFValue(8),

                fontWeight: 'bold',
              }}>
              {/* Postpaid: +1868 9876543210 */}
              {item.type + ' ' + item.mobile}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: RFValue(5),
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: RFValue(17),
                  fontWeight: '700',
                }}>
                {item.firstName + ' ' + item.lastName}
              </Text>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#5EC674',
                    width: '110%',
                    height: responsiveHeight(8),
                    justifyContent: 'center',
                    borderRadius: RFValue(12),
                    marginRight: RFValue(15),
                    right: RFValue(8),
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: RFValue(17),
                      paddingHorizontal: RFValue(25),
                      textAlign: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                    }}>
                    Pay Bill
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: RFValue(5),
              }}>
              {item.type == 'POSTPAID' ? (
                <>
                  <Text
                    style={{
                      color: 'white',

                      fontWeight: 'bold',
                    }}>
                    Total Due Amount
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      right: RFValue(15),
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

                      fontWeight: 'bold',
                    }}>
                    Balance
                  </Text>
                  <Text
                    style={{
                      color: 'white',

                      fontWeight: 'bold',
                    }}>
                    Expiry Date
                  </Text>
                </>
              )}
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: RFValue(25),
              }}>
              {press ? (
                <Text
                  style={{
                    color: 'white',
                    left: RFValue(17),
                    fontWeight: 'bold',
                    fontSize: RFValue(18),
                  }}>
                  {item.type == 'POSTPAID'
                    ? amount.totalDueAmount
                    : amount.expiringDate}
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'white',
                    left: RFValue(10),
                    fontWeight: 'bold',
                    fontSize: RFValue(18),
                  }}>
                  {'***'}
                </Text>
              )}
              {press ? (
                <Text
                  style={{
                    color: 'white',
                    left: RFValue(10),
                    fontWeight: 'bold',
                    fontSize: RFValue(18),
                  }}>
                  {amount.dueDate}
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'white',
                    right: RFValue(10),
                    fontWeight: 'bold',
                    fontSize: RFValue(17),
                  }}>
                  {'***'}
                </Text>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                top: RFValue(20),
              }}>
              <TouchableOpacity
                onPress={() => {
                  accountBillDetail(item.id);
                  setPress(true);
                }}>
                <View
                  style={{
                    backgroundColor: '#5EC674',
                    width: responsiveWidth(45),
                    height: responsiveHeight(7),
                    borderRadius: RFValue(10),
                    justifyContent: 'center',
                    left: RFValue(55),
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '700',
                      textAlign: 'center',
                    }}>
                    Refresh
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: RFValue(25),
                    height: responsiveHeight(7),
                    width: responsiveWidth(13),
                    left: RFValue(15),
                  }}>
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      margin: RFValue(6),
                      left: RFValue(3),
                    }}
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
            height: responsiveHeight(7),
            width: responsiveWidth(60),
            justifyContent: 'center',
            marginTop: RFValue(35),
            alignSelf: 'center',
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
              <Text style={{fontSize: RFValue(18), fontWeight: 'bold'}}>
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
              <Text style={{fontSize: RFValue(18), fontWeight: 'bold'}}>
                Pay Bills
              </Text>
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
              <Text style={{fontSize: RFValue(18), fontWeight: 'bold'}}>
                My Cards
              </Text>
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
                style={{
                  fontSize: RFValue(18),
                  fontWeight: 'bold',
                  marginLeft: '4%',
                }}>
                Transaction{'\n'}History
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            margin: '2%',
            borderRadius: RFValue(20),
            width: Dimensions.get('window').width * 0.96,
            height: Dimensions.get('window').height * 0.35,
          }}>
          <View
            style={{flexDirection: 'row', marginLeft: '6%', marginTop: '3%'}}>
            <Text
              style={{
                color: '#00E556',
                fontSize: RFValue(30),
                fontWeight: 'bold',
              }}>
              bMobile
            </Text>
            <Text
              style={{
                fontSize: RFValue(30),
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
                  height: responsiveHeight(20),
                  width: responsiveWidth(90),
                  borderRadius: RFValue(15),
                }}
                source={{
                  uri: 'https://dev-cim-api.tstt.co.tt/storage/promoImages/mrpBVxju0nvj88rKszm2pd7V87dg8C3CFi4TZO1h.png',
                }}
              />
            </View>
          </Carousel>
        </View>
        <View
          style={{
            width: '100%',
            height: Dimensions.get('screen').height * 0.07,
            backgroundColor: '#F4F4F4',
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
              borderRadius: RFValue(15),
            }}>
            <Image
              style={{
                height: '52%',
                width: '18%',
                marginRight: '8%',
              }}
              source={require('../assets/UssdCodes.png')}
            />
            <Text
              style={{
                fontSize: RFValue(18),
                fontWeight: 'bold',
                color: 'white',
              }}>
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
              borderRadius: RFValue(15),
            }}>
            <Image
              style={{
                height: '53%',
                width: '19%',
                marginRight: '7%',
              }}
              source={require('../assets/Servicelocator.png')}
            />
            <Text
              style={{
                fontSize: RFValue(18),
                fontWeight: 'bold',
                color: 'white',
              }}>
              Service Store{'\n'}Locator
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingBottom: '5%',
            margin: '2%',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: RFValue(25),
                marginLeft: '3%',
                marginTop: '3%',
                fontWeight: 'bold',
                color: '#2E2F2F',
              }}>
              More from
            </Text>
            <Text
              style={{
                fontSize: RFValue(25),
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
              justifyContent: 'space-evenly',
              marginTop: '2%',
              marginHorizontal: '1%',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                width: '48%',
                borderRadius: RFValue(20),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: Dimensions.get('screen').width * 0.42,
                  height: Dimensions.get('screen').height * 0.2,
                  margin: '4%',

                  borderRadius: RFValue(20),
                }}
                source={require('../assets/Carhub.png')}
              />

              <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',

                  width: '100%',
                  paddingVertical: '4%',
                  backgroundColor: '#00E556',
                  borderRadius: RFValue(15),
                  color: 'white',
                  fontSize: RFValue(27),
                  marginTop: RFValue(1),
                }}>
                CarHub
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                width: '48%',

                borderRadius: RFValue(20),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: Dimensions.get('screen').width * 0.42,
                  height: Dimensions.get('screen').height * 0.2,
                  margin: '4%',
                  borderRadius: RFValue(20),
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
                  marginTop: RFValue(1),
                }}>
                bMobile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#84b59f',
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.96,
    height: Dimensions.get('window').height * 0.3,
  },
});
