import { View, Text,StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';
import Tab_navi from '../android/Tab_navi';
import axios from 'axios';

const Verify = ({navigation}) => {
const [checked,setChecked]=useState(false);
const [checked1,setChecked1]=useState(false);
const postUser=() => {
  axios({
    method: 'post',
    url: 'https://dev-cim-api.tstt.co.tt/api/consumer/registration/accept-tnc',
       headers: {
      "Accept": "application/json",
      "Content-Type":"application/json",
      "Access-Medium":eyJpdiI6InlHRTFqNzhhMVF3MlJsRHc3RFBIdHc9PSIsInZhbHVlIjoicHRRdDZybTN6QWRSdDNzTE9aempRMUFIeDBtQzFtajlUczhBZFhqN1JBVjNvcGVZY2o2TDZteEFxbE9VRGtrRWlGaitmZVdtU05nUDNhTEVOenVLYkd3aCtFWG5sZnBCTFZwTC9uUldlREhOSTgwcmFRL3VXdUVxK3VTVHdRd0R1THFHWDBzYndXQ3kyaVNpMU1JYWpYQUNJb3lvUngvTFpydi90NTBvVjNyb0pucnpGcUhaS0c0WlNPSXlITGtIR2l2b0hPOW5WM1JFMk83WkdEaGozcWFZZXVqV2JScFAxb1psM0ZWcGVjc2RIZGt0YXd5TS9nUm1xOXgxeGFyRGgwTHdrNWIzRExhZ1hDeDUvTFV3YlFmUWRtY0d0eGNMY2tBRG9veGpselNVLyttSitnWUZNaXBQYnR1RTVqamZOeEt5R2dmWHkzYnpicFZweUVyUi80K2ZXbGRZQTJiYk5pWXpiT0Y1OFo3N0ROdXlPbS9WY2pQUDdxVFFqNVhhMThlY3puV3p0M0pja0VDNmR1a2RmNW5FN016SW43YTFMaU9oSS9TMGZiMzE2Q01UNzMwZmx2eHhuV20xekJGM2t6aWdSSkpZV0Zjd21ueUdnbGY4cUM0OUYzTUtOMEs1WXh2V1NCSXBBTURxd0JGM2JaTUdncDVaSHFCNkdjZUxnT0pFQ2pzUzkyTm9lbmJzdytLZjRPT3l4cTNSdGkrK0RmVnh4ZEgyVFQ3VVB0L3ZuRndrRmlwd0VRaHBkWm5pTi9ZemdZSVArT3VicW95RWVXbDF5M1dCZVh6UnNoVlBkdlVZSyttWVUwTHpZZi81VnhXOGRCaElpbVRxVDU3elIydTYvTC83aUpkTjltdDduQVhJUE5pNEQvZWIrd1NsaC9hbEwxQzNMb3cyMkswVnlSbDIyV0pwNXo5cjJsUlZ2eXBhMUZ3dHJYam1UOFJaTTBLbTdRTUpEdzh0UHBZWmJLZ3Q4SmRjb1pYejdLVWhlY2xpQ0VJbTcxSW9yL1M2cFN0TlJFMEVkMkJBMHEzMGhDSi9pKy9NS293dDlnMGswcVhYTjN5TnBFZz0iLCJtYWMiOiI4MzBlYzZiY2Q0NmNkMTdlMTFjZWIyMjRiNDk2MWNlMTNmMjE3ZGQ4ZTA3YmQ4NDU0MWM3Y2JhNjhlNmJkY2Q4IiwidGFnIjoiIn0= "" 
      ,"X-CSRF-TOKEN":" " ,
    }
  })
  .then(function (response) {
    // console.log("response", JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log("error", error)
  })
}
// const check=()=>{
//   if(checked&&checked1){
//   <TouchableOpacity  onPress={()=>navigation.navigate('Tab_navi')}>

//   </TouchableOpacity>
 
//   }
// }
 function next(){
  if(checked&&checked1){
    navigation.navigate('Tab_navi');
  }else{
    Alert.alert('click both')
  }
 }
  return (
  <>
  <Image
    style={{height:'100%',
    width:'100%',
    
    }}
        source={require('../src/assets/babyChild.jpg')}
      />
     <View style={{backgroundColor:'white',height:310,width:'100%',position:'absolute',top:"58%",borderRadius:10,padding:10,flex:1}}>
   <Text style={{color:'black',fontSize:20,alignSelf:'center'}}>Terms & Conditions</Text>
    <View style={{alignSelf:'center'}}>
     <CheckBox 
     title={ <Text style={{marginLeft:5,color:'black'}}>
        I agree to{' '}
        <Text style={{color: 'blue', fontSize:15, textDecorationLine: 'underline'}}>
          Mobile Application Terms and Conditions
        </Text>
      </Text>}
     checked={checked}
     checkedColor={'green'}
    
     onPress={()=>setChecked(!checked)}
     
     >
         
     </CheckBox >
     <CheckBox  style={{backgroundColor:'black'}}
  
     title={<Text style={{marginLeft:5,color:'black'}}>I am 18 or older</Text>}
     
     checked={checked1}
     checkedColor={'green'}
     onPress={()=>setChecked1(!checked1)}>
         
     </CheckBox>
    </View>
    <TouchableOpacity style={{backgroundColor:'green',height:60,borderRadius:10,alignSelf:'center',justifySelf:'center',width:'90%',marginTop:'3%'}}
    onPress={next}>
        <Text style={{alignSelf:'center',justifySelf:'center',fontSize:20,padding:15,color:"black"}}>Agree & proceed</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:'grey',height:60,borderRadius:10,alignSelf:'center',justifySelf:'center',width:'90%',margin:'1%'}}>
        <Text style={{alignSelf:'center',justifySelf:'center',fontSize:20,color:'green',marginTop:'5%'}}>Cancel</Text>
    </TouchableOpacity>
     </View>
 
 
 </>
  );
};

const styles=StyleSheet.create({

    options:{
        alignSelf:'flex-start',
        marginLeft:50,
        backgroundColor:'black'



    },
 




});
export default Verify;