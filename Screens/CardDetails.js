import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const CardDetails = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                marginLeft: 10,
                height: 30,
                width: 30,
                marginTop: 20,
              }}
              source={require('../assets/backbutton.png')}
            />
          </TouchableOpacity>
          <Image
            style={{
              marginLeft: 90,
              height: 60,
              width: 160,
              marginTop: 10,
            }}
            source={require('../assets/toplogo.jpeg')}
          />
          <Image
            style={{
              marginLeft: 30,
              height: 40,
              width: 60,
              marginTop: 20,
            }}
            source={require('../assets/notificationwhite.png')}
          />
        </View>

        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 9,
              marginLeft: 'auto',
              marginRight: 'auto',
              color: '#4D4848',
            }}>
            Select Card To Pay
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#FFFFFF',
            height: '60%',
            width: '90%',
            marginLeft: 20,
            marginTop: 10,
          }}>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 15,
              fontWeight: 'bold',
              marginTop: 10,
              color: '#3E3E3E',
            }}>
            Select Card To Pay
          </Text>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F4F4F4',
              width: '90%',
              height: '20%',
              marginLeft: 15,
              marginTop: 10,
            }}>
            <View
              style={{
                borderColor: 'white',
                width: 70,
                height: 50,
                padding: 5,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                marginLeft: 20,
                marginTop: 10,
              }}>
              <Image
                style={{
                  marginLeft: 10,
                  height: 28,
                  width: 45,
                  marginTop: 8,
                }}
                source={require('../assets/master_card.png')}
              />
            </View>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text>Mr.John {'\n'} 08/25</Text>
            </View>
            <View style={{marginLeft: 30, marginTop: 20}}>
              <Text>**5678</Text>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 15,
                  backgroundColor: 'white',
                  marginLeft: 70,
                  marginBottom: 20,
                }}></View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#F4F4F4',
              width: '90%',
              height: '35%',
              marginLeft: 15,
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#F4F4F4',
                marginLeft: 2,
                marginTop: 10,
              }}>
              <View
                style={{
                  borderColor: 'white',
                  width: 70,
                  height: 50,
                  padding: 5,
                  borderRadius: 10,
                  backgroundColor: '#FFFFFF',
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                <Image
                  style={{
                    marginLeft: 10,
                    height: 15,
                    width: 45,
                    marginTop: 15,
                  }}
                  source={require('../assets/Visa.png')}
                />
              </View>
              <View style={{marginLeft: 20, marginTop: 20}}>
                <Text>Mr.John {'\n'} 08/25</Text>
              </View>
              <View style={{marginLeft: 30, marginTop: 20}}>
                <Text>**5678</Text>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginLeft: 70,
                    marginBottom: 20,
                  }}></View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: 10,
                width: 100,
                marginLeft: 100,
                borderRadius: 10,
              }}>
              {/* <Text style={{marginLeft:10,padding:10}}>CVV</Text>  */}
              <TextInput
                style={{
                  backgroundColor: 'white',
                  marginTop: 5,
                  height: 50,
                  borderRadius: 20,
                }}
                placeholder="CVV"
                placeholderTextColor={'#4D4848'}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F4F4F4',
              width: '90%',
              height: '20%',
              marginLeft: 15,
              marginTop: 10,
            }}>
            <View
              style={{
                borderColor: 'white',
                width: 70,
                height: 50,
                padding: 5,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                marginLeft: 20,
                marginTop: 10,
              }}>
              <Image
                style={{
                  marginLeft: 10,
                  height: 28,
                  width: 45,
                  marginTop: 8,
                }}
                source={require('../assets/master_card.png')}
              />
            </View>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text>Mr.John {'\n'} 08/25</Text>
            </View>
            <View style={{marginLeft: 30, marginTop: 20}}>
              <Text>**5678</Text>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 15,
                  backgroundColor: 'white',
                  marginLeft: 70,
                  marginBottom: 20,
                }}></View>
            </View>
          </View>
        </View>

        <Text
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10,
            marginBottom: 10,
            color: '#989898',
          }}>
          Or
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            height: '90%',
            width: '90%',
            marginLeft: 20,
          }}>
          <Text
            style={{
              color: '#3E3E3E',
              marginLeft: 20,
              marginLeft: 10,
              marginTop: 10,
            }}>
            Add New Card
          </Text>
          <TextInput
            style={{
              width: '90%',
              marginTop: 20,
              marginLeft: 15,
              borderRadius: 10,
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: '#F4F4F4',
              height: 45,
            }}
            placeholder="Cardholder Name"
            placeholderTextColor="#989898"
          />
          <TextInput
            style={{
              width: '90%',
              marginTop: 20,
              marginLeft: 15,
              borderRadius: 10,
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: '#F4F4F4',
              height: 45,
            }}
            placeholder="Card Number"
            placeholderTextColor="#989898"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 90,
            padding: 20,
            marginTop: 670,
            width: '100%',
            position: 'absolute',
          }}>
          <View
            style={{
              backgroundColor: '#F2F2F2',
              height: 50,
              width: 150,
              marginLeft: 20,
              borderRadius: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  padding: 10,
                  marginLeft: 20,
                  color: '#2E2F2F',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#00E556',
              height: 50,
              width: 150,
              marginLeft: 20,
              borderRadius: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  padding: 10,
                  marginLeft: 18,
                  color: '#2E2F2F',
                }}>
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardDetails;
