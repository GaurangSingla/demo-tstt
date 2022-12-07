import React,{useState,useEffect,useRef} from 'react'
import {View,Text,Image,StyleSheet,TextInput,Button, TouchableOpacity,Pressable} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignUpScreen from './SignUpScreen';
import {SocialIcon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useIsFocused} from '@react-navigation/native';
import Tab_navi from '../android/Tab_navi';
import Verify from './Verify';
import {Divider} from 'react-native-elements';
import axios from 'axios';
import Password from './Password';


const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  const [email, setEmail] = useState('');
;
  const [rememberme, setrememberme] = useState(false);
  const isFocused = useIsFocused();
  const [usrName, setUsrName] = useState('');
  const [pass, setPass] = useState('');
  const [usrNameValid, setUsrNameValid] = useState(true);
  const [passValid, setPassValid] = useState(true);
  const [data, setData] = useState([]);
  const [savenumber, setSaveNumber] = useState('');
 
  const [renderCards, setRenderCards] = useState(false);
 async function hitApi() {
    try {
      const header = {
        headers: {
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiOWRkMjliZTkxMTk3ZmI2ZjEyZmM3YjlmNTZjNzEwOTkwZDhjMTM5MDQ3ODM5YzliNTc3OGFiYzYwYzQ4OGQzOTUzMjFjODc4MTkzNjdmMGUiLCJpYXQiOjE2NzA0MTc3OTIuNTY2OTU4LCJuYmYiOjE2NzA0MTc3OTIuNTY2OTYxLCJleHAiOjE3MDE5NTM3OTIuNTY0MDg0LCJzdWIiOiIzMiIsInNjb3BlcyI6WyJhZG1pbiJdfQ.cATWDGVyyc59YJpK8F8XooRXiPkLdwFq5pk8203a1zBBS8ZqHDRVIqGPVsdh6sJPzeZ02UYTe0AwUXWM3Y8YY5jYGozLFjzN7nAG50ZJ3tIz7Cbu6Cu97F2Oke8jOuepgHcqs6UmxMZ4Mhxs79XregY6aEla8x3NeaSpyR0SkWuWCp9on1G1T2lNqCwkMCZO23wrftxbxu8TJcLkRACxLTLGldrb2qj0viMu_RPoYcjgZkuKOXDAKzzMzmweQxR-U9QqtS5OnBdtPZWq0qKFBiMr3doEEpOktn4ve8YCu971XiQaclTPwM5a_sr1foiqRiOheytmkmAlAXHLLFp0s_QslKlCbvnWjW_FWKj43xCiCsRQu7yamciyWqa3vYnpRYFhTHoMUXZMc9aHRuLB26TVRUUrEsG5T-DLyMSj-67Az5wAn9WoANFLNsYZdd_qTnm2iDbmNm7-TEBA5donuimhFisXmIVuZybTV6oeWcNZbZj8LvqgvSc8Aj6bhsd105v7J51I35TV1B76mzPIvhEQk-QqAonn0-oe8UIqByPIFnkpBIukLPHYaS-OjueSW70njYG6IPHVL4stS_qoMMRAZO48rkqJF7EPksMtPfeZwsZUB0_DbZhMtCdLotK-Bth6qy6r0PseWaUMUIVQq0wbEF7D8sLBRj6rZIR-qeo",
        },
        params: {
          loginId:phoneNumber,
          password:password
          ,
           
        },
      };
      console.log('header ===== ', header);
      const response = await PaymentService.billPayGet(header);
      console.log(
        '==========> billpay response',
        JSON.stringify(response.data),
      );
      if (response.data.success == true) {
        console.log(
          '==========> billpay responseId',
          response.data.result.requestId,
        );
        setData(response.data.result);
        renderCards(true);
      } else {
        renderCards(false);
        setAlertBody({
          dialogBoxType: 'Error',
          messageText: response.data.message,
        });
     
   
      
  }}catch( error){

  }}
  function next(){
    if(data.success){
   navigation.navigate('Tab_navi');
    }else{
    console.warn('check credentials');
    }
  }
  return (
    <>
      <Image
        style={styles.img}
        source={require('../src/assets/babyChild.jpg')}
      />
      <View style={styles.container}>
        <Text style={styles.txt}>
          Welcome To <Text style={styles.clr}>bMobile</Text>
        </Text>
      </View>
      <PhoneInput
        style={{top: '200'}}
        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        placeholder={' Mobile Number '}
        containerStyle={{
          borderRadius: 10,
          width: '95%',
          backgroundColor: 'white',
          borderWidth: 1,
          bottom: 2,
          margin: 10,
          alignSelf: 'center',
          bottom: 100,
          height: '7%',
          borderColor: '#B5B5B5',
        }}
        textInputStyle={{height: 40}}
        textContainerStyle={{}}
      />

      {/* <TextInput
        secureTextEntry={true}
        style={{
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 10,
          bottom: 100,
          width: '90%',
          alignSelf: 'center',
          paddingLeft:10
        }}
        placeholder={'password*'}
        onChangeText={password => setPassword(password)}
        defaultValue={password}
        placeholderTextColor='#ccc'
        withShadow
        
      /> */}
      <View>
        <Password />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <Pressable
            style={{
              height: 15,
              width: 15,
              backgroundColor: rememberme ? '#00E556' : null,
              borderWidth: 3,
              borderColor: '#DEDEDE',
              bottom: 26,
              marginLeft: 10,
              borderRadius: 15,
            }}
            onPress={() => {
              setrememberme(!rememberme);
            }}></Pressable>
          <Text
            style={{
              color: 'black',
              bottom: 31,
              marginLeft: '6%',
            }}>
            Remember Me
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: 'black',
              textDecorationLine: 'underline',
              textDecorationColor: 'white',
              textDecorationStyle: 'solid',
              bottom: 31,

              marginLeft: '46%',
            }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{marginTop: 65, alignContent: 'center', bottom: 79}}
        
       onPress={()=>navigation.navigate('Verify')}
        //onPress={postUser}
      >
        <Text style={styles.btn}>Sign In</Text>
      </TouchableOpacity>
      {/* <Divider width={1} orientation="Horizontal"  /> */}
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
          bottom: 68,
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              // left: -265,

              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            OR
          </Text>
        </View>
      </Text>
      {/* <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#EA4335',
            bottom: 55,
            width: '45%',
            borderRadius: 10,
            padding: 0,
            marginLeft: 15,
            height: 50,
          }}>
          <Text
            style={{
              color: '#989898',
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 'bold',
              bottom: 19,
            }}>
            <Image
              style={{
                height: 49,
                width: 40,
                
              }}
              source={require('../assets/google.png')}
            />
            Sign In with google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#3B5998',
            bottom: 55,
            width: '45%',
            borderRadius: 10,
            padding: 3,
            marginLeft: 7,
            height: 50,
          }}>
          <Text
            style={{
              color: '#989898',
              textAlign: 'center',
              fontSize: 10,
              fontWeight: 'bold',
              bottom:9
            }}>
            <Image
              style={{               
                height: 40,
                width: 35,
              }}
              source={require('../assets/facebook.webp')}
            />
            Sign In with facebook
          </Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', bottom: 100}}>
          <Text style={{color: '#989898', marginLeft: -330, fontSize: 20}}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text
              style={{
                color: '#00E556',
                marginLeft: 5,
                width: 90,
                fontSize: 20,
                textDecorationLine: 'underline',
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            color: '#989898',
            
            bottom: 18,
            marginLeft: 120,
            fontWeight: 'bold',
          }}>
          Version: DEV - 1.0.0
        </Text>
      </View> */}
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#EA4335',
            marginLeft: 12,
            bottom: 54,
            width: 180,
          }}>
          <View>
            <Image
              style={{
                height: 49,
                width: 40,
              }}
              source={require('../assets/google.png')}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: 14,
                marginLeft: 10,
                fontSize: 13,
                color: '#4D4848',
              }}>
              Sign in with google
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#3B5998',
            marginLeft: 12,
            bottom: 54,
            width: 180,
          }}>
          <View>
            <Image
              style={{
                height: 49,
                width: 40,
              }}
              source={require('../assets/facebook.webp')}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: 14,
                marginLeft: 10,
                fontSize: 13,
                color: '#4D4848',
              }}>
              Sign in with facebook
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', bottom: 40, marginLeft: 80}}>
        <View>
          <Text style={{fontSize: 18, color: '#989898'}}>
            Don't have an account
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginLeft: 7,
              color: 'green',
              textDecorationLine: 'underline',
              fontSize: 18,
              color: '#00E556',
            }}>
            Sign up
          </Text>
        </View>
      </View>
      <View>
        <Text style={{bottom: 34, textAlign: 'center', color: '#989898'}}>
          Version: DEV - 1.0.0{' '}
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  img: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: '62%',
    top: 310,
  },
  txt: {
    color: '#4D4848',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    fontSize: 27,
    marginTop: 8,
    fontWeight: 'bold',
  },
  clr: {
    marginTop: 8,
    color: '#00E556',
  },
  btn: {
    backgroundColor: '#00E556',
    borderRadius: 10,
    height: 48,
    color: '#2E2F2F',
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: 20,
    width: '93%',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
});
export default Login;
