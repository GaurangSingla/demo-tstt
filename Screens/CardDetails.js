import {View, Text, TouchableOpacity, Image, ScrollView,FlatList, Pressable} from 'react-native';
import React, { useEffect, useState } from 'react';
import {TextInput} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import PaymentService from '../Services.js/getCardsService';
import {useIsFocused} from '@react-navigation/native';
async function fetchCardsData() {
  const [data,setData]=useState('');
  console.log('fetch cards api hit ===== ');
  // console.log("enter phone  ===  ",name);
  try {
    const header = {
      headers: {
        Authorization: authToken,
      },
    };
    const response = await PaymentService.getCards(header);
    console.log('fetch card respones == ', JSON.stringify(response.data));
    if (response.data.success == true) {
      setData(response.data.result.cards);
    } else {
      setAlertBody({
        dialogBoxType: 'Error',
        headerText: 'Error',
        messageText: response.data.message,
        handlerFunction: setConfirmAlertDialog(false),
      });
      setshowAlertDialog(true);
    }
  } catch (e) {
    if (
      e.response &&
      e.response.status &&
      (e.response.status == 401 ||
        e.response.status == 402 ||
        e.response.status == 406)
    ) {
      console.log('==========> catch 401');
    
      //  handlerFunction("navigation");
    } else {
      console.log('==========> catch 401 else');

   
    }

    console.log('catch fetchcard alert');
  } finally {
 
  }
}

const CardDetails = ({navigation}) => {
  const [data,setData]=useState([]);
  const [ HolderName,setHolderName]=useState('');
  const [number,setNumber]=useState('');
  const [expirydate,setExpiryDate]=useState('');
  const saveCard=() => {
 
   axios({
     method: 'POST',
     url: 'https://dev-cim-api.tstt.co.tt/api/consumer/user/card',
     headers: {
       Accept: 'application/json',
       'X-CSRF-TOKEN': '',
       Authorization:
         'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiODI5NTlhNjM5YWFjZjgxNTM4ZDViOThkYmUxNjQ5MTEyN2JkZGQwNmI1NDdkNzQ0YzAwZjQxNmNmNDI1YmUzOWYyNjcwNWM2MjE0ZDc1NjQiLCJpYXQiOjE2NzA0MTM4NTUuNjMxMDA1LCJuYmYiOjE2NzA0MTM4NTUuNjMxMDA3LCJleHAiOjE3MDE5NDk4NTUuNjI4MTgzLCJzdWIiOiIzMiIsInNjb3BlcyI6WyJhZG1pbiJdfQ.QInOUXUC4A3tbFQ5v7aDqYFup8OoPv-hO7guGo7mSBTG2N_dMVXMWcwG586Ijg9tH6xdKJYBnnM8zQl4hc-BC4D01szZNh9xeioTw5H3bign6Witcj4YKgTuC5-vz8n7F-OylzGZrccABNpeyAs_rIv2wr6ZW_MJ2e3hMOYfm0nTPwPPwzE7CrDXnZdXPSVBjmexacRjUmiO0T_CWCRjkevFMSY0gx2jzyg8gk_8w1huZ0VQh27KCs-dSPJtQ1oCGLQg0LoyYKc_WtSknOzudDPM5zUiErOovwFKp7W5xa9QS4UTm2JhYYNN272hszqd_SUmjIsWf5545A6NFpXlzKG2icnC-X_46DL5VVSR6t97n3hOY0Y1WCl2KHKPr51R9DbhIDTmeChzwKo9Oqy7_6c4VqjWiptuAdA0i7I469H5eMnHMvANX_imP61_vuQNig_1amvdxy3LMHZsYi6YTJ_6R4JTLzPt4A_aeeKkb0zHx4i_3CSlceTvxT2Fvfe7jNpJsWd67nT5LrnAn25NL9dM050yiXgGH-UEeYxzfraCiXg8yz3SwrRp8pZ9iKcKQO5-50v6pFPdva3yw3jki_sCRqH8J4w_fo8XV52U_u_m60A6WSR2ALs_03OuaUv6amD1CvkoWT9IbVYJZBPQHte4yJgp-T2a0AQUFXYGuVE',
         "Content-Type": "application/json",
 
     },
     params: {
       cardHolderName:HolderName ,
       cardNumber: number,
       expiryDate:expirydate ,
     },
   })
   .then(function (response) {
     console.log("response", JSON.stringify(response.data))
      setData(response.data.result);
     
 
   })
   .catch(function (error) {
     console.log("error", error)
   })
   
 }
 function setCardImage(cardNumber) {
  switch (cardImages(cardNumber)) {
    case 'visa':
      return require('../src/assets/visa_card.png');
    case 'master':
      return require('../src/assets/master_card.png');
    case 'amex':
      return require('../src/assets/AmEx.png');
    default:
      return require('../src/assets/Creditdebit_card.png');
  }
}

function setCard(cardNumber) {
  switch (cardNumber) {
    case 'VISA':
      return require('../src/assets/visa_card.png');
    case 'MASTER':
      return require('../src/assets/master_card.png');
    case 'AMEX':
      return require('../src/assets/AmEx.png');
    default:
      return require('../src/assets/Creditdebit_card.png');
  }
} 
  return (
    // <View style={{backgroundColor: '#F4F4F4'}}>
        <SafeAreaView style={{flex:1}}>
      
     

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
          height: '45%',
          width: '90%',
          marginLeft: 20,
          marginTop: 10,
        }}>
      <ScrollView>
        <Pressable>
         <FlatList
         >
          
         </FlatList>
        </Pressable>
      </ScrollView>

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
        style={{backgroundColor: 'white', height: '50%', width: '90%',marginLeft:20}}>
         <Text style={{color:'#3E3E3E',marginLeft:20,marginLeft:10,padding:5,fontSize:15}}>Add New Card</Text>
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
  placeholder='Cardholder Name'
  onChangeText={HolderName => setHolderName(HolderName)}
            defaultValue={HolderName}
  placeholderTextColor='#989898'
  />
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
  placeholder='Card Number'
  placeholderTextColor='#989898'
  onChangeText={number => setNumber(number)}
  defaultValue={number}
  />
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
  placeholder='expiry date'
  placeholderTextColor='#989898'
  onChangeText={expirydate=> setExpiryDate(expirydate)}
  defaultValue={expirydate}
 
  />
  <View style={{flexDirection:'row'}}>
  <TouchableOpacity style={{backgroundColor:'grey',height:50,width:150,marginTop:10,borderRadius:10,right:-20}}>
    <Text style={{alignSelf:'center',color:'black',fontSize:20,padding:10}}>
      Cancel
    </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={saveCard} style={{backgroundColor:'green',height:50,width:150,left:34,marginTop:10,borderRadius:10,padding:10}}>
    <Text style={{alignSelf:'center',color:'black',fontSize:20}}>
      Confirm
    </Text>
  </TouchableOpacity></View>

         </View>
    
      </SafeAreaView>
  
  );
};

export default CardDetails;
