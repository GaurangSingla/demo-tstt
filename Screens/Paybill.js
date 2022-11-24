import { View, Text } from 'react-native'
import React from 'react'
import PhoneInput from 'react-native-phone-number-input';
const Paybill = () => {
  return (
    <View>
     
      <Text style={{alignSelf:'center',fontSize:30,fontWeight:'600',color:'black'}}>Bill Pay</Text>
      <PhoneInput 
  
  
  defaultCode="IN"
  // defaultCode="DM"
  layout="first"

  onChangeText={(v) => setPhoneNumber(v)}
 
  placeholder={' Mobile Number '}
  
  withDarkTheme
  withShadow
  autoFocus
  containerStyle={{
    borderRadius: 10,
    width: '90%',
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'white',
    
    margin:10,
    alignSelf:'center',
    
  position:"relative",
   
  
  }}
  textInputStyle={{height: 45}}
  

/>
    </View>
  )
}

export default Paybill