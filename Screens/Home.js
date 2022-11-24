import {View, Text, Image, TouchableOpacity,Dimensions,ScrollView} from 'react-native';
import React from 'react';
import Paybill from './Paybill';
import Topup from './Topup';
import Mycards from './Mycards';
import Transaction from './Transaction';
const Home = ({navigation}) => { 
  const Icon=()=>{
    <svg id="Group_10575" data-name="Group 10575" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
  <circle id="Ellipse_47" data-name="Ellipse 47" cx="27" cy="27" r="27" fill="#fff"/>
  <circle id="Ellipse_798" data-name="Ellipse 798" cx="27" cy="27" r="27" fill="#632f89" opacity="0.15"/>
  <g id="noun-bill-4905109" transform="translate(16.395 13.503)">
    <path id="Path_5" data-name="Path 5" d="M299.428,106.493a2.408,2.408,0,0,0-1.928,2.361v.056a2.41,2.41,0,0,0,2.41,2.41h.993a.453.453,0,0,1,.453.453v0a.453.453,0,0,1-.453.453h-2.439a.964.964,0,1,0,0,1.928h.964v.482a.964.964,0,1,0,1.928,0v-.526a2.382,2.382,0,0,0,1.928-2.338v0a2.382,2.382,0,0,0-2.381-2.381h-.993a.48.48,0,0,1-.482-.482v-.056a.481.481,0,0,1,.482-.482h2.41a.964.964,0,1,0,0-1.928h-.964v-.482a.964.964,0,1,0-1.928,0Z" transform="translate(-289.787 -101.142)" fill="#632f89" fill-rule="evenodd"/>
    <path id="Path_6" data-name="Path 6" d="M178.71,37.41A2.41,2.41,0,0,0,176.3,35H159.91a2.41,2.41,0,0,0-2.41,2.41V59.585a2.41,2.41,0,0,0,2.41,2.41H176.3a2.41,2.41,0,0,0,2.41-2.41Zm-1.928,0V59.585a.482.482,0,0,1-.482.482H159.91a.482.482,0,0,1-.482-.482V37.41a.482.482,0,0,1,.482-.482H176.3a.482.482,0,0,1,.482.482Z" transform="translate(-157.5 -35)" fill="#632f89" fill-rule="evenodd"/>
    <path id="Path_7" data-name="Path 7" d="M228.467,334.428h11.569a.964.964,0,1,0,0-1.928H228.467a.964.964,0,1,0,0,1.928Z" transform="translate(-223.645 -316.11)" fill="#632f89" fill-rule="evenodd"/>
    <path id="Path_8" data-name="Path 8" d="M228.464,404.428h9.641a.964.964,0,0,0,0-1.928h-9.641a.964.964,0,0,0,0,1.928Z" transform="translate(-223.644 -382.254)" fill="#632f89" fill-rule="evenodd"/>
  </g>
</svg>

    }
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
        <TouchableOpacity onPress={()=>navigation.navigate('Transaction')}style={{   shadowColor: 'rgba(0,0,0, .4)', // IOS
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
                borderRadius:20
              }}
              source={require('../assets/Carhub.png')}
            />
            <Text style={{fontWeight:'bold',marginLeft:19,marginTop:10,textAlign:'center',height:30,width:160,padding:5,backgroundColor:'lightgreen'}}>CarHub</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
              style={{
                height: 140,
                width: 160,
                marginLeft: '4%',
                marginTop: 5,
                borderRadius:20
              }}
              source={require('../assets/bmobilsecurity.png')}
            />
            <Text style={{fontWeight:'bold',marginLeft:10,marginTop:10,textAlign:'center',height:30,width:160,padding:5,backgroundColor:'lightgreen'}}>CarHub</Text>
            </TouchableOpacity>
          </View>      
      </ScrollView>
    </View>
  )
};
export default Home;