import { View, Text,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Home = () => {
  return (
    <View>
     <TouchableOpacity  style={{marginTop:20,alignContent:'center',bottom:85}} onPress={() => navigation.navigate('Tab_navi')}>
       <Text
          style={{  backgroundColor:'grey',
          borderRadius:10,
          height:50,
          color:'white',
         alignSelf:'center',
         alignContent:'center',
          fontSize:18,
          justifyContent:'center',
          width:'60%',
          textAlign:'center',
          justifyContent:'center',
          paddingTop:11,top:130}}>
       Add new Account</Text>
     
    </TouchableOpacity>
    <View style={{flexDirection:'row',marginHorizontal:47}}> 
      
       <TouchableOpacity  style={{marginTop:20,bottom:85}} onPress={() => navigation.navigate('Tab_navi')}>
     
       <Text
      style={{  backgroundColor:'grey',
          borderRadius:10,
          height:130,
          color:'white',
         alignSelf:'center',
         alignContent:'center',
          fontSize:18,
          justifyContent:'center',
          width:'139%',
          textAlignVertical:'center',
          textAlign:'center',
          justifyContent:'center',
          paddingTop:11,top:130}}>
       Prepaid Top Up</Text>
     
    </TouchableOpacity>
    <TouchableOpacity  style={{marginTop:20,bottom:85,marginLeft:80}} onPress={() => navigation.navigate('Tab_navi')}>
      
       <Text
          style={{  backgroundColor:'grey',
          borderRadius:10,
          height:130,
          color:'white',
         alignSelf:'center',
         alignContent:'center',
          fontSize:18,
          width:'250%',
          textAlignVertical:'center',
          textAlign:'center',
          justifyContent:'center',
          paddingTop:11,top:130}}>
       Pay Bills</Text>
     
    </TouchableOpacity>
       </View>
       <View style={{flexDirection:'row',marginHorizontal:72}}> 
       {/* <MaterialCommunityIcons style={{left:235,fontSize:40,alignSelf:'center'}} name="bell" size={25} /> */}
       <TouchableOpacity  style={{marginTop:20,bottom:85}} onPress={() => navigation.navigate('Tab_navi')}>
       <Text
          style={{  backgroundColor:'grey',
          borderRadius:10,
          height:130,
          color:'white',
         alignSelf:'center',
         alignContent:'center',
          fontSize:18,
          justifyContent:'center',
          width:'225%',
          textAlignVertical:'center',
          textAlign:'center',
          paddingTop:11,top:130}}>
       My Cards</Text>
     
    </TouchableOpacity>
    <TouchableOpacity  style={{marginTop:20,alignContent:'center',bottom:85,marginLeft:65}} onPress={() => navigation.navigate('Tab_navi')}>
       <Text
    
          style={{  backgroundColor:'grey',
          borderRadius:10,
          height:130,
          color:'white',
         alignSelf:'center',
         alignContent:'center',
          fontSize:18,
          justifyContent:'center',
          width:'115%',
        marginLeft:2,
          textAlign:'center',
         textAlignVertical:'center',
          paddingTop:11,top:130}}>
       Transaction History</Text>
     
    </TouchableOpacity>
       </View>
    </View>
  )
}

export default Home;