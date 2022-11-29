import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
const Home = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
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
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: 'black',
              color: 'white',
              textAlign: 'center',
              height: 40,
              width: 230,
              padding: 10,
              marginTop: 40,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            + Add New Account
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'lightgrey',
                padding: 5,
                marginTop: 40,
                marginLeft: 20,
                width: 160,
                height: 160,
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
                backgroundColor: 'lightgrey',
                padding: 5,
                marginTop: 40,
                marginLeft: 30,
                width: 160,
                height: 160,
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
                backgroundColor: 'lightgrey',
                padding: 5,
                marginTop: 40,
                marginLeft: 20,
                width: 160,
                height: 160,
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
                backgroundColor: 'lightgrey',
                padding: 5,
                marginTop: 40,
                marginLeft: 30,
                width: 160,
                height: 160,
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
        <View style={{flexDirection: 'row'}}>
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
        </View>
        <Image
          style={{
            height: 140,
            width: 350,
            marginLeft: '5%',
          }}
          source={require('../assets/Banner2.png')}
        />

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'lightgreen',
                marginTop: 10,
                marginLeft: 10,
                width: 180,
                height: 80,
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  marginLeft: '12%',
                  marginTop: 20,
                }}
                source={require('../assets/dollar.png')}
              />
              <Text style={{marginLeft: 70, marginTop: -30}}>Quick Codes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'lightgreen',
                marginTop: 10,
                marginLeft: 10,
                width: 180,
                height: 80,
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  marginLeft: '5%',
                  marginTop: 20,
                }}
                source={require('../assets/dollar.png')}
              />
              <Text style={{marginLeft: 70, marginTop: -40}}>
                Service Store{'\n'}Locator
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
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
        </View>

        <View style={{flexDirection: 'row', marginBottom: 100}}>
          <TouchableOpacity>
            <Image
              style={{
                height: 140,
                width: 160,
                marginLeft: '10%',
                marginTop: 5,
                borderRadius: 20,
              }}
              source={require('../assets/Carhub.png')}
            />
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 19,
                marginTop: 10,
                textAlign: 'center',
                height: 30,
                width: 160,
                padding: 5,
                backgroundColor: 'lightgreen',
              }}>
              CarHub
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                height: 140,
                width: 160,
                marginLeft: '4%',
                marginTop: 5,
                borderRadius: 20,
              }}
              source={require('../assets/bmobilsecurity.png')}
            />
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 10,
                marginTop: 10,
                textAlign: 'center',
                height: 30,
                width: 160,
                padding: 5,
                backgroundColor: 'lightgreen',
              }}>
              bMobile
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
