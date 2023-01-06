import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonModal from '../Modal/Modal';
import {CheckBox} from 'react-native-elements';
import Loader from '../ActivityIndicator/Activityindicator';
import axios from 'axios';
import {api} from '../redux/actions/action';
import PaymentService from '../Services.js/getCardsService';
import {useIsFocused} from '@react-navigation/native';
import getCardsService from '../Services.js/getCardsService';
import {ASYNC_KEY} from '../utils/string';
import {setItem, getItem} from '../utils/StorageHandling';
import {RFValue} from 'react-native-responsive-fontsize';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const CardDetails = ({navigation, route}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch()
  useEffect(() => {
    if (isFocused) {
      fetchCardsData();
    }
  }, [isFocused]);
  const [data, setData] = useState([]);
  const [press, setPress] = useState(false);
  const [HolderName, setHolderName] = useState('');
  const [number, setNumber] = useState('');
  const [expirydate, setExpiryDate] = useState('');
  const [street, setStreet] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [checked1, setChecked1] = useState(false);
  const [selectedCardID, setSelectedCardID] = useState();
  const [cardData, setCardData] = useState([]);
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [holderNameValid, setHolderNameValid] = useState(true);
  const [numberValid, setNumberValid] = useState(true);
  const [loadervisible, setLoaderVisible] = useState(false);
  const [monthValid, setMonthValid] = useState(true);
  const [dateValid, setDateValid] = useState(true);
  const [cvvValid, setCvvValid] = useState(true);
  const [streetValid, setStreetValid] = useState(true);
  const [cityValid, setCityValid] = useState(true);
  const [countryValid, setCountryValid] = useState(true);
  const [zipCodeValid, setZipCodeValid] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [fetchdata, setFetchData] = useState();
  const [selectedCardData,setSelectedCardData]=useState();
  const [cardCvv, setCardCvv] = useState(true);
  const [text, setText] = useState('');
  const [press1,setPress1]=useState(false);
  const [alertBody, setAlertBody] = useState({
    dialogBoxType: '',
    headerText: '',
    messageText: '',
    navigateFunction: () => {},
  });
  function PayWithExistingCard() {
  
     console.log("label",route.params.label)
    if(route.params.label=="BillPay"){
        console.log('paybillwithexisting')

      setAlertBody({
        dialogBoxType: 'Paybill',
        headerText: 'Please Confirm',
        messageText: 'Are you sure you want Bill Pay on ' + route.params.number + ' ?',
        amount: route.params.amount,
        handlerFunction: () => {
          setModalVisible(false);
          BillPayApi()
        },
      });
      setModalVisible(true);
    }  else if(route.params.label=="TopUp"){
      setAlertBody({
        dialogBoxType: 'Paybill',
        headerText: 'Please Confirm',
        messageText: 'Are you sure you want Bill Pay on ' + route.params.number + ' ?',
        amount: route.params.amount,
        handlerFunction: () => {
          setModalVisible(false);
          TopUpApi()
        },
      });
      setModalVisible(true);

    }
  
  }
  function PayWithNewCard() {
    console.log('paybillwithnew')
    if(route.params.label=="BillPay"){
      setAlertBody({
        dialogBoxType: 'Paybill',
        headerText: 'Please Confirm',
        messageText: 'Are you sure you want Bill Pay on ' + route.params.number + ' ?',
        amount: route.params.amount,
        handlerFunction: () => {
          setModalVisible(false);
          BillPayApi()
        },
      });
      setModalVisible(true);
    }  else if(route.params.label=="TopUp"){
      setAlertBody({
        dialogBoxType: 'Paybill',
        headerText: 'Please Confirm',
        messageText: 'Are you sure you want Bill Pay on ' +route.params.number + ' ?',
        amount: route.params.amount,
        handlerFunction: () => {
          setModalVisible(false);
          TopUpApi()
        },
      });
      setModalVisible(true);

    }
  }
  function handleErrorField() {
    if (selectedCardID == null) {
      const holderValid = validateHolderName();
      const nValid = validateNunber();
      const mValid = validateMonth();
      const dValid = validateDate();
      const cvValid = validateCvv();
      const sValid = validateStreet();
      const cValid = validateCity();
      const countValid = validateCountry();
      const zipValid = validateZipCode();
      if (
        
        !holderValid &&
        !nValid &&
        !mValid &&
        !dValid &&
        !cvvValid &&
        !sValid &&
        !cValid &&
        !cvValid &&
        !countValid &&
        !zipValid 
        
      ) {
     
        PayWithNewCard();
      }
    } else {
   
      const cardcvv = CVVhandle();
      if (cardcvv) {
        
        PayWithExistingCard();
      }
    }
  }
  
  function CVVhandle() {
    if ((press && text == '') || !text) {
      setCardCvv(false);
      return false;
    }
    return true;
  }
  function validateHolderName() {
    if (!HolderName || HolderName == '') {
      setHolderNameValid(false);
      return false;
    }
    return true;
  }
  function validateNunber() {
    if (!number || number == '') {
      setNumberValid(false);
      return false;
    }
    return true;
  }
  function validateMonth() {
    if (!month || month == '') {
      setMonthValid(false);
      return false;
    }
    return true;
  }
  function validateDate() {
    if (!date || date == '') {
      setDateValid(false);
      return false;
    }
    return true;
  }
  function validateCvv() {
    if (!cvv || cvv == '') {
      setCvvValid(false);
      return false;
    }
    return true;
  }
  function validateStreet() {
    if (!street || street == '') {
      setStreetValid(false);
      return false;
    }
    return true;
  }
  function validateCity() {
    if (!city || city == '') {
      setCityValid(false);
      return false;
    }
    return true;
  }
  function validateCountry() {
    if (!country || country == '') {
      setCountryValid(false);
      return false;
    }
    return true;
  }
  function validateZipCode() {
    if (!zipCode || zipCode == '') {
      setZipCodeValid(false);
      return false;
    }
    return true;
  }
  async function fetchCardsData() {
    console.log('fetch cards api hit ===== ');
    // console.log("enter phone  ===  ",name);
    try {
      setLoaderVisible(true);
      const authToken = await getItem(ASYNC_KEY.auth);
      const header = {
        headers: {
          Authorization: authToken,
        },
      };
      console.log('header', header);
      const response = await PaymentService.getCards(header);
      // console.log('fetch card respones == ', JSON.stringify(response.data));

      if (response.data.success) {
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
      console.log('catch fetchcard alert');
    }
    finally {
      setLoaderVisible(false);
    }
  }

  async function TopUpApi() {
    console.log('==========> TopUpApi');
    let no = route.params.number;
    let expiry = month + date;
    console.log('expiry', expiry);
    try {
      setLoaderVisible(true);

      const authToken = await getItem(ASYNC_KEY.auth);
      const header = {
        headers: {
          Authorization: authToken,
        },
      };
      // console.log('My Api Data===>' + JSON.stringify(response));
      const args = {
        mobile: route.params.mobile,
        amount: route.params.amount,
       saveCard: text && !checked1 != null ? 'false' : 'true',
        cardId:  text!=null?selectedCardData.id:'0', 
        cardDetails: {
          cardCvv: text != null ? text : cvv,
          cardExpiryDate: text != null ? selectedCardData.expiryDate : expiry,
          cardNumber: text != null ? selectedCardData.cardNumber : number,
          cardHolderName: text != null ? selectedCardData.cardHolderName : HolderName,
        },
        billingAddress: {
          street: text != null ? selectedCardData.billingAddress.street : street,
          city: text != null ? selectedCardData.billingAddress.city : city,
          country: text != null ? selectedCardData.billingAddress.country : country,
          postalCode: text != null ? selectedCardData.billingAddress.postalCode : zipCode,
        },
      };
      // console.log('==========> TopUpApi args', JSON.stringify(args));

      const response = await getCardsService.topUp(args, header);
      // console.log(
      //   '==========> TopUpApi response',
      //   JSON.stringify(response.data),
      // );

      if (response.data.success) {
        console.log('==========> TopUpApi success response');
        await setItem(
          ASYNC_KEY.NotificationFlag,
          JSON.stringify(response.data.result.paymentResponse.hasNotification),
        );
        dispatch(api(response.data.result.paymentResponse))
       navigation.navigate('Paymentsuccess')
      } else {
        dispatch(api(response.data.result.paymentResponse))
        console.log('==========> TopUpApi false response');
        setAlertBody({
          dialogBoxType: 'Error',
          headerText: 'Error',
          messageText: response.data.message,
          handlerFunction: () => {
            setModalVisible(false);
          },
        });
        setModalVisible(true);
      }
    } catch (e) {
      console.log('error body :::::::::> ', '' + e);
      console.log('catch confirm alert');
    }
    finally {
      setLoaderVisible(false);
    }
  }
  
  async function BillPayApi() {
    console.log('==========> BillPayApi');

    try {
      setLoaderVisible(true);
      const authToken = await getItem(ASYNC_KEY.auth);
      const header = {
        headers: {
          Authorization: authToken,
        },
      };
      // console.log('My BillPay Api Data===>' + JSON.stringify(response));
      const args = {
        amount: route.params.amount,
        requestId: route.params.requestId,
        saveCard: text && !checked1 != null ? 'false' : 'true',
        cardId:  text!=null?selectedCardData.id:'0', 
        cardDetails: {
           cardCvv: text != null ? text : cvv,
          cardExpiryDate: text != null ? selectedCardData.expiryDate : expiry,
          cardNumber: text != null ? selectedCardData.cardNumber : number,
          cardHolderName: text != null ? selectedCardData.cardHolderName : HolderName,
        },
        billingAddress: {
          street: text != null ? selectedCardData.billingAddress.street : street,
          city: text != null ? selectedCardData.billingAddress.city : city,
          country: text != null ? selectedCardData.billingAddress.country : country,
          postalCode: text != null ? selectedCardData.billingAddress.postalCode : zipCode,
        },
      };
      // console.log('==========> BillPay args', JSON.stringify(args));

      const response = await getCardsService.billPay(args, header);
      // console.log(
      //   '==========> BillPay response',
      //   JSON.stringify(response.data),
      // );
        if (response.data.success) {
          console.log(
            '==========> BillPay success response',
            response.data.result.paymentResponse.hasNotification,
          );
          dispatch(api(response.data.result.paymentResponse))
          await setItem(
            ASYNC_KEY.NotificationFlag,
            JSON.stringify(
              response.data.result.paymentResponse.hasNotification,
            ),
          );
          navigation.navigate('Paymentsuccess')
        } else {
          dispatch(api(response.data.result.paymentResponse))
          console.log('==========> BillPay false response');
          setAlertBody({
            dialogBoxType: 'Error',
            headerText: 'Error',
            messageText: response.data.message,
            handlerFunction: () => {
              setModalVisible(false);
            },
          });
          setModalVisible(true);
      }
    } catch (e) {
      console.log('error body',e);
    } 
    finally {
      setLoaderVisible(false);
    }
  }
  const storeData = useSelector(state => {
    return state;
  });
  console.log("mehnt",storeData)
  function setCard(item) {
    console.log('image', item);
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
  function cc_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || '';
    var parts = [];
    for (i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join('-');
    } else {
      return value;
    }
  }

  function renderItemname(item, index) {
    let formattedDate = item.expiryDate;
    formattedDate = formattedDate.slice(0, 2) + '/' + formattedDate.slice(2);
    let formattedCard = item.cardNumber;
    formattedCard = formattedCard.slice(9, 16);

    return (
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingVertical: 20,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            marginVertical:8
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'lightgrey',
              width: '90%',
              alignSelf: 'center',
              padding: 10,
              borderRadius: 15,
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
              <Image
                style={{height: 50, width: 50, resizeMode: 'contain'}}
                source={setCard(item)}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginHorizontal: 20,
                  top: 5,
                }}>
                <Text style={{fontSize: RFValue(12)}}>
                  {item.cardHolderName}
                </Text>
                <Text>{formattedDate}</Text>
              </View>
              <Text
                style={{
                  alignContent: 'flex-end',
                  top: 10,
                  width: '20%',
                  left: 20,
                }}>
                {formattedCard}
              </Text>
              <View style={{bottom:5}}>
                <CheckBox
                  checked={item.id == selectedCardID}
                  checkedColor={'green'}
                  onPress={() => {
                    if (item.id == selectedCardID) {
                      setSelectedCardID(null);
                      setSelectedCardData(null);
                    } else {
                      setSelectedCardID(item.id);
                      setSelectedCardData(item);
                    }
                    setCardCvv(true)
                  }} ></CheckBox>
              </View>
            </View>
            {item.id == selectedCardID ? (
              <View style={{flexDirection: 'row',width:'96%',justifyContent:'space-between'}}>
                <View>
                  <Text style={{fontWeight: '500', color: 'grey'}}>
                    Billing Address
                  </Text>
                  <Text>
                    {item.billingAddress.street}
                    {', '}
                    {item.billingAddress.city}
                  </Text>
                  <Text>
                    {item.billingAddress.country}
                    {', '}
                    {item.billingAddress.postalCode}
                  </Text>
                </View>
                <View style={{left: "9%",width:'35%'}}>
                  <TextInput
                    placeholder="CVV*"
                    keyboardType="numeric"
                    maxLength={4}
                    onChangeText={text => {
                      setText(text);
                      setPress(true);
                      setCardCvv(true);
                    }}></TextInput>
                  <Text style={{color: 'red'}}>
                    {!cardCvv ? 'cvv is required' : ''}
                  </Text>
                </View>
              </View>
            ) : null}
          </View>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <>
      <ScrollView>
        <ScrollView>
  <Loader animating={loadervisible} />
          <View>
            {modalVisible ? (
              <CommonModal
                modalVisible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(false);
                }}
                alertBody={alertBody}
              />
            ) : null}
            <View>
              <FlatList
                style={{top: 15}}
                data={data}
                renderItem={({item, index}) => renderItemname(item, index)}
                keyExtractor={(item, index) => index}
              />
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
              style={{
                backgroundColor: 'white',
                height: '80%',
                width: '90%',
                marginLeft: 20,
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: '#3E3E3E',
                  alignSelf: 'center',
                  paddingVertical: 5,
                  fontSize: 15,
                  fontWeight: '600',
                }}>
                Add New Card
              </Text>
              <Text style={{color: 'grey', left: 20, top: 15}}>
                Card Details
              </Text>
              <View>
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
                  placeholder="Cardholder Name*"
                  onChangeText={HolderName => {
                    setHolderName(HolderName);
                    setHolderNameValid(true);
                  }}
                  defaultValue={HolderName}
                  placeholderTextColor="#989898"
                />
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'flex-start',
                    left: '5%',
                    position: 'absolute',
                    bottom: '-29%',
                    paddingVertical: '1%',
                    flex: 1,
                  }}>
                  {!holderNameValid ? 'Holder Name is required' : ' '}
                </Text>
              </View>
              <View>
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
                  placeholder="Card Number*"
                  placeholderTextColor="#989898"
                  maxLength={16}
                  keyboardType={'numeric'}
                  onChangeText={number => {
                    setNumber(cc_format(number));
                    setNumberValid(true);
                  }}
                  defaultValue={number}
                />
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'flex-start',
                    left: '5%',
                    position: 'absolute',
                    bottom: '-25%',

                    flex: 1,
                  }}>
                  {!numberValid ? 'Card Number is required' : ' '}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={{
                    marginTop: 20,
                    marginLeft: 15,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: '#F4F4F4',
                    height: 45,
                  }}
                  placeholder="month*"
                  placeholderTextColor="#989898"
                  keyboardType={'numeric'}
                  maxLength={2}
                  onChangeText={month => {
                    setMonth(month);
                    setMonthValid(true);
                  }}
                  defaultValue={month}
                />
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'flex-start',
                    left: '6%',
                    position: 'absolute',
                    bottom: '-20%',
                    paddingVertical: '2%',
                    fontSize: 12,
                    flex: 1,
                  }}>
                  {!monthValid ? 'Month is required' : ' '}
                </Text>
                <Text style={{top: 25, fontSize: 30, color: 'grey'}}>
                  {' '}
                  {' /'}
                </Text>
                <TextInput
                  style={{
                    marginTop: 20,
                    marginLeft: 15,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: '#F4F4F4',
                    height: 45,
                  }}
                  placeholder="date*"
                  placeholderTextColor="#989898"
                  maxLength={2}
                  keyboardType={'numeric'}
                  onChangeText={date => {
                    setDate(date);
                    setDateValid(true);
                  }}
                  defaultValue={date}
                />
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'flex-start',
                    left: '38%',
                    position: 'absolute',
                    bottom: '-22%',
                    paddingVertical: '2%',
                    fontSize: 12,
                    flex: 1,
                  }}>
                  {!dateValid ? 'Date is required' : ' '}
                </Text>
                <TextInput
                  style={{
                    width: 90,
                    marginTop: 20,
                    marginLeft: 15,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: '#F4F4F4',
                    height: 45,
                  }}
                  placeholder="CVV*"
                  placeholderTextColor="#989898"
                  maxLength={5}
                  keyboardType={'numeric'}
                  onChangeText={cvv => {
                    setCvv(cvv);
                    setCvvValid(true);
                  }}
                  defaultValue={cvv}
                />
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'flex-start',
                    left: '67%',
                    position: 'absolute',
                    bottom: '-22%',
                    paddingVertical: '2%',
                    fontSize: 12,
                    flex: 1,
                  }}>
                  {!cvvValid ? 'CVV is required' : ' '}
                </Text>
              </View>
              <Text style={{top: 14, color: 'grey', left: 20}}>
                Billing Address
              </Text>
              <View>
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
                  placeholder="Street*"
                  placeholderTextColor="#989898"
                  onChangeText={street => {
                    setStreet(street);
                    setStreetValid(true);
                  }}
                  defaultValue={street}
                />
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'flex-start',
                    left: '5%',
                    position: 'absolute',
                    bottom: '-30%',
                    paddingVertical: '1%',
                    flex: 1,
                  }}>
                  {!streetValid ? 'Street is required' : ' '}
                </Text>
              </View>
              <View>
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
                  placeholder="City*"
                  placeholderTextColor="#989898"
                  onChangeText={city => {
                    setCity(city);
                    setCityValid(true);
                  }}
                  defaultValue={city}
                />
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'flex-start',
                    left: '5%',
                    position: 'absolute',
                    bottom: '-28%',
                    paddingVertical: '1%',
                    flex: 1,
                  }}>
                  {!cityValid ? 'City is required' : ' '}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={{
                    width: '42%',
                    marginTop: 20,
                    marginLeft: 15,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: '#F4F4F4',
                    height: 45,
                  }}
                  placeholder="Country*"
                  placeholderTextColor="#989898"
                  onChangeText={country => {
                    setCountry(country);
                    setCountryValid(true);
                  }}
                  defaultValue={country}
                />
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'flex-start',
                    left: '5%',
                    position: 'absolute',
                    bottom: '-21%',
                    paddingVertical: '1%',
                    flex: 1,
                  }}>
                  {!countryValid ? 'Country is required' : ' '}
                </Text>
                <TextInput
                  style={{
                    width: '42%',
                    marginTop: 20,
                    marginLeft: 15,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: '#F4F4F4',
                    height: 45,
                  }}
                  placeholder="Zip code*"
                  placeholderTextColor="#989898"
                  keyboardType={'numeric'}
                  onChangeText={zipCode => {
                    setZipCode(zipCode);
                    setZipCodeValid(true);
                  }}
                  defaultValue={zipCode}
                />
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'flex-start',
                    left: '54%',
                    position: 'absolute',
                    bottom: '-21%',
                    paddingVertical: '3%',
                    flex: 1,
                  }}>
                  {!zipCodeValid ? 'Zip Code is required' : ' '}
                </Text>
              </View>
              <View style={{marginVertical: 10}}>
                <CheckBox
                  title={
                    <Text style={{marginLeft: 5, color: 'black'}}>
                      Securely store card for next time
                    </Text>
                  }
                  checked={checked1}
                  checkedColor={'green'}
                  onPress={() => setChecked1(!checked1)}></CheckBox>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'blue',
                    marginVertical: 5,
                  }}>
                  Terms and Conditions
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
      <View
        style={{
          alignContent: 'center',
          backgroundColor: 'white',
          paddingVertical: 10,
        }}>
        <View style={{flexDirection: 'row', alignSelf: 'center', right: 30}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: 'grey',
              height: 50,
              width: 150,
              marginTop: 10,
              borderRadius: 10,
              right: -20,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: 'black',
                fontSize: 20,
                padding: 10,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleErrorField();
         
              
            }}
            style={{
              backgroundColor: 'green',
              height: 50,
              width: 150,
              left: 34,
              marginTop: 10,
              borderRadius: 10,
              padding: 10,
            }}>
            <Text style={{alignSelf: 'center', color: 'black', fontSize: 20}}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CardDetails;
