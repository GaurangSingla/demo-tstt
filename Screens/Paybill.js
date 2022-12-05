import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const Paybill = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#F4F4F4'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
        onPress={()=> navigation.goBack()}
        >
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
      <Text
        style={{
          color: '#4D4848',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 8,
          fontSize: 25,
          fontWeight:'bold'
        }}>
        Bill Pay
      </Text>

      <View>
      <TextInput
  style={{
    width: '90%',
    marginTop: 20,
    marginLeft: 15,
    backgroundColor: '#F4F4F4',
    borderWidth:2,
    borderColor:'#F4F4F4',
    height:45,
    top:10
  }}
  placeholder='Enter Name or Number'
  placeholderTextColor='#989898'
  />
      </View >
      <View style={{backgroundColor:'#FFFFFF',position:'relative',width:'92%',height:240,marginLeft:12,marginTop:18,borderRadius:15}}>
        <Text style={{marginLeft:'auto',marginRight:'auto',marginTop:15,color:'#4D4848',fontSize:20,marginBottom:15}}>Bill Payment</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{marginLeft:15,color:'#9B9B9B'}}>Account Holder Name</Text>
          <Text style={{marginLeft:90,color:'#9B9B9B'}}>Account Number</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style={{marginLeft:15,fontSize:19,color:'#4D4848'}}>Loid Forger</Text>
          <Text style={{marginLeft:130,fontSize:19,color:'#4D4848'}}>1234567890</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:15,marginLeft:15,color:'#9B9B9B'}}>Account Type</Text>
          <Text style={{marginTop:15,marginLeft:195,color:'#9B9B9B'}}>Your Bill</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style={{marginLeft:15,fontSize:19,color:'#4D4848'}}>Post Paid</Text>
          <Text style={{marginLeft:170,fontSize:19,color:'#4D4848'}}>$1000.00</Text>
        </View>
<TouchableOpacity>
        <View style={{marginTop:25,backgroundColor:'#00E556',height:40,width:'80%',padding:10,alignItems:'center',marginLeft:35,borderRadius:7}}>
          <Text style={{color:'#2E2F2F',fontWeight:'bold'}}>Pay $1000.00</Text>
        </View>
        </TouchableOpacity>
      </View>


      <View style={{marginTop:20,marginLeft:'auto',marginRight:'auto',borderColor:'white',borderRadius:20,backgroundColor:'white',height:30,width:30,padding:5,fontWeight:'bold',color:'#4D4848'}}>
        <Text>OR</Text>
      </View>


<View style={{marginTop:16,position:'relative',marginLeft:'auto',marginRight:'auto',backgroundColor:'white',height:190,width:'92%'}}>
  <Text style={{marginLeft:'auto',marginRight:'auto',marginTop:10,color:'#4D4848'}}>Pay Partial Ammount</Text>
  <TextInput
  style={{
    width: '90%',
    marginTop: 20,
    marginLeft: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth:2,
    borderColor:'#F4F4F4',
    height:45
  }}
  placeholder='Enter Amount'
  placeholderTextColor='#989898'
  />
  <TouchableOpacity onPress={()=>navigation.navigate('CardDetails')}>
        <View style={{marginTop:25,backgroundColor:'#00E556',height:40,width:'80%',padding:10,fontSize:15,color:'#2E2F2F',fontWeight:'bold',alignItems:'center',marginLeft:35,borderRadius:7}}>
          <Text style={{color:'#2E2F2F',fontWeight:'bold'}}>Proceed</Text>
        </View>
        </TouchableOpacity>
</View>
    </View>
  );
};

export default Paybill;
