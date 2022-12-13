import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Carousel from 'pinar';
import Listhorizontal from './Listhorizontal';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  // const data=['#00E556','#367B39']
  return (
    <View>
      {/* <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            style={{
              height: 60,
              width: 60,
              marginTop: 10,
              marginLeft: 10,
            }}
            source={require('../assets/Profile.png')}
          />
        </TouchableOpacity>
        <Image
          style={{
            marginLeft: 50,
            height: 60,
            width: 160,
            marginTop: 10,
          }}
          source={require('../assets/toplogo.jpeg')}
        />
        <TouchableOpacity>
          <Image
            style={{
              height: 60,
              width: 60,
              marginLeft: '22%',
              marginTop: 10,
            }}
            source={require('../assets/Notification.png')}
          />
        </TouchableOpacity>
      </View> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {/* <Carousel>

        </Carousel> */}
        {/* <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
          <View style={{flex:1,flexDirection:'row'}}>
            <View style={{backgroundColor:'green',height:90,width:'100%'}}>
              <Text>onew</Text>
            </View>
            <View style={{backgroundColor:'green'}}>
              <Text>onew</Text>
            </View>
          </View>

        </ScrollView> */}
        {/* <SafeAreaView>
        <Listhorizontal data={data}/>
        </SafeAreaView> */}

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: '#00E556',
              height: 190,
              width: 330,
              marginLeft: 30,
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
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Loid Forger
              </Text>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: 'lightgrey',
                    marginLeft: 100,
                    width: 100,
                    height: 40,
                    bottom: 10,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      padding: 5,
                      textAlign: 'center',
                      justifyContent: 'center',
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
                    backgroundColor: 'lightgrey',
                    width: 150,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 85,
                    marginTop: 20,
                  }}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    Refresh Bill Details
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: 'lightgrey',
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    marginLeft: 38,
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
              width: 310,
              marginLeft: 10,
              marginTop: 20,
              marginRight: 20,
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
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: 'white',
                    marginLeft: 60,
                    width: 100,
                    height: 40,
                    bottom: 20,
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
                style={{color: 'white', marginLeft: 170, fontWeight: 'bold'}}>
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
                  marginLeft: 53,
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
                    marginLeft: 85,
                    marginTop: 20,
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
              backgroundColor: '#FFFFFF',
              color: '#4D4848',
              textAlign: 'center',
              height: 40,
              width: 230,
              padding: 10,
              marginTop: 40,
              marginLeft: 'auto',
              marginRight: 'auto',
              fontWeight:'bold'
            }}>
            Add Account
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#FCEDE6',
                padding: 5,
                marginTop: 40,
                marginLeft: 20,
                width: 160,
                height: 160,
                borderRadius: 20,
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  marginLeft: '9%',
                  marginTop: 60,
                }}
                source={require('../assets/dollar.png')}
              />
              <Text style={{marginLeft: 70, marginTop: -40}}>
                Prepaid{'\n'} Top Up
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#EDE7F1',
                padding: 5,
                marginTop: 40,
                marginLeft: 30,
                width: 160,
                height: 160,
                borderRadius: 20,
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  marginLeft: '9%',
                  marginTop: 60,
                }}
                source={require('../assets/dollar.png')}
              />
              <Text style={{marginLeft: 70, marginTop: -30}}>Pay Bills</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#FEFCE8',
                padding: 5,
                marginTop: 40,
                marginLeft: 20,
                width: 160,
                height: 160,
                borderRadius: 20,
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  marginLeft: '9%',
                  marginTop: 60,
                }}
                source={require('../assets/dollar.png')}
              />
              <Text style={{marginLeft: 70, marginTop: -30}}>My Cards</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#ECF6EA',
                padding: 5,
                marginTop: 40,
                marginLeft: 30,
                width: 160,
                height: 160,
                borderRadius: 20,
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  marginLeft: '9%',
                  marginTop: 60,
                }}
                source={require('../assets/dollar.png')}
              />
              <Text style={{marginLeft: 70, marginTop: -40}}>
                Transaction{'\n'}History
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginTop: 10,
              marginLeft: 17,
              fontWeight: 'bold',
              fontSize: 20,
              color: 'green',
            }}>
            bMobile
          </Text>
          <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 20}}>
            {' '}
            Offers
          </Text>
        </View> */}
        <Image
          style={{
            height: 140,
            width: 350,
            marginLeft: '5%',
            borderRadius: 20,
            marginTop: 15,
          }}
          source={require('../assets/Banner2.png')}
        />

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
                source={require('../assets/dollar.png')}
              />
              <Text style={{marginLeft: 70, bottom: 30, color: 'white'}}>
                USSD Codes
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
                source={require('../assets/dollar.png')}
              />
              <Text style={{marginLeft: 70, bottom: 40, color: 'white'}}>
                Service Store{'\n'}Locator
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 16,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            More from
          </Text>
          <Text
            style={{
              marginTop: 20,
              color: 'green',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            {' '}
            bMobile
          </Text>
        </View> */}

        <View style={{flexDirection: 'row', marginBottom: 120}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'black',
                height: 180,
                width: 180,
                marginTop: 15,
                marginLeft: 10,
                borderRadius: 10,
              }}>
              <Image
                style={{
                  height: 150,
                  width: 160,
                  marginLeft: 10,
                  marginTop: 18,
                  borderRadius: 20,
                }}
                source={require('../assets/Carhub.png')}
              />
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 10,
                textAlign: 'center',
                height: 35,
                width: 180,
                padding: 5,
                backgroundColor: '#00E556',
                borderRadius: 10,
                color: 'white',
              }}>
              Open CarHub
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'black',
                height: 180,
                width: 180,
                marginTop: 15,
                marginLeft: 15,
                borderRadius: 10,
              }}>
              <Image
                style={{
                  height: 150,
                  width: 160,
                  marginLeft: 10,
                  marginTop: 18,
                  borderRadius: 20,
                }}
                source={require('../assets/bmobilsecurity.png')}
              />
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 14,
                textAlign: 'center',
                height: 35,
                width: 180,
                padding: 5,
                backgroundColor: '#00E556',
                borderRadius: 10,
                color: 'white',
              }}>
              Open App 2
            </Text>
          </TouchableOpacity>
        </View>
        <View>
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
        </View>
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
});
