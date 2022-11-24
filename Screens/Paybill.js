import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import axios from 'axios';
import {data} from './data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PaymentService from '../Services.js/PaybillService';
import {
  setItem,
  getItem,
  multiRemove,
  getAllKeys,
} from '../utils/StorageHandling';
import {
  
  ASYNC_KEY
} from '../utils/string';
const Paybill = ({navigation}) => {
  const [data, setData] = useState([]);
  const [savenumber, setSaveNumber] = useState('');
 
  const [renderCards, setRenderCards] = useState(false); 
  const [message,setMessage]=useState('');
 
 async function hitApi() {
    try { 
      const authToken = await getItem(ASYNC_KEY.auth);
      const header = {
       
        headers: {
          Authorization: authToken,
        },
        params: {
          mobileNumber:"1868"+savenumber,
           
        },
      };
      console.log('header ===== ', header);
      const response = await PaymentService. billPayGet(header);
      console.log(
        '==========> billpay response',
        JSON.stringify(response.data),
      );
      if (response.data.success) {
        console.log(
          '==========> billpay responseId',
          response.data.result.requestId,
        );
        setData(response.data.result);
     
      
        setRenderCards(true);
      } else {
        setRenderCards(false); 
        
        setMessage(response.data.message);
      
     
   
      
  }}catch( error){
    Alert.alert("invalid number")
  }}
  return (
    
      <View
        style={{
          backgroundColor: '#F4F4F4',
      
          borderColor: 'grey',
        }}>
        <Text
          style={{
            color: '#4D4848',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 8,
            fontSize: 25,
            fontWeight: 'bold',
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
              borderWidth: 2,
              borderColor: '#F4F4F4',
              height: 45,

              top: 10,
            }}
            placeholder="Enter Name or Number"
            onChangeText={savenumber => setSaveNumber(savenumber)}
            defaultValue={savenumber}
            placeholderTextColor="#989898"
            maxLength={11}
          />

          <View
            style={{marginLeft: 0, alignSelf: 'flex-end', top: -20, right: 30}}>
            <TouchableOpacity onPress={()=>{hitApi(),console.log("jj")}}>
              <MaterialCommunityIcons name="arrow-right" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        {renderCards ? (
          <>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                position: 'relative',
                width: '92%',
                height: 240,
                marginLeft: 12,
                marginTop: 18,
                borderRadius: 15,
              }}>
              <Text
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 15,
                  color: '#4D4848',
                  fontSize: 20,
                  marginBottom: 15,
                }}>
                Bill Payment
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginLeft: 11, color: '#9B9B9B'}}>
                  Account Holder Name
                </Text>
                <Text style={{marginLeft: 90, color: '#9B9B9B'}}>
                  Account Number
                </Text>
              </View>

              {data? (
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{marginLeft: 25, fontSize: 19, color: '#4D4848'}}>
                    {data.accountName}
                  </Text>
                  <Text
                    style={{marginLeft: 130, fontSize: 19, color: '#4D4848'}}>
                    {data.mobileNumber}
                  </Text>
                </View>
              ) : Alert.alert(message)}

              <View style={{flexDirection: 'row'}}>
                <Text style={{marginTop: 15, marginLeft: 12, color: '#9B9B9B'}}>
                  Account Type
                </Text>
                <Text
                  style={{marginTop: 15, marginLeft: 195, color: '#9B9B9B'}}>
                  Your Bill
                </Text>
              </View>

              {data? (
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{marginLeft: 15, fontSize: 19, color: '#4D4848'}}>
                    Post Paid
                  </Text>
                  <Text
                    style={{marginLeft: 170, fontSize: 19, color: '#4D4848'}}>
                    {'$'}
                    {data.dueAmount}{' '}
                  </Text>
                </View>
              ) : Alert.alert(message)}
              <TouchableOpacity>
                <View
                  style={{
                    marginTop: 25,
                    backgroundColor: '#00E556',
                    height: 40,
                    width: '80%',
                    padding: 10,
                    alignItems: 'center',
                    marginLeft: 35,
                    borderRadius: 7,
                  }}>
                  {data  ? (
                    <Text style={{color: '#2E2F2F', fontWeight: 'bold'}}>
                      {'Pay'} {'$'}
                      {data.dueAmount}
                    </Text>
                  ) :  Alert.alert(message)}
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 16,
                position: 'relative',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: 'white',
                height: 190,
                width: '92%',
              }}>
              <Text
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 10,
                  color: '#4D4848',
                }}>
                Pay Partial Ammount
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
                placeholder="Enter Amount"
                placeholderTextColor="#989898"
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('CardDetails')}>
                <View
                  style={{
                    marginTop: 25,
                    backgroundColor: '#00E556',
                    height: 40,
                    width: '80%',
                    padding: 10,
                    fontSize: 15,
                    color: '#2E2F2F',
                    fontWeight: 'bold',
                    alignItems: 'center',
                    marginLeft: 35,
                    borderRadius: 7,
                  }}>
                  <Text style={{color: '#2E2F2F', fontWeight: 'bold'}}>
                    Proceed
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        ) : null}
      </View>
    )
  
};

export default Paybill;
