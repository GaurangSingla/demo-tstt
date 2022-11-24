import { View, Text, Image } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Promotion = () => {
  return (
    <View >

         
      <Text style={{top:80,fontSize:40,alignSelf:'center'}}>Promotions</Text>
     <Image style={{top:80,fontSize:40,alignSelf:'center',marginTop:20,padding:10}} source={require('../src/assets/Banner2.png')}></Image>
    </View>
  )
}

export default Promotion