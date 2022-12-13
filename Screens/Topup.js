import { View, Text } from 'react-native'
import React,{useState,useRef} from 'react'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import PhoneInput from 'react-native-phone-number-input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
const Topup = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  return (
    <View>
    
      <Text style={{textAlign:'center',fontSize:30,top:20,color:'black',fontWeight:'5'}}>TopUp</Text>
      <View style={{backgroundColor:'black',height:150,borderRadius:20,top:30,width:350,alignSelf:'center'}}>
<Text style={{color:"white",padding:15,fontSize:15 }}>
  1.Choose Contact
  </Text>
  {/* <MaterialCommunityIcons style={{left:235,fontSize:40,alignSelf:'center'}} name="bell" size={15} /> */}
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
    bottom:10,
  position:"relative",
   
  
  }}
  
  textInputStyle={{height: 35}}
  textContainerStyle={{}}

/>

      </View>
      <View style={{backgroundColor:'black',height:300,borderRadius:20,top:45,width:350,alignSelf:'center'}}>
      <Text style={{color:"white",padding:15,fontSize:15 }}>
  2.Enter Amount
  </Text>
  <TextInput  onChangeText={(v) => setValue(v)} style={{backgroundColor:'black',width:300,borderWidth:1,borderColor:"white",alignSelf:'center',borderRadius:10, height:50}} placeholder={"Amount ($)*"} placeholderTextColor={"white"}>

  </TextInput>
  <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
<TouchableOpacity   style={{borderWidth:2,borderColor:'white',height:50,alignSelf:'center',width:90,borderRadius:10,backgroundColor:'lightgreen',padding:10}}>
  <Text style={{color:'green',fontSize:18,alignSelf:'center'}}>
    $20
  </Text>
</TouchableOpacity>
<TouchableOpacity  style={{borderWidth:2,borderColor:'white',height:50,alignSelf:'center',width:90,borderRadius:10,backgroundColor:'lightgreen',padding:10,marginLeft:10}}>
  <Text style={{color:'green',fontSize:18,alignSelf:'center'}}>
    $30
  </Text>
</TouchableOpacity>
<TouchableOpacity style={{borderWidth:2,borderColor:'white',height:50,alignSelf:'center',width:90,borderRadius:10,backgroundColor:'lightgreen',padding:10,marginLeft:10}} >
  <Text style={{color:'green',fontSize:18,alignSelf:'center'}}>
    $40
  </Text>
</TouchableOpacity>
  </View >
  <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
<TouchableOpacity style={{borderWidth:2,borderColor:'white',height:50,alignSelf:'center',width:90,borderRadius:10,backgroundColor:'lightgreen',padding:10}}>
  <Text style={{color:'green',fontSize:18,alignSelf:'center'}}>
    $50
  </Text>
</TouchableOpacity>
<TouchableOpacity  style={{borderWidth:2,borderColor:'white',height:50,alignSelf:'center',width:90,borderRadius:10,backgroundColor:'lightgreen',padding:10,marginLeft:10}}>
  <Text style={{color:'green',fontSize:18,alignSelf:'center'}}>
    $100
  </Text>
</TouchableOpacity>
<TouchableOpacity style={{borderWidth:2,borderColor:'white',height:50,alignSelf:'center',width:90,borderRadius:10,backgroundColor:'lightgreen',padding:10,marginLeft:10}} >
  <Text style={{color:'green',fontSize:18,alignSelf:'center'}}>
    $150
  </Text>
</TouchableOpacity>
  </View>
  <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
<TouchableOpacity style={{borderWidth:2,borderColor:'white',height:50,alignSelf:'center',width:90,borderRadius:10,backgroundColor:'lightgreen',padding:10}}>
  <Text style={{color:'green',fontSize:18,alignSelf:'center'}}>
    $200
  </Text>
</TouchableOpacity>
<TouchableOpacity  style={{borderWidth:2,borderColor:'white',height:50,alignSelf:'center',width:90,borderRadius:10,backgroundColor:'lightgreen',padding:10,marginLeft:10}}>
  <Text style={{color:'green',fontSize:18,alignSelf:'center'}}>
    $250
  </Text>
</TouchableOpacity>
<TouchableOpacity style={{borderWidth:2,borderColor:'white',height:50,alignSelf:'center',width:90,borderRadius:10,backgroundColor:'lightgreen',padding:10,marginLeft:10}} >
  <Text style={{color:'green',fontSize:18,alignSelf:'center'}}>
    $300
  </Text>
</TouchableOpacity>
  </View>
      </View>
        <View style={{flexDirection:'row',top:80,alignSelf:'center'}}>
      <TouchableOpacity style={{borderWidth:2,borderColor:'white',height:65,alignSelf:'center',backgroundColor:'grey',width:170,borderRadius:10,padding:10}}>
     <Text style={{color:'black',alignSelf:'center',justifySelf:"center",fontSize:20,marginTop:6}}>
   Reset
     </Text>
      </TouchableOpacity >
      <TouchableOpacity style={{borderWidth:2,borderColor:'white',height:65,alignSelf:'center',width:170,borderRadius:10,backgroundColor:'green',padding:10}}>
      <Text style={{color:'black',alignSelf:'center',justifySelf:"center",fontSize:20,marginTop:6}}>
   Proceed
     </Text>
        </TouchableOpacity>
      
</View>

    </View>
  );
};

export default Topup;
