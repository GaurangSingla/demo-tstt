import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {useState, useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
import Loader from '../ActivityIndicator/Activityindicator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {ScrollView} from 'react-native-gesture-handler';
const Topup = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mbl, setMbl] = React.useState(''); //18684860504
  // const [amount, setAmount] = useState();//for validation
  const phoneInput = useRef(null);
  const [amt, setAmt] = useState(); //for values printing
  const [usrNameValid, setUsrNameValid] = useState(true);
  const [loadervisible, setLoaderVisible] = useState(false);
  const [AmountValid, setAmountValid] = useState(true);
  function amount(num) {
    setAmt(num);
    setAmountValid(true);
    // console.log('amount print', num);
  }
  function handleErrorField() {
    const phonevalid = validatePhone();
    const amountvalid = validateAmmount();
    try {
      setLoaderVisible(true);
      if (phonevalid && amountvalid) {
        navigation.navigate('CardDetails', {
          mobile: mbl,
          amount: amt,
          label: 'TopUp',
          // accountNumber:accountNumber ? accountNumber : name,
        });
      }
    } finally {
      setLoaderVisible(false);
    }
  }
  function validatePhone() {
    if (!phoneNumber || phoneNumber == '') {
      setUsrNameValid(false);
      return false;
    }
    return true;
  }
  function validateAmmount() {
    if (!amt || setAmt == '') {
      setAmountValid(false);
      return false;
    }
    return true;
  }
  return (
    <SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Loader animating={loadervisible} />
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              top: 20,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Recharge
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 150,
              borderRadius: 20,
              top: 30,
              width: 350,
              alignSelf: 'center',
            }}>
            <Text style={{padding: 15, fontSize: 15, color: 'black'}}>
              1.Choose Contact
            </Text>
            {/* <MaterialCommunityIcons style={{left:235,fontSize:40,alignSelf:'center'}} name="bell" size={15} /> */}
            <PhoneInput
              // style={{bottom: '50%'}}
              defaultValue={phoneNumber}
              defaultCode="IN"
              // defaultCode="DM"
              layout="first"
              onChangeText={phoneNumber => {
                setPhoneNumber(phoneNumber);
                setUsrNameValid(true);
              }}
              // onChangeFormattedText={v => setValue(v)}
              placeholder={' Mobile Number '}
              // placeholderTextColor={}

              withShadow
              containerStyle={{
                borderRadius: 10,
                width: '90%',
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: 'white',
                bottom: 2,
                margin: 10,
                alignSelf: 'center',
                bottom: 10,
                position: 'relative',
              }}
              textInputStyle={{height: 38}}
              textContainerStyle={{backgroundColor: 'white'}}
            />
            <Text
              style={{
                color: 'red',
                marginLeft: 20,
                position: 'absolute',
                bottom: '5%',
                flex: 1,
              }}>
              {!usrNameValid ? 'Phone Number is required' : ' '}
            </Text>
          </View>

          <View style={{flexDirection: 'row', flex: 1, marginTop: 60}}>
            <TouchableOpacity
              style={{
                width: '40%',
                height: 50,
                backgroundColor: 'white',
                marginLeft: 28,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: 15,
                  color: '#4D4848',
                  fontWeight: 'bold',
                }}>
                Top Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '40%',
                height: 50,
                backgroundColor: 'white',
                marginLeft: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: 15,
                  color: '#4D4848',
                  fontWeight: 'bold',
                }}>
                Bundle
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              height: 310,
              borderRadius: 20,
              marginTop: 20,
              width: 350,
              alignSelf: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <Text style={{color: 'black', padding: 15, fontSize: 15}}>
              2.Enter Amount
            </Text>
            <TextInput
              onChangeText={amt => {
                setAmt(amt);
                setAmountValid(true);
              }}
              style={{
                backgroundColor: 'white',
                width: 302,
                borderWidth: 1,
                borderColor: 'lightgrey',
                alignSelf: 'center',
                height: 50,
              }}
              placeholder={'Amount ($) *'}
              value={amt ? amt.toString() : amt}
              placeholderTextColor={'black'}></TextInput>
            <Text
              style={{
                color: 'red',
                left: '8%',
                bottom: '60%',
                flex: 1,
                position: 'absolute',
              }}>
              {!AmountValid ? 'Amount is required' : ' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 25,
              }}>
              <TouchableOpacity
                onPress={() => amount(20)}
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  height: 50,
                  alignSelf: 'center',
                  width: 90,
                  borderRadius: 10,
                  backgroundColor: '#EBFAF1',
                  padding: 10,
                }}>
                <Text
                  style={{color: '#09B74B', fontSize: 18, alignSelf: 'center'}}>
                  $20
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => amount(30)}
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  height: 50,
                  alignSelf: 'center',
                  width: 90,
                  borderRadius: 10,
                  backgroundColor: '#EBFAF1',
                  padding: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{color: '#09B74B', fontSize: 18, alignSelf: 'center'}}>
                  $30
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => amount(40)}
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  height: 50,
                  alignSelf: 'center',
                  width: 90,
                  borderRadius: 10,
                  backgroundColor: '#EBFAF1',
                  padding: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{color: '#09B74B', fontSize: 18, alignSelf: 'center'}}>
                  $40
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                onPress={() => amount(50)}
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  height: 50,
                  alignSelf: 'center',
                  width: 90,
                  borderRadius: 10,
                  backgroundColor: '#EBFAF1',
                  padding: 10,
                }}>
                <Text
                  style={{color: '#09B74B', fontSize: 18, alignSelf: 'center'}}>
                  $50
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => amount(100)}
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  height: 50,
                  alignSelf: 'center',
                  width: 90,
                  borderRadius: 10,
                  backgroundColor: '#EBFAF1',
                  padding: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{color: '#09B74B', fontSize: 18, alignSelf: 'center'}}>
                  $100
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => amount(150)}
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  height: 50,
                  alignSelf: 'center',
                  width: 90,
                  borderRadius: 10,
                  backgroundColor: '#EBFAF1',
                  padding: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{color: '#09B74B', fontSize: 18, alignSelf: 'center'}}>
                  $150
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                onPress={() => amount(200)}
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  height: 50,
                  alignSelf: 'center',
                  width: 90,
                  borderRadius: 10,
                  backgroundColor: '#EBFAF1',
                  padding: 10,
                }}>
                <Text
                  style={{color: '#09B74B', fontSize: 18, alignSelf: 'center'}}>
                  $200
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => amount(350)}
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  height: 50,
                  alignSelf: 'center',
                  width: 90,
                  borderRadius: 10,
                  backgroundColor: '#EBFAF1',
                  padding: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{color: '#09B74B', fontSize: 18, alignSelf: 'center'}}>
                  $350
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => amount(500)}
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  height: 50,
                  alignSelf: 'center',
                  width: 90,
                  borderRadius: 10,
                  backgroundColor: '#EBFAF1',
                  padding: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{color: '#09B74B', fontSize: 18, alignSelf: 'center'}}>
                  $500
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginBottom: 10,
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                setAmt('');
              }}
              style={{
                borderWidth: 2,
                borderColor: 'white',
                height: 62,
                alignSelf: 'center',
                backgroundColor: '#00000029',
                width: 167,
                borderRadius: 15,
                padding: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  alignSelf: 'center',
                  justifySelf: 'center',
                  fontSize: 20,
                  marginTop: 6,
                  fontWeight: 'bold',
                }}>
                Reset
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleErrorField();
                // navigation.navigate('CardDetails', {
                //   mobile: mbl,
                //   amount: amt,
                //   label: 'TopUp',
                //   // accountNumber:accountNumber ? accountNumber : name,
                // });
              }}
              style={{
                borderWidth: 2,
                borderColor: 'white',
                height: 65,
                alignSelf: 'center',
                width: 170,
                borderRadius: 15,
                backgroundColor: '#00E556',
                padding: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  alignSelf: 'center',
                  justifySelf: 'center',
                  fontSize: 20,
                  marginTop: 6,
                  fontWeight: 'bold',
                }}>
                Proceed
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Topup;
