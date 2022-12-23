import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import axios from 'axios';
import { SignService } from '../Services.js/SignUpService';
import {
  //   TextInput,
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Alert,
  
} from 'react-native';
import {
  SCREEN_ROUTE_MAPPING,
  ASYNC_KEY,
} from '../utils/string';
import {
  setItem,
  getItem,

} from '../utils/StorageHandling';
import * as Yup from 'yup';
import PhoneInput from 'react-native-phone-number-input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native-paper';
import Tab_navi from '../android/Tab_navi';
import DateTimePicker from '@react-native-community/datetimepicker';
import Login from './Login';
const SignUpScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [name,setName]=useState('')
  const [valid,setValid]=useState();
  const [last,setLast]=useState('')
  const [dob,setDob]=useState('')
  const [number,setNumber]=useState('')
  const [email,setEmail]=useState('')
  const [city,setCity]=useState('')
  const[password,setPassword]=useState('')
  const[confirmpassword,setConfirmPassword]=useState('')
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

     

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmsecureTextEntry, confirmsetSecureTextEntry] = useState(true);
  const hitSignUpApi = async () => {
    try {
      const args = {
        firstName: name,
        lastName: last,
        username: 'user',
        dob: dob,
        city: city,
        phone:  number,
        email: email,
        password: password,
      };

      console.log('signup request == >', JSON.stringify(args));
      const response = await SignService.signUpDetails(args);
      console.log('signup response == >', JSON.stringify(response));

      if (response.data.success) {
        console.log("check",response.data.result)
        setItem(ASYNC_KEY.token, response.headers['access-medium']);
        navigation.navigate(SCREEN_ROUTE_MAPPING.Verify, {
          Value: 'SignUp',
          phone: number,
          selectedCountry: "91",
        })
        navigation.navigate('Login')
      } else {
       Alert.alert(response.data.message)
      }
    } catch (e) {
      console.log('signup catch response == >', JSON.stringify(e));


  
    }
  };
  const [emptyName,setEmptyName]=useState(false);
  const [EmptyLast,setEmptyLast]=useState(false);
  const [emptyDob,setEmptyDob]=useState(false);
  const [emptyNumber,setEmptyNumber]=useState(false);
  const [emptyCity,setEmptyCity]=useState(false);
  const [emptyPassword,setEmptyPassword]=useState(false);
  const [EmptyConfirmPassword,setEmptyConfirmPassword]=useState(false);
  const [press,setPress]=useState(false);
  function handleErrorName() {
    if (name == '' || name == undefined || name == null) {
      setEmptyName(true);
     
    } else {
      setEmptyName(false);
    }

  }
  function handleErrorLast() {
    if (last == '' || last == undefined || last == null) {
      setEmptyLast(true);
    
    } else {
      setEmptyLast(false);
    }
  }
  function handleErrorDob() {
    if (dob == '' || dob == undefined || dob == null) {
      setEmptyDob(true);
     
    } else {
      setEmptyDob(false);
    }

  }
  function handleErrorPhone() {
    if (number == '' || number == undefined || number == null) {
      setEmptyPhone(true);
    
    } else {
      setEmptyPhone(false);
    }
  }
  function handleErrorEmail() {
    if (email == '' || email == undefined || email == null) {
      setEmptyEmail(true);
     
    } else {
      setEmptyEmail(false);
    }

  }
  function handleErrorCity() {
    if (city == '' || city == undefined || city == null) {
      setEmptyCity(true);
    
    } else {
      setEmptyCity(false);
    }
  }
  function handleErrorPass() {
    if (password == '' || password == undefined || password == null) {
      setEmptyPassword(true);
     
    } else {
      setEmptyPassword(false);
    }

  }
  function handleErrorConfirmPhone() {
    if (confirmpassword == '' || confirmpassword == undefined || confirmpassword == null) {
      setEmptyConfirmPassword(true);
    
    } else {
      setEmptyConfirmPassword(false);
    }
  }
  return (
    <KeyboardAvoidingView style={{backgroundColor:'#F4F4F4'}}>
      <View style={{alignSelf:'center'}}>
        <Image style={{width:260,height:90,resizeMode:'cover'}}
        source={require('../src/assets/bmobilsecurity.png')}>

        </Image>
      </View>
    <View style={styles.wrapper}>
    
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
        
          fontSize: 30,
          marginBottom:10
        
        
        }}>
        Sign Up
      </Text>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmpassword: '',
          dateofbirth: '',
          city: '',
        }}
      
        onSubmit={values => {
          console.log(values);
        }}>
        {({
          handleSubmit,
          errors,
          values,
          handleChange,
          handleBlur,
          isValid,
        }) => (
          <>
            <ScrollView
              style={{
                height: Dimensions.get('screen').height * 0.47,
              }}
              contentContainerStyle={{
                
            
                
              }}
              showsVerticalScrollIndicator={false}
              bounces={false}
              showsHorizontalScrollIndicator={false}>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.firstname.length ||
                      values.firstname.length >= 2
                        ? '#FAFAFA'
                        : 'red',
                  },
                ]}>
                <TextInput
                  style={styles.inputFieldText}
                  placeholder="First Name"
                  label="First Name"
                  placeholderTextColor="#979797"
                  autoCapitalize="none"
                  textContentType="username"
                  onChangeText={name => setName(name)}
                  defaultValue={name}
                 
                  
                 
                />
                

 <Text style={{color: 'red',marginVertical:3 }}>
    {' First Name is required'}
  </Text>

              </View>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.lastname.length || values.lastname.length >= 2
                        ? '#FAFAFA'
                        : 'red',
                  },
                ]}>
                <TextInput
                  style={styles.inputFieldText}
                  placeholder="last name*"
                  label="Last Name"
                  placeholderTextColor="#979797"
                  autoCapitalize="none"
                  textContentType="username"
                  onChangeText={last => setLast(last)}
                  defaultValue={last}
             
                
                />
                <Text style={{color: 'red',marginVertical:3 }}>
    {' Last Name is required'}
  </Text>
              </View>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.dateofbirth.length ||
                      values.dateofbirth.length >= 2
                        ? '#FAFAFA'
                        : 'red',
                  },
                ]}>
                <TextInput
                  style={styles.inputFieldText}
                  placeholder="Date Of Birth"
                  label="Date Of Birth"
                  placeholderTextColor="#979797"
                  autoCapitalize="none"
                  textContentType="username"
                  onChangeText={dob => setDob(dob)}
                  defaultValue={dob}
               
                

                />            
                <Text style={styles.error}>{errors.dateofbirth}</Text>
              </View>
              <View>
                <PhoneInput
                  placeholder={'Mobile Number'}
                  onChangeText={number => setNumber(number)}
                  defaultValue={number}
                  defaultCode="IN"
                  layout="first"
                  containerStyle={{
                    borderRadius: 5,
                    width: '95%',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: '#B5B5B5',
                   height:58,
               
                    alignSelf: 'center',
                  }}
                  textInputStyle={{height: 40}}
                  textContainerStyle={{color:'white'}}
                />
                  <Text style={styles.error1}>{errors.phoneNumber}</Text>
               
              </View>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      values.email.length < 1 || isValid ? '#FAFAFA' : 'red',
                  },
                ]}>
                <TextInput
                  style={styles.inputFieldText}
                  label="Email"
                  placeholder="Email"
                  placeholderTextColor="#979797"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoFocus={false}
                  onChangeText={email => setEmail(email)}
                  defaultValue={email}
                
                
                />
                <Text style={styles.error}>{errors.email}</Text>
              </View>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.city.length || values.city.length >= 2
                        ? '#FAFAFA'
                        : 'red',
                  },
                ]}>
                <TextInput
                  style={styles.inputFieldText}
                  label="City"
                  placeholder="City"
                  placeholderTextColor="#979797"
                  autoCapitalize="none"
                  textContentType="username"
                  onChangeText={city => setCity(city)}
                  defaultValue={city}
        
                  rightIconName={'chevron-down'}
                
              
                
                />
                <Text style={styles.error}>{errors.city}</Text>
              </View>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.password.length || values.password.length >= 6
                        ? '#FAFAFA'
                        : 'red',
                  },
                ]}>
                <TextInput
                  style={styles.inputFieldText}
                  label="Password"
                  placeholder="Password"
                  placeholderTextColor="#979797"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  onChangeText={password => setPassword(password)}
                  defaultValue={password}
                 
                
                  secureTextEntry={secureTextEntry ? false : true}
                  right={
                    <TextInput.Icon
                      name={secureTextEntry ? 'eye' : 'eye-off'}
                      onPress={() => {
                        setSecureTextEntry(!secureTextEntry);
                      }}
                    />
                  }
                />
                <Text style={styles.error}>{errors.password}</Text>
              </View>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.confirmpassword.length ||
                      values.confirmpassword.length >= 6
                        ? '#FAFAFA'
                        : 'red',
                  },
                ]}>
                <TextInput
                  style={styles.inputFieldText}
                  placeholder="Confirm Password"
                  label="Confirm Password"
                  placeholderTextColor="#979797"
                  autoCapitalize="none"
                  autoCorrect={false}
          
                  textContentType="confirmpassword"
                  onChangeText={confirmpassword => setConfirmPassword(confirmpassword)}
                  defaultValue={confirmpassword}
              
                 
                  secureTextEntry={secureTextEntry ? false : true}
                  right={
                    <TextInput.Icon
                      name={secureTextEntry ? 'eye' : 'eye-off'}
                      onPress={() => {
                        setConfirmSecureTextEntry(!confirmsecureTextEntry);
                        return false;
                      }}
                    />
                  }
                />
                <Text style={styles.error}>{errors.confirmpassword}</Text>
              </View>
            </ScrollView>
            <View style={{bottom:70}}>
              <Pressable
                titleSize={20}
                style={styles.button(isValid)}
               
              
                onPress={() =>{ hitSignUpApi()}}
                >
                  
                <Text style={{color: '#fff', fontSize: 17, fontWeight: '600'}}>
                  Submit
                </Text>
              </Pressable>
            </View>

            <View style={styles.signUpContainer}>
              <TouchableOpacity
              onPress={()=>navigation.navigate('Login')}
              >
                <Text style={{color: 'green', fontWeight: '600'}}>
                  Previous
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
    </KeyboardAvoidingView>
  );

};
const styles = StyleSheet.create({
  wrapper: {
   height:725,
    borderRadius:20,
    backgroundColor:'white',
  },
  inputFieldText: {
    fontSize: 15,
    padding: 5,
    backgroundColor:"white",
    width:'100%',
    borderRadius:10,
    height:45,
     borderRightWidth:1,
     borderLeftWidth:1,
     borderTopWidth:1,
    borderColor:'#B5B5B5',
    color:'#989898',
  },
  inputField: {
    borderRadius: 4,
   alignSelf:'center',
 width:'95%',
    backgroundColor: 'white',
  
  
    
   
  },
  emailInput: {
    width: 250,
    height: 50,
  
    borderRadius: 15,
   
    padding: 2,
  },
  button: isValid => ({
    backgroundColor: isValid ? 'green' : 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top: '100%',
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    marginTop: "4%",
  }),
  buttonText: {
    color: 'white',
  },
  error: {
    color: 'red',
    alignSelf: "flex-start",
    marginVertical:5
  },
  error1: {
    color: 'red',
    alignSelf: "flex-start",
    marginVertical:5,
    left:15
  },
  signUpContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: '22%',
    bottom:75,

   
  },
});
export default SignUpScreen;
