import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel from 'pinar';
import Listhorizontal from './Listhorizontal';
import {SafeAreaView} from 'react-native-safe-area-context';
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
import CardDetails from './CardDetails';
const Home = ({navigation}) => {
  const [moredata, setmoredata] = useState();
  const [promo, setpromo] = useState();
  useEffect(() => {
    console.log('useEffect');
    getpromotions();
  }, []);
  async function getpromotions() {
    console.log('usee');
    try {
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
    }
  }
  useEffect(() => {
    console.log('useEffect');
    getaccountdetails();
  }, []);
  async function getaccountdetails() {
    try {
      const gettoken = await getItem(ASYNC_KEY.auth);
      const header = {
        headers: {
          Authorization: gettoken,
        },
      };
      const response = await ProfileService.accountDetails(header);
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
    }
  }
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {/* <SafeAreaView>
        <Listhorizontal data={data}/>
        </SafeAreaView> */}

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: '#00E556',
              height: 190,
              width: 350,
              marginLeft: 10,
              marginTop: 20,
              borderRadius: 13,
            }}>
            <Text
              style={{
                color: 'white',
                marginTop: 10,
                marginLeft: 10,
                fontWeight: 'bold',
              }}>
              Postpaid: +1868 9876543210
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: '700',
                  marginLeft: 10,
                }}>
                Loid Forger
              </Text>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#F4F4F4',
                    marginLeft: 100,
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
              <Text
                style={{color: 'white', marginLeft: 15, fontWeight: 'bold'}}>
                Your Bill
              </Text>
              <Text
                style={{color: 'white', marginLeft: 200, fontWeight: 'bold'}}>
                Due In
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 33,
                  fontWeight: 'bold',
                  fontSize: 25,
                }}>
                ---
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 210,
                  fontWeight: 'bold',
                  fontSize: 25,
                }}>
                ---
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#F4F4F4',
                    width: 150,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 85,
                    marginTop: 20,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'white', fontWeight: '700'}}>
                    Refresh Bill Details
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
          </View>
          <View
            style={{
              backgroundColor: '#367B39',
              height: 190,
              width: 350,
              marginLeft: 10,
              marginTop: 20,
              marginRight: 10,
              borderRadius: 13,
            }}>
            <Text
              style={{
                color: 'white',
                marginTop: 10,
                marginLeft: 10,
                fontWeight: 'bold',
                fontSize: 17,
              }}>
              Prepaid Account
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,

                  marginLeft: 10,
                }}>
                +1868 9876543210
              </Text>
              <TouchableOpacity >
                <View
                  style={{
                    backgroundColor: 'white',
                    marginLeft: 90,
                    width: 110,
                    height: 40,
                    bottom: 20,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      color: '#4D4848',
                      fontSize: 20,
                      padding: 5,
                      textAlign: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                    }}>
                    Recharge
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 15,
                  fontWeight: 'bold',
                  fontSize: 12,
                }}>
                Balance
              </Text>
              <Text
                style={{color: 'white', marginLeft: 200, fontWeight: 'bold'}}>
                Expiry Date
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 13,
                  fontWeight: 'bold',
                  fontSize: 25,
                }}>
                TTD 5000.00
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 85,
                  fontWeight: 'bold',
                  fontSize: 25,
                }}>
                26 AUG
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: 150,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 100,
                    marginTop: 20,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: '#4D4848', fontWeight: 'bold'}}>
                    Manage Account
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#48BC5F',
              color: '#FFFFFF',
              textAlign: 'center',
              height: 40,
              width: 230,
              padding: 10,
              marginTop: 40,
              marginLeft: 'auto',
              marginRight: 'auto',
              fontWeight: 'bold',
            }}>
            + Add New Account
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('')}>
            <View
              style={{
                backgroundColor: '#FCEDE6',
                padding: 5,
                marginTop: 40,
                marginLeft: 13,
                width: 180,
                height: 130,
                borderRadius: 20,
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  marginLeft: '7%',
                  marginTop: 45,
                }}
                source={require('../assets/PrepaidTopup.png')}
              />
              <Text
                style={{
                  marginLeft: 15,
                  marginTop: 43,
                  fontSize: 23,
                  fontWeight: 'bold',
                  color: '#2E2F2F',
                }}>
                Recharge
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Paybill')}> 
            <View
              style={{
                backgroundColor: '#ECF6EA',
                padding: 5,
                marginTop: 40,
                marginLeft: 10,
                width: 180,
                height: 130,
                borderRadius: 20,
                flexDirection: 'row',
                
              }}>
              <Image
                style={{
                  height: 37,
                  width: 30,
                  marginLeft: '7%',
                  marginTop: 43,
                }}
                source={require('../assets/Pay_Bills_Light.png')}
              />
              <Text
                style={{
                  marginLeft: 15,
                  marginTop: 45,
                  fontSize: 23,
                  fontWeight: 'bold',
                  color: '#2E2F2F',
                }}>
                Pay Bills
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('CardDetails')}>
            <View
              style={{
                backgroundColor: '#FEFCE8',
                padding: 5,
                marginTop: 20,
                marginLeft: 13,
                width: 180,
                height: 130,
                borderRadius: 20,
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  height: 30,
                  width: 40,
                  marginLeft: '7%',
                  marginTop: 45,
                }}
                source={require('../assets/Mycards.png')}
              />
              <Text
                style={{
                  marginLeft: 15,
                  marginTop: 45,
                  fontSize: 21,
                  fontWeight: 'bold',
                  color: '#2E2F2F',
                }}>
                My Cards
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Transaction')}>
            <View
              style={{
                backgroundColor: '#EDE7F1',
                padding: 5,
                marginTop: 20,
                marginLeft: 10,
                marginRight: 10,
                width: 180,
                height: 130,
                borderRadius: 20,
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  height: 30,
                  width: 37,
                  marginLeft: '5%',
                  marginTop: 44,
                }}
                source={require('../assets/TransactionHistory.png')}
              />
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 40,
                  fontSize: 21,
                  fontWeight: 'bold',
                  color: '#2E2F2F',
                }}>
                Transaction{'\n'}History
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            width: '95%',
            marginLeft: 10,
            marginTop: 15,
            height: 220,
            borderRadius: 20,
          }}>
          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
            <Text
              style={{
                color: '#00E556',
                fontSize: 23,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              bMobile
            </Text>
            <Text style={{fontSize: 23, fontWeight: 'bold', marginLeft: 5,color: '#2E2F2F'}}>
              Offers
            </Text>
          </View>
          {/* <Image
            style={{
              height: 140,
              width: 350,
              marginLeft: '3%',
              borderRadius: 20,
              marginTop: 15,
            }}
            source={require('../assets/Banner1.png')}
          /> */}
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
            {/* <View style={styles.slide2}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              marginTop:-95
            }}
            source={require('../assets/PayBill.png')}
          />
        </View> */}
          </Carousel>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#5CB24C',
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
                  marginLeft: 70,
                  bottom: 40,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Service Store{'\n'}Locator
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{backgroundColor: '#FFFFFF', marginTop: 20, width: '96%',marginLeft:10}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 15,
                marginTop: 10,
                fontWeight: 'bold',
                color: '#2E2F2F',
              }}>
              More from
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 5,
                color: '#00E556',
                marginTop: 10,
                fontWeight: 'bold',
              }}>
              bMobile
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 120}}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: 'black',
                  height: 205,
                  width: 180,
                  marginTop: 15,
                  marginLeft: 5,
                  borderRadius: 20,
                }}>
                <Image
                  style={{
                    height: 160,
                    width: 165,
                    marginLeft: 7.5,
                    marginTop: 8,
                    borderRadius: 20,
                  }}
                  source={require('../assets/Carhub.png')}
                />
            
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: 1,
                  textAlign: 'center',
                  height: 37,
                  width: 178,
                  padding: 5,
                  backgroundColor: '#00E556',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: 20,
                  marginTop:1
                }}>
                CarHub
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: 'black',
                  height: 206,
                  width: 180,
                  marginTop: 15,
                  marginLeft: 10,
                  borderRadius: 20,
                }}>
                <Image
                  style={{
                    height: 160,
                    width: 165,
                    marginLeft: 8,
                    marginTop: 8,
                    borderRadius: 20,
                  }}
                  source={require('../assets/bmobilsecurity.png')}
                />
    
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: 1,
                  textAlign: 'center',
                  height: 37,
                  width: 178,
                  padding: 5,
                  backgroundColor: '#00E556',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: 20,
                  marginTop:1
                }}>
                bMobile
              </Text>
              </View>
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
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a3c9a8',
  },
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
