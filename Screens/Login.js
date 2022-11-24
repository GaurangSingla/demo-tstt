import React,{useState,useEffect} from 'react'
import {View,Text,Image,StyleSheet,TextInput,Button, TouchableOpacity} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignUpScreen from './SignUpScreen';
import {SocialIcon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useIsFocused} from '@react-navigation/native';
import Tab_navi from '../android/Tab_navi';
import Verify from './Verify';

const Login=({navigation})=>{
  const isFocused = useIsFocused();
  const [usrName, setUsrName] = useState('');
  const [pass, setPass] = useState('');
  const [usrNameValid, setUsrNameValid] = useState(true);
  const [passValid, setPassValid] = useState(true);
  
 


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
  

/>

<TextInput secureTextEntry={true} style={{backgroundColor:'black',borderWidth:2,borderColor:'white',  borderRadius: 10,bottom:90,
    width: '90%',  alignSelf:'center'}} placeholder={'password'}  maxLength={12} minLength={8}/>
    
    <TouchableOpacity  style={{marginTop:20,alignContent:'center',bottom:85}} onPress={() => navigation.navigate('Verify')}>
       <Text
          style={styles.btn}>
       Sign In</Text>
    </TouchableOpacity>
    
   {/* <View style={{width:'40%',borderWidth:1,borderColor:'white',marginLeft:28,marginTop:20,flexDirection:'column'}}></View> */}
   {/* <Text style={{Color:'white',flexDirection:'column'}}>or</Text>
   <View style={{width:'40%',borderWidth:1,borderColor:'white',marginLeft:28,marginTop:20,flexDirection:'column'}}></View> */}
       <Text style={{color:"white",fontSize:20, textAlign:'center',marginTop:10,marginBottom:10,bottom:85}}>or</Text>
       <View style={{flexDirection:'row',alignItems:'center',marginLeft:10,bottom:20,fontSize:8}}>
       <TouchableOpacity style={{borderWidth:1,borderColor:'orange',bottom:60, width:'46%', borderRadius:10, padding:8,flexDirection:'row'}}>
       <Icon.Button name="google" backgroundColor={"orange"} size={15} onPress={()=>{Alert.alert("You are directed to our Facebook Page")}}>
</Icon.Button>
       <Text style={{color:'white',textAlign:'center',marginTop:5,marginLeft:2}}>Sign In with google</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{borderWidth:1,borderColor:'blue',bottom:60, width:'50%', borderRadius:10, padding:8,fontSize:10,marginLeft:10,flexDirection:'row'}}>
       <Icon.Button name="facebook" backgroundColor="#3358de" size={15} onPress={()=>{Alert.alert("You are directed to our Facebook Page")}}>
</Icon.Button>
       <Text style={{color:'white',textAlign:'center',marginTop:5,marginLeft:2}}>Sign In with facebook</Text>
       </TouchableOpacity></View>
       <View style={{bottom:70,color:'white',alignSelf:'center',flexDirection:'row'}}>
        <Text style={{color:'white'}}>Don't have an account</Text>
        <TouchableOpacity style={{bottom:50,fontSize:10,marginLeft:10}} onPress={()=>navigation.navigate('SignUpScreen')}>
      
       <Text style={{color:'green',textAlign:'center',marginTop:5,bottom:-45}}>Sign Up</Text>
       </TouchableOpacity>
       </View>
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