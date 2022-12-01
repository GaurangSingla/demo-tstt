import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
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
} from 'react-native';
import * as Yup from 'yup';
import PhoneInput from 'react-native-phone-number-input';
import {TextInput} from 'react-native-paper';
import axios from 'axios';
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const SignUpScreen = () => {
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
  const [cityError, setCityError] = useState(false);
  const [cityErrorMessage, setCityErrorMessage] = useState('');
  const [citySelectPopup, setCitySelectPopup] = useState(false);
  const [valid, setValid] = useState(false);

  //   const [values, setValues] = useState({
  //   firstName: "John",
  //   lastName: "Doe",
  //   dob: "2001-10-31",
  //   city: "Kingston",
  //   phone: "917906221470",
  //   email: "john.doe@tstt.com",
  //   password: "Staging123$"
  // });
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   postUser();
  // }, []);
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setValues({...values});
  //   const { firstName, lastName,dob,city,phone, email, password } = values;
  //   const user = {firstName, lastName,dob,city,phone, email, password};

  //   async function postUser () {
  //       const result = await axios.post('${API)/signup', user);
  //   };

  //     useEffect(() => {
  //       postUser();
  //     }, []);

  // };
  // const handleChange = name => e => {
  //   setValues({ ...values, [name]: e.target.value });
  // };
  return (
    <View style={styles.wrapper}>
      <Image
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 10,
          height: '9%',
          width: '45%',
        }}
        source={require('../assets/toplogo.jpeg')}
      />
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 30,
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
                height: Dimensions.get('screen').height * 0.44,
              }}
              contentContainerStyle={{
                paddingVertical: '15%',
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
                  placeholder="Last Name"
                  label="Last Name"
                  placeholderTextColor="#979797"
                  autoCapitalize="none"
                  textContentType="username"
                  onChangeText={handleChange('lastname')}
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
                    backgroundColor: '#fff',
                    borderWidth: 2,
                    borderColor: '#ccc',
                    bottom: -80,
                    margin: 10,
                    alignSelf: 'center',
                  }}
                  textContainerStyle={{}}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    const checkValid = PhoneInput.current?.isValidNumber(value);
                    setShowMessage(true);
                    setValid(checkValid ? checkValid : false);
                  }}>
                  <Text style={styles.error}>{errors.phoneNumber}</Text>
                </TouchableOpacity>
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
                  rightIconName={'chevron-down'}
                  error={cityError}
                  fullerrormessage={cityErrorMessage}
                  onPress={() => setCitySelectPopup(true)}
                  onFocus={() => {
                    // Keyboard.dismiss(),
                    setCitySelectPopup(true);
                  }}
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
                  secureTextEntry={confirmsecureTextEntry}
                  textContentType="confirmpassword"
                  onChangeText={handleChange('confirmpassword')}
                  onBlur={handleBlur('confirmpassword')}
                  value={values.confirmpassword}
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
                <Text style={styles.error}>{errors.confirmpassword}</Text>
              </View>
            </ScrollView>
            <View>
              <Pressable
                titleSize={20}
                style={styles.button(isValid)}
                onPress={handleSubmit}>
                <Text style={{color: '#fff', fontSize: 17, fontWeight: '600'}}>
                  Submit
                </Text>
              </Pressable>
            </View>

            <View style={styles.signUpContainer}>
              <TouchableOpacity
              //onPress={() => navigation.navigate('LoginScreen')}
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
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
  },
  inputFieldText: {
    fontSize: 15,
    padding: 5,
  },
  inputField: {
    borderRadius: 4,
    // padding: 12,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
    top: 80,
    marginTop: 10,
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
    marginTop: 15,
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
