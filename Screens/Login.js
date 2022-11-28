import React,{useState,useRef} from 'react'
import {View,Text,Image,StyleSheet,TextInput,Button, TouchableOpacity} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import SignUpScreen from './SignUpScreen';
const Login=({navigation})=>{
    const [phoneNumber, setPhoneNumber] = useState('');
    const phoneInput = useRef(null);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  
          handleLogin = async (email, password) => {
       try {
         await firebase.auth().signInWithEmailAndPassword(email, password);
       } catch (error) {
         alert(error.message);
       }
     }
   
 
    return (
      
        <>
    <Image
    style={styles.img}
        source={require('../src/assets/babyChild.jpg')}
      />
      <View style={styles.container}>
        
    <Text style={styles.txt}>Welcome To <Text style={styles.clr}>bMobile</Text></Text>
      </View>
      <PhoneInput 
  ref={phoneInput}
  defaultValue={phoneNumber}
  defaultCode="IN"
  // defaultCode="DM"
  layout="first"
  onChangeText={(v) => setValue(v)}
  onChangeFormattedText={(v) => setValue(v)}
  placeholder={' Mobile Number '}
  withDarkTheme
  withShadow
  autoFocus
  containerStyle={{
    borderRadius: 10,
    width: '90%',
    backgroundColor:'black',
    borderWidth:2,
    borderColor:'white',
    bottom:2,
    margin:10,
    alignSelf:'center',
    bottom:90,
  position:"relative",
   
  
  }}
  textInputStyle={{height: 35}}
  textContainerStyle={{}}

/>

<TextInput secureTextEntry={true} style={{backgroundColor:'black',borderWidth:2,borderColor:'white',  borderRadius: 10,bottom:90,
    width: '90%',  alignSelf:'center'}} placeholder={'password'} />
    
    <TouchableOpacity  style={{marginTop:20,alignContent:'center',bottom:85}} onPress={() => navigation.navigate('SignUpScreen')}>
       <Text
          style={styles.btn}>
       Sign In</Text>
    </TouchableOpacity>
    
   {/* <View style={{width:'40%',borderWidth:1,borderColor:'white',marginLeft:28,marginTop:20,flexDirection:'column'}}></View> */}
   {/* <Text style={{Color:'white',flexDirection:'column'}}>or</Text>
   <View style={{width:'40%',borderWidth:1,borderColor:'white',marginLeft:28,marginTop:20,flexDirection:'column'}}></View> */}
       <Text style={{color:"white",fontSize:20, textAlign:'center',marginTop:10,marginBottom:10,bottom:75}}>or</Text>
       <View style={{flexDirection:'row',alignItems:'center',marginLeft:30,bottom:20,fontSize:8}}>
       <TouchableOpacity style={{borderWidth:1,borderColor:'orange',bottom:60, width:'40%', borderRadius:10, padding:8}}>
       <Text style={{color:'white',textAlign:'center'}}>Sign In with google</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{borderWidth:1,borderColor:'blue',bottom:60, width:'40%', borderRadius:10, padding:8,fontSize:10}}>
       <Text style={{color:'white',textAlign:'center'}}>Sign In with facebook</Text>
       </TouchableOpacity></View>
 </>
    )
}
const styles=StyleSheet.create({
    img:{
        height:'100%',
        width:'100%',
        position:'absolute',
    },
    container:{
      
        backgroundColor:'black',
        borderRadius:20,
        height:'62%',
        top: 310, 
 

    },
    txt:{
        color:'white',
        alignSelf:'center',
        justifyContent:'center',
        padding:10,
        fontSize:27,
       
    },
    clr:{
        color:'green',
    },
    btn:{
        backgroundColor:'green',
        borderRadius:10,
        height:70,
        color:'white',
       alignSelf:'center',
       alignContent:'center',
        fontSize:30,
        width:'90%',
        textAlign:'center',
        justifyContent:'center',
        paddingTop:11
        
    }

    
})
export default Login;