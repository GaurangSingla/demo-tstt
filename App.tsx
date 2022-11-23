import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignUpForm = ({navigation}) => {
  const SignUpFormSchema = Yup.object().shape({
    firstname: Yup.string().required().min(2, 'First Name is required'),
    email: Yup.string().email().required('An email is required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 9 characters'),
  });
  return (
    <View style={styles.wrapper}>
      <ScrollView>
       <Image style={{marginLeft:'auto',marginRight:'auto',marginTop:15}}
          source={require('./assets/logoap.png')}
        />
        <Text style={{textAlign:'center',fontWeight:'bold',marginTop:30,fontSize:30,marginBottom:-50}}>Sign Up</Text>
      <Formik
        initialValues={{ firstname: '',email: '',password: ''}}
        onSubmit={values => {
          console.log(values);
          // onSignUp(values.email, values.username, values.password);
        }}
        validationSchema={SignUpFormSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
          <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.firstname.length || values.firstname.length >= 2
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                style={styles.inputFieldText}
                placeholder="First_Name"
                placeholderTextColor="#979797"
                autoCapitalize="none"
                textContentType="firstname"
                onChangeText={handleChange('firstname')}
                onBlur={handleBlur('firstname')}
                value={values.firstname}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || isValid ? '#ccc' : 'red',
                },
              ]}>
      
              <TextInput
                style={styles.inputFieldText}
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
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                style={styles.inputFieldText}
                placeholder="Password"
                placeholderTextColor="#979797"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                style={styles.inputFieldText}
                placeholder="Password"
                placeholderTextColor="#979797"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                style={styles.inputFieldText}
                placeholder="Confirm Password"
                placeholderTextColor="#979797"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>



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
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
    top: 80,
    marginTop: 10,
  },
  inputFieldText: {
    fontSize: 15,
    padding: 5,
  },
  button: isValid => ({
    backgroundColor: isValid ? '#0096FF' : 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top: '100%',
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    marginTop:15
  }),
  signUpContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: '20%',
  },
  signInContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    top: 200,
  },
});
export default SignUpForm;
