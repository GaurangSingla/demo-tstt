import { View, Text, Image } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Promotion = () => {
  return (
    <View >
<<<<<<< Updated upstream

=======
      <View style={{flexDirection:'row'}}> 
       <Image style={{left:150,fontSize:40,alignSelf:'center'}} source={require('../src/assets/bmobileNewWhite.png')}></Image>
       <MaterialCommunityIcons style={{left:235,fontSize:40,alignSelf:'center'}} name="bell" size={25} />
       </View>
>>>>>>> Stashed changes
         
      <Text style={{top:80,fontSize:40,alignSelf:'center'}}>Promotions</Text>
     <Image style={{top:80,fontSize:40,alignSelf:'center',marginTop:20,padding:10}} source={require('../src/assets/Banner2.png')}></Image>
    </View>
  )
}

export default Promotion