import React,{useState} from 'react';
import {Formik} from 'formik';
import axios from 'axios';
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
  KeyboardAvoidingView
} from 'react-native';
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
  
  const postUser=() => {
    axios({
      method: 'post',
      url: 'https://dev-cim-api.tstt.co.tt/api/consumer/registration/basic-details',
      data:{
        firstName: {name},
  lastName: {last},
  "username": "john_doe",
  dob: {dob},
  city: {city},
  phone: {number},
  email: {email},
   password: {password},
      },
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"

      }
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log("error", error)
    })
  }
     
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const emailValidationSchema = Yup.object().shape({
    firstname: Yup.string().required().min(2, 'A firstname is required'),
    lastname: Yup.string().required().min(2, 'A firstname is required'),
    dateofbirth: Yup.string().required().min(2, 'dateofbirth is required'),
    city: Yup.string().required().min(2, 'A city is required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email Address is Required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 6 characters'),
    confirmpassword: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 6 characters'),
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmsecureTextEntry, confirmsetSecureTextEntry] = useState(true);
 
  return (
    <KeyboardAvoidingView>
      <View style={{color:'lightgrey'}}>
        <Image style={{height:110,width:"100%",Color:'grey'}}
        source={require('../src/assets/bmobilsecurity.png')}>

        </Image>
      </View>
    <View style={styles.wrapper}>
    
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
        
          fontSize: 30,
        
        
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
                height: Dimensions.get('screen').height * 0.54,
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
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  value={values.firstname}
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
                  placeholder={ <Text>
                    Select Subject
                    <Text style={{color: 'red', fontSize:15}}>
                      *
                    </Text>
                  </Text>}
                  label="Last Name"
                  placeholderTextColor="#979797"
                  autoCapitalize="none"
                  textContentType="username"
                  onChangeText={handleChange('last')}
                  onBlur={handleBlur('lastname')}
                  value={values.lastname}
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
                  onChangeText={handleChange('dateofbirth')}
                  onBlur={handleBlur('dateofbirth')}
                  value={values.dateofbirth}

                />            
                <Text style={styles.error}>{errors.dateofbirth}</Text>
              </View>
              <View>
                <PhoneInput
                  placeholder={'Mobile Number'}
                  value={values.phoneNumber}
                  defaultCode="IN"
                  layout="first"
                  containerStyle={{
                    borderRadius: 10,
                    width: '95%',
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: '#B5B5B5',
                   height:80,
               
                    alignSelf: 'center',
                  }}
                 
                  textContainerStyle={{color:'white'}}
                />
                <Text style={styles.error}>{errors.phoneNumber}</Text>
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
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
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
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  value={values.city}
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
                  secureTextEntry={secureTextEntry}
                  textContentType="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  right={
                    <TextInput.Icon
                      name="eye"
                      onPress={() => {
                        setSecureTextEntry(!secureTextEntry);
                        return false;
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
                  secureTextEntry={confirmsecureTextEntry}
                  textContentType="confirmpassword"
                  onChangeText={handleChange('confirmpassword')}
                  onBlur={handleBlur('confirmpassword')}
                  value={values.confirmpassword}
                  right={
                    <TextInput.Icon
                      name="eye"
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
            <View>
              <Pressable
                titleSize={20}
                style={styles.button(isValid)}
               
              
                onPress={() => navigation.navigate('Login')}
                >
                  
                <Text style={{color: '#fff', fontSize: 17, fontWeight: '600'}}>
                  Submit
                </Text>
              </Pressable>
            </View>

            <View style={styles.signUpContainer}>
              <TouchableOpacity
              onPress={postUser}
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
    borderWidth: 1,
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
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'black',
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
    alignSelf: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: '20%',

   
  },
});
export default SignUpScreen;
