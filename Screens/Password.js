import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
const Password = () => {
  const passwordValidationSchema = Yup.object().shape({
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 6 characters'),
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [password,setPasspord]=useState('');
  return (
    <View>
   
      <Formik
        initialValues={{
          password: '',
        }}
        validationSchema={passwordValidationSchema}
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
                style={{backgroundColor:'white', fontSize: 13,borderWidth:1,borderColor:'#B5B5B5',
                padding: 8,
                height: 35,
                marginTop:2}}
                label="Password"
                placeholder="Password"
                placeholderStyle={{top:5,backgroundColor:'white'}}
                placeholderTextColor="#979797"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                onChangeText={password => setPasspord(password)}
                defaultValue={password}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={secureTextEntry ? false : true}
                right={
                  <TextInput.Icon
                  style={{marginTop:19}}
                    name={secureTextEntry ? 'eye' : 'eye-off'}
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);
                    }}
                  />
                }
              />
              <Text style={styles.error}>{errors.password}</Text>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Password;
const styles = StyleSheet.create({
  error: {
    color: 'red',
    alignSelf: 'center',
  },
  inputField: {
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: -95,
    borderWidth: 1,
    height: 50,
    borderColor:'#B5B5B5',
    borderWidth:2,
    backgroundColor:'white'
  },
});
