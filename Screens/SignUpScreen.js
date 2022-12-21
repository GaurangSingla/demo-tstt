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

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
 
     
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const emailValidationSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required').min(2),
    lastname: Yup.string().required("Last Name is required").min(2, 'A firstname is required'),
    dateofbirth: Yup.string().required('Date Of Birth is required').min(2, 'dateofbirth is required'),
    city: Yup.string().required(' City is required').min(2, 'A city is required'),
    phoneNumber: Yup.string().required('Phone Number is required').min(2, 'Phone number is not valid'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email Address is Required'),
    password: Yup.string()
      .required(' Password is required')
      .min(6, 'Your password has to have at least 6 characters'),
    confirmpassword: Yup.string()
      .required(' Confirm Password is required')
      .min(6, 'Your password has to have at least 6 characters'),
  });
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
        validationSchema={emailValidationSchema}
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
                  onBlur={handleBlur('firstname')}
                  
                 
                />
                <Text style={styles.error}>{errors.firstname}</Text>
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
                  onBlur={handleBlur('lastname')}
                
                />
                <Text style={styles.error}>{errors.lastname}</Text>
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
                  onBlur={handleBlur('dateofbirth')}
                

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
                  onBlur={handleBlur('email')}
                
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
                  onBlur={handleBlur('city')}
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
                  onBlur={handleBlur('password')}
                
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
                  onBlur={handleBlur('confirmpassword')}
                 
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
