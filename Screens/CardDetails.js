import {View, Text, TouchableOpacity, Image, ScrollView,FlatList, Pressable} from 'react-native';
import React, { useEffect, useState } from 'react';
import {TextInput} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';
import PaymentService from '../Services.js/getCardsService';
import {useIsFocused} from '@react-navigation/native';

import {

  ASYNC_KEY,

} from '../utils/string';
import {
  setItem,
  getItem,
} from '../utils/StorageHandling';
 

const CardDetails = ({navigation}) => {
  const [data,setData]=useState([]);
  const [ HolderName,setHolderName]=useState('');
  const [number,setNumber]=useState('');
  const [expirydate,setExpiryDate]=useState('');
  const [checked,setChecked]=useState(false);
  const [cardData,setCardData]=useState([]);
  async function fetchCardsData() {
    
   console.log('fetch cards api hit ===== ');
   // console.log("enter phone  ===  ",name);
   try {
     const authToken = await getItem(ASYNC_KEY.auth);
     const header = {
       headers: {
         Authorization: authToken,
       },
     };
     console.log('header',header)
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
   }
 }
 
 function setCard(item) {
  console.log('image',item)
  switch (item.cardType) {
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



function renderItemname(item, index) {
  
  let formattedDate = item.expiryDate;
  formattedDate = formattedDate.slice(0, 2) + '/' + formattedDate.slice(2);
  
  return (
   <View style={{flex:1,backgroundColor:'white',paddingVertical:20,width:"90%",alignSelf:'center',borderRadius:10}}>
     <View style={{flex:1,backgroundColor:'lightgrey',width:'90%',alignSelf:"center",padding:10,borderRadius:15,justifyContent:'center'}}>
    <View style={{flexDirection:'row'}}>
      <Image style={{height:50,width:50,resizeMode:'contain'}} source={setCard(item)}  />
      <View style={{flexDirection:'column',alignItems:'center',marginHorizontal:20,top:5}}>
        <Text>{item.cardHolderName}</Text>
        <Text>{formattedDate}</Text>
      </View>
      <Text style={{alignContent:'flex-end',top:10}}>
        {item.cardNumber}
      </Text>
      <View style={{bottom:5,right:5}}>
      <CheckBox 
     checked={checked}
     checkedColor={'green'}
    
     onPress={()=>setChecked(!checked)} >
         
     </CheckBox >
   
      </View>
      </View>
     {checked? <View style={{flexDirection:"row"}}>
       <View> 
        <Text style={{fontWeight:'500',color:'grey'}}>
          Billing Address
        </Text>
        <Text>
          {item.billingAddress.street}{', '}{item.billingAddress.city}
        </Text>
        <Text>
          {item.billingAddress.country}{', '}{item.billingAddress.postalCode}
        </Text>
        </View>
        <View style={{left:50}}>
            <TextInput
        placeholder="CVV*">
     </TextInput>
        </View></View>:null}

    </View></View>
    
  )}
  return (
    <><ScrollView>
      <ScrollView>
        <View>



          <View
          >


            <FlatList
              style={{ top: 15 }}
              data={data}
              renderItem={({ item, index }) => renderItemname(item, index)}
              keyExtractor={(item, index) => index} />



          </View>

          <Text
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 40,
              marginBottom: 20,
              color: '#989898',
            }}>
            Or
          </Text>

          <View
            style={{ backgroundColor: 'white', height: '80%', width: '90%', marginLeft: 20, padding: 10, borderRadius: 10 }}>
            <Text style={{ color: '#3E3E3E', alignSelf: 'center', paddingVertical: 5, fontSize: 15, fontWeight: '600' }}>Add New Card</Text>
            <Text style={{ color: 'grey', left: 20, top: 15 }}>Card Details</Text>
            <TextInput
              style={{
                width: '90%',
                marginTop: 20,
                marginLeft: 15,
                borderRadius: 10,
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: '#F4F4F4',
                height: 45
              }}
              placeholder='Cardholder Name*'
              onChangeText={HolderName => setHolderName(HolderName)}
              defaultValue={HolderName}
              placeholderTextColor='#989898' />
            <TextInput
              style={{
                width: '90%',
                marginTop: 20,
                marginLeft: 15,
                borderRadius: 10,
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: '#F4F4F4',
                height: 45
              }}
              placeholder='Card Number*'
              placeholderTextColor='#989898'
              onChangeText={number => setNumber(number)}
              defaultValue={number} />
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={{
                  marginTop: 20,
                  marginLeft: 15,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  borderWidth: 2,
                  borderColor: '#F4F4F4',
                  height: 45
                }}
                placeholder='month*'
                placeholderTextColor='#989898'
                onChangeText={expirydate => setExpiryDate(expirydate)}
                defaultValue={expirydate} />
              <Text style={{ top: 25, fontSize: 30, color: 'grey' }}> {" /"}</Text>
              <TextInput
                style={{
                  marginTop: 20,
                  marginLeft: 15,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  borderWidth: 2,
                  borderColor: '#F4F4F4',
                  height: 45
                }}
                placeholder='date*'
                placeholderTextColor='#989898'
                onChangeText={expirydate => setExpiryDate(expirydate)}
                defaultValue={expirydate} />
              <TextInput
                style={{
                  width: 90,
                  marginTop: 20,
                  marginLeft: 15,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  borderWidth: 2,
                  borderColor: '#F4F4F4',
                  height: 45
                }}
                placeholder='CVV*'
                placeholderTextColor='#989898'
                onChangeText={expirydate => setExpiryDate(expirydate)}
                defaultValue={expirydate} />
            </View>
            <Text style={{ top: 14, color: 'grey', left: 20 }}>Billing Address</Text>
            <TextInput
              style={{
                width: '90%',
                marginTop: 20,
                marginLeft: 15,
                borderRadius: 10,
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: '#F4F4F4',
                height: 45
              }}
              placeholder='Street*'
              placeholderTextColor='#989898'
              onChangeText={number => setNumber(number)}
              defaultValue={number} />
            <TextInput
              style={{
                width: '90%',
                marginTop: 20,
                marginLeft: 15,
                borderRadius: 10,
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: '#F4F4F4',
                height: 45
              }}
              placeholder='City*'
              placeholderTextColor='#989898'
              onChangeText={number => setNumber(number)}
              defaultValue={number} />
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={{
                  width: '42%',
                  marginTop: 20,
                  marginLeft: 15,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  borderWidth: 2,
                  borderColor: '#F4F4F4',
                  height: 45
                }}
                placeholder='Country*'
                placeholderTextColor='#989898'
                onChangeText={number => setNumber(number)}
                defaultValue={number} />
              <TextInput
                style={{
                  width: '42%',
                  marginTop: 20,
                  marginLeft: 15,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  borderWidth: 2,
                  borderColor: '#F4F4F4',
                  height: 45
                }}
                placeholder='Zip code*'
                placeholderTextColor='#989898'
                onChangeText={number => setNumber(number)}
                defaultValue={number} />
            </View>
            <View style={{marginVertical:10}}>
          <CheckBox  
  
      title={<Text style={{marginLeft:5,color:'black'}}>Securely store card for next time</Text>}
  
        checked={checked}
        checkedColor={'green'}
         onPress={()=>setChecked(!checked)}>
      
  </CheckBox>
  <Text style={{alignSelf:'center',color:'blue',marginVertical:5}}>Terms and Conditions</Text>
          </View>

          </View></View>
      </ScrollView>
    </ScrollView><View style={{  alignContent: 'center', backgroundColor: 'white', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignSelf: 'center', right: 30 }}>
          <TouchableOpacity style={{ backgroundColor: 'grey', height: 50, width: 150, marginTop: 10, borderRadius: 10, right: -20 }}>
            <Text style={{ alignSelf: 'center', color: 'black', fontSize: 20, padding: 10 }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={fetchCardsData} style={{ backgroundColor: 'green', height: 50, width: 150, left: 34, marginTop: 10, borderRadius: 10, padding: 10 }}>
            <Text style={{ alignSelf: 'center', color: 'black', fontSize: 20 }}>
              Confirm
            </Text>
          </TouchableOpacity></View>
          
          
      </View></>
     
     
  );
};

export default CardDetails;
