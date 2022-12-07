import { View, Text,TouchableOpacity ,Image,ScrollView,Dimensions} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardDetails from './CardDetails';
const Home = ({navigation}) => {
  return (
   
    <View>
    
 
      <ScrollView
              style={{
               height: Dimensions.get('screen').height * 0.80,
              }}
              contentContainerStyle={{
                paddingVertical: '5%',
              }}
              showsVerticalScrollIndicator={false}
              bounces={false}
              showsHorizontalScrollIndicator={false}>
      <TouchableOpacity>
        <Text
          style={{
            backgroundColor: '#00E556',
            color: 'white',
            textAlign: 'center',
            height: 40,
            width: 230,
            padding: 10,
            marginTop: 40,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius:5
          }}>
          + Add New Account
        </Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Topup')} style={{   shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 20, 
    shadowRadius: 10, elevation: 2, }}>
          <View
            style={{
              backgroundColor: '#FCEDE6',
              padding: 5,
              marginTop: 30,
              marginLeft: 20,
              width: 160,
              height: 120,
            }}>
            <Image
              style={{
                height: 40,
                width: 40,
                marginLeft: '9%',
                marginTop: 40,
                tintColor:'#EB6725'
              }}
              source={require('../assets/dollar.png')}
            />
           
            <Text style={{marginLeft: 70, marginTop: -40}}>
              Prepaid{'\n'} Top Up
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
        
        onPress={()=>navigation.navigate('Paybill')}style={{   shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 20, 
    shadowRadius: 10, elevation: 2, }}>
          <View
            style={{
              backgroundColor: '#EDE7F1',
              padding: 5,
              marginTop: 30,
              marginLeft: 30,
              width: 160,
              height: 120,
            }}>
           <Image
              style={{
                height: 40,
                width: 40,
                marginLeft: '9%',
                marginTop: 35,
                tintColor:'#632F89'
              }}
              source={require('../assets/dollar.png')}
            />
           
            <Text style={{marginLeft: 70,marginTop: -30}}>Pay Bills</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Mycards')} style={{   shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 20, 
    shadowRadius: 10, }}>
          <View
            style={{
              backgroundColor: '#FEFCE8',
              padding: 5,
              marginTop: 30,
              marginLeft: 20,
              width: 160,
              height: 120,
            }}>
            <Image
              style={{
                height: 40,
                width: 40,
                marginLeft: '9%',
                marginTop: 35,
                tintColor:'#F7E921'
              }}
              source={require('../assets/dollar.png')}
            />
            <Text style={{marginLeft: 70, marginTop: -32}}>My Cards</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('CardDetails')}style={{   shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 20, 
    shadowRadius: 10, }}>
          <View
            style={{
              backgroundColor: '#ECF6EA',
              padding: 5,
              marginTop: 30,
              marginLeft: 30,
              width: 160,
              height: 120,
            }}>
            <Image
              style={{
                height: 40,
                width: 40,
                marginLeft: '9%',
                marginTop: 35,
                tintColor:'#5CB24C'
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
              backgroundColor: '#5CB24C',
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
                tintColor:'#575757'
              }}
              source={require('../assets/dollar.png')}
            />
            <Text style={{marginLeft: 70, marginTop: -30}}>Quick Codes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#632F89',
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
        <Text style={{marginTop: 20,color:'green' ,fontWeight: 'bold', fontSize: 20}}>
          {' '}
          bMobile
        </Text>
      </View>
      
          <View style={{flexDirection:'row'}}>
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
