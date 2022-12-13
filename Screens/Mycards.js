import { View, Text } from 'react-native'
import React from 'react'

const Mycards = () => {
  return (
    <View>
      <Text style={{alignSelf:'center',fontSize:30,fontWeight:'600',color:'black',marginTop:10}}>My cards</Text>
      <Text style={{alignSelf:'center',fontSize:30,fontWeight:'400',color:'black',justifySelf:'center',top:'300%'}}>No cards Available</Text>
    </View>
  )
}

export default Mycards