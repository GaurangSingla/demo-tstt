import {View, Text, FlatList, Dimensions} from 'react-native';
import React from 'react';
const {width}=Dimensions.get('window')
const Listhorizontal = ({data}) => {
  return (
    <FlatList
      data={data}
      
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      horizontal
      snapToOffsets={[...Array(data.length)].map((x,i)=> i *(width*0.8-40) + (i-1) * 40,)}
      snapToAlignment={'start'}
      scrollEventThrottle={16}
      decelerationRate="fast"
      style={{marginTop:20}}
      renderItem={({item}) => (
        <View style={{backgroundColor: item, height: width / 2.6, width:width*0.8,marginHorizontal:10,borderRadius:12}}
        
        >
            <Text>one</Text>
            </View>

      )}
    />
  );
};

export default Listhorizontal;
