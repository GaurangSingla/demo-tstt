import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import {RFValue} from 'react-native-responsive-fontsize';
  import {setItem, getItem} from '../utils/StorageHandling';
  import CommonModal from '../Modal/Modal';
  import {
    ASYNC_KEY,
    DRAWER_CONTENT,
    TRANSACTION_HISTORY,
    ADD_CARD_ALERT,
  } from '../utils/string';
  import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import { ProfileService } from '../ProfileService';
  const ChangePassword = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [password, setPassword] = useState();
    const [passValid, setPassValid] = useState(true);
    const [confirmpassword, setConfirmPassword] = useState();
    const [confirmvalid, setConfirmValid] = useState(true);
    const [matchPass, setMatchPass] = useState(true);
    const [currentPassword, setCurrentPassword] = useState();
    const [currentValid, setCurrentValid] = useState(true);
    const asyncKeys = [
      ADD_CARD_ALERT.CARDS,
      ASYNC_KEY.LOGGEDIN,
      ASYNC_KEY.auth,
      ASYNC_KEY.token,
      ASYNC_KEY.loginMethod,
      TRANSACTION_HISTORY.txnHistory,
      DRAWER_CONTENT.names,
      DRAWER_CONTENT.mobileNumber,
      ASYNC_KEY.MOBILE,
      ASYNC_KEY.Promo_Api_Response,
      ASYNC_KEY.MOBILE_VISIBLE,
      ASYNC_KEY.ACCOUNTS,
      ASYNC_KEY.USER_PROFILE_DATA,
      ASYNC_KEY.LOGGEDIN_CREDS,
    ];
    const [alertBody, setAlertBody] = useState({
      dialogBoxType: '',
      headerText: '',
      messageText: '',
      confirmationFunction: null,
    });
    const [showAlertDialog, setshowAlertDialog] = useState(false);
    function handleErrorField() {
      if (password != confirmpassword) {
        setMatchPass(false);
      }
      const passwordvalid = validatePassword();
      // if (passwordvalid) {
      //   hitApi();
      // }
      const confirmvalid = validateConfirmPassword();
      const currentvalid = validateCurrentPassword();
      if(passwordvalid && confirmvalid && currentvalid){
        Validate();
      }
    }
    function validateConfirmPassword() {
      if (!confirmpassword || confirmpassword == '') {
        setConfirmValid(false);
        return false;
      }
      return true;
    }
  
    function validateCurrentPassword() {
      if (!currentPassword || currentPassword == '') {
        setCurrentValid(false);
        return false;
      }
      return true;
    }
  
    function validatePassword() {
      if (!password || password == '') {
        setPassValid(false);
        return false;
      }
      return true;
    }

    async function Validate() {
      try {
        const authToken = await getItem(ASYNC_KEY.auth);
        const header = {
          headers: {
            Authorization: authToken,
          },
        };
        const args = {
          currentPassword: currentPassword,
          newPassword: password,
        };
        console.log(JSON.stringify(args) + ' : ' + JSON.stringify(header));
        const response = await ProfileService.userChangePassword(args, header);
        console.log('msgs',response)
        if (response.data.success == true) {
          console.log('hhhhh',response.data)
          setAlertBody({
            dialogBoxType: 'Success',
            headerText: '',
            messageText: response.data.message,
            confirmationFunction: () => {
              navigation.navigate('Profile');
              setModalVisible(false);
            },
          });
          setModalVisible(true);
        } else {
          setAlertBody({
            dialogBoxType: 'Error',
            headerText: 'Error',
            messageText: response.data.message,
            confirmationFunction: () => {
              setModalVisible(false);
            },
          });
          setModalVisible(true);
        }
      }
      catch(e) {
        console.log('catch error',e)
      }
    }
    return (
      <SafeAreaView>
         {modalVisible ? (
          <CommonModal
            modalVisible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
            alertBody={alertBody}
          />
        ) : null}
        <Image
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
          source={require('../assets/babyChild.jpg')}
        />
        <View style={styles.container}>
          <Text style={styles.txt}>Reset Password</Text>
        </View>
        <TextInput
          style={{
            backgroundColor: 'white',
            fontSize: RFValue(15),
            borderWidth: RFValue(1),
            borderColor: '#B5B5B5',
            position: 'absolute',
            height: responsiveHeight(7),
            width: responsiveWidth(85),
            top: RFValue(350),
            alignSelf: 'center',
            borderRadius: RFValue(5),
          }}
          placeholder="Current Password *"
          placeholderStyle={{top: 15, backgroundColor: 'white'}}
          placeholderTextColor="#979797"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="CurrentPassword"
          onChangeText={currentPassword => {
            setCurrentPassword(currentPassword);
            setCurrentValid(true);
          }}
          defaultValue={currentPassword}
          secureTextEntry={!secureTextEntry ? false : true}
        />
        <Text
          style={{
            color: 'yellow',
            left: '9%',
            top: RFValue(396),
            flex: 1,
            marginVertical: RFValue(5),
            position: 'absolute',
            fontSize: RFValue(12),
            fontWeight: 'bold',
          }}>
          {!currentValid ? 'Current Password is required' : ' '}
        </Text>
  
        <TextInput
          style={{
            backgroundColor: 'white',
            fontSize: RFValue(15),
            borderWidth: RFValue(1),
            borderColor: '#B5B5B5',
            position: 'absolute',
            height: responsiveHeight(7),
            width: responsiveWidth(75),
            top: RFValue(420),
            // alignSelf: 'center',
            left: '8%',
            borderRadius: RFValue(5),
          }}
          placeholder="New Password *"
          placeholderStyle={{top: 15, backgroundColor: 'white'}}
          place
          placeholderTextColor="#979797"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          onChangeText={password => {
            setPassword(password);
            setPassValid(true);
            setMatchPass(true)
          }}
          defaultValue={password}
          secureTextEntry={!secureTextEntry ? false : true}
        />
        <Text
          style={{
            color: 'yellow',
            left: '9%',
            top: RFValue(465),
            flex: 1,
            marginVertical: RFValue(5),
            position: 'absolute',
            fontSize: RFValue(12),
            fontWeight: 'bold',
          }}>
          {!matchPass
            ? 'password should match'
            : !passValid
            ? 'New Password is required'
            : ' '}
        </Text>
  
        <TextInput
          style={{
            backgroundColor: 'white',
            fontSize: RFValue(15),
            borderWidth: RFValue(1),
            borderColor: '#B5B5B5',
            position: 'absolute',
            height: responsiveHeight(7),
            width: responsiveWidth(85),
            top: RFValue(490),
            alignSelf: 'center',
            borderRadius: RFValue(5),
          }}
          placeholder="Confirm Password *"
          placeholderStyle={{top: 15, backgroundColor: 'white'}}
          place
          placeholderTextColor="#979797"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          onChangeText={confirmpassword => {
            setConfirmPassword(confirmpassword);
            setConfirmValid(true);
            setMatchPass(true)
          }}
          defaultValue={confirmpassword}
          secureTextEntry={!secureTextEntry ? false : true}
        />
        <Text
          style={{
            color: 'yellow',
            left: '9%',
            top: RFValue(538),
            flex: 1,
            marginVertical: RFValue(5),
            position: 'absolute',
            fontSize: RFValue(12),
            fontWeight: 'bold',
          }}>
          {!matchPass
            ? 'password should match'
            : !confirmvalid
            ? 'Confirm Password is required'
            : ' '}
        </Text>
  
        <TouchableOpacity
          style={{
            height: '10%',
            width: '85%',
            backgroundColor: '#00E556',
            top: '35%',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 10,
          }}
          onPress={() => {
            handleErrorField();
          }}>
          <Text style={{color: '#2E2F2F', fontWeight: '900', fontSize: 20}}>
            Update
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center', top: '38%'}}>
          <Text style={{color: '#00E556', fontWeight: 'bold'}}
          onPress={() => navigation.navigate('Profile')}
          >Cancel</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      borderRadius: RFValue(20),
      height: responsiveHeight(55),
      top: RFValue(285),
      margin: '2%',
    },
    txt: {
      color: '#FFFFFF',
      alignSelf: 'center',
      justifyContent: 'center',
      padding: '2%',
      fontSize: RFValue(25),
      marginTop: '2%',
      fontWeight: 'bold',
    },
    clr: {
      marginTop: '5%',
      color: '#00E556',
    },
    btn: {
      backgroundColor: '#00E556',
      borderRadius: RFValue(10),
      height: responsiveHeight(8),
      color: '#2E2F2F',
      alignSelf: 'center',
      fontSize: RFValue(18),
      width: responsiveWidth(90),
      textAlign: 'center',
      justifyContent: 'center',
      paddingVertical: RFValue(15),
      fontWeight: 'bold',
    },
    error: {
      color: 'red',
      alignSelf: 'center',
    },
    inputField: {
      borderRadius: RFValue(5),
  
      backgroundColor: 'rgba(0,0,0,0)',
  
      borderWidth: RFValue(1),
      height: responsiveHeight(10),
      borderColor: '#B5B5B5',
      backgroundColor: 'white',
    },
  });
  export default ChangePassword;
  