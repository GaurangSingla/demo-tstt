import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
const Paymentsuccess = ({navigation}) => {
  const storeData = useSelector(state => state
  );

  return (
    <SafeAreaView>
      <View
        style={{backgroundColor: 'lightgrey', width: '100%', height: '100%'}}>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/48/null/share.png',
            }}
            style={{
              height: 40,
              width: 40,
              alignSelf: 'flex-end',
              marginRight: 20,
              marginBottom:5
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: 'white',
            width: '95%',
            // height: '78%',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 20,
            flex: 1,
          }}>
          <Image
            style={{
              height: 80,
              width: 80,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 10,
            }}
            source={require('../assets/Confirmation_Tick.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              color: '#00E556',
              fontSize: 23,
              fontWeight: '490',
            }}>
            Payment {storeData.data.status}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#5D5D5D',
              fontSize: 22,
              fontWeight: '490',
            }}>
            TTD {storeData.data.amount}
            {'.00'}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'red',
              fontSize: 13,
              fontWeight: '490',
            }}>
            Your payment will be applied in 2 hours
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#5D5D5D',
              fontSize: 23,
              marginTop: 30,
            }}>
            Transaction Details
          </Text>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text
              style={{marginLeft: '8%', fontWeight: 'bold', color: '#AAAAAA'}}>
              Transaction ID
            </Text>
            <Text style={{marginLeft: '10%', fontWeight: 'bold'}}>
              {storeData.data.transactionNumber}
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 7}}>
            <Text
              style={{marginLeft: '8%', fontWeight: 'bold', color: '#AAAAAA'}}>
              Mobile Number
            </Text>
            <Text style={{marginLeft: '35%', fontWeight: 'bold'}}>
              {storeData.data.mobileNumber}
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 7}}>
            <Text
              style={{marginLeft: '8%', fontWeight: 'bold', color: '#AAAAAA'}}>
              Postpaid Account Number
            </Text>
            <Text style={{marginLeft: '23%', fontWeight: 'bold'}}>
              {storeData.data.accountNumber}
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 7}}>
            <Text
              style={{marginLeft: '8%', fontWeight: 'bold', color: '#AAAAAA'}}>
              Account Holder Name
            </Text>
            <Text style={{marginLeft: '32%', fontWeight: 'bold'}}>
              {storeData.data.accountName}
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 7}}>
            <Text
              style={{marginLeft: '8%', fontWeight: 'bold', color: '#AAAAAA'}}>
              Card Number
            </Text>
            <Text style={{marginLeft: '24%', fontWeight: 'bold'}}>
              {storeData.data.cardNumber}
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 7}}>
            <Text
              style={{marginLeft: '8%', fontWeight: 'bold', color: '#AAAAAA'}}>
              Payment Amount
            </Text>
            <Text style={{marginLeft: '36%', fontWeight: 'bold'}}>
              TTD 50.00
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 7}}>
            <Text
              style={{marginLeft: '8%', fontWeight: 'bold', color: '#AAAAAA'}}>
              Convenience Fees
            </Text>
            <Text style={{marginLeft: '37%', fontWeight: 'bold'}}>
              TTD 0.00
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 7}}>
            <Text
              style={{marginLeft: '8%', fontWeight: 'bold', color: '#AAAAAA'}}>
              Total Amount Paid**
            </Text>
            <Text style={{marginLeft: '29%', fontWeight: 'bold'}}>
              TTD {storeData.data.totalAmount}
              {'.00'}
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 7}}>
            <Text
              style={{marginLeft: '8%', fontWeight: 'bold', color: '#AAAAAA'}}>
              Transaction Date & Time
            </Text>
            <Text style={{marginLeft: '6%', fontWeight: 'bold'}}>
              {storeData.data.transactionDateTime}
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 7}}>
            <Text
              style={{marginLeft: '8%', fontWeight: 'bold', color: '#AAAAAA'}}>
              Status
            </Text>
            <Text style={{marginLeft: '51%', fontWeight: 'bold'}}>
              {storeData.data.status}
            </Text>
          </View>

          <Text style={{textAlign: 'center', color: '#AAAAAA', marginTop: 6}}>
            **Transactions may be subjected to additional Bank Charges
          </Text>

          <Image
            style={{
              height: 55,
              width: 160,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
            }}
            source={require('../assets/toplogo.jpeg')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CardDetails')}
            style={{
              backgroundColor: '#FFFFFF',
              height: 60,
              width: '43%',
              borderColor: '#00E556',
              borderWidth: 2,
              borderRadius: 15,
            }}>
            <Text
              style={{
                padding: 17,
                fontSize: 17,
                marginLeft: 'auto',
                marginRight: 'auto',
                fontWeight: 'bold',
                color: '#00E556',
              }}>
              New Payment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              backgroundColor: '#00E556',
              height: 60,
              width: '43%',
              marginLeft: 15,
              borderRadius: 15,
            }}>
            <Text
              style={{
                padding: 17,
                fontSize: 19,
                marginLeft: 'auto',
                marginRight: 'auto',
                fontWeight: 'bold',
                color: '#2E2F2F',
              }}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Paymentsuccess;
