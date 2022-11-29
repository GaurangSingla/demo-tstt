import { View, Text, TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
const Welcome = ({navigation}) => {
    const LENGTH=2;
    const [index, setIndex] = React.useState(0);

    const increaseIndex = () => {
      setIndex(Math.min(index + 1, LENGTH - 1));
    };
    const decreaseIndex = () => {
      setIndex(Math.max(index - 1, 0));
    };
  return (
    <View>
    <Image
        style={{
         justifyContent:'center',
         height:700,
         width:395
        }}
        source={require('../assets/PayBill.png')}
      />
      <AnimatedDotsCarousel
        length={LENGTH}
        currentIndex={index}
        maxIndicators={4}
        interpolateOpacityAndColor={true}
        activeIndicatorConfig={{
          color: 'lightgreen',
          marginTop: 3,
          opacity: 1,
          size: 8,
          
        }}
        inactiveIndicatorConfig={{
          color: 'black',
          margin: 3,
          opacity: 0.5,
          size: 8,
          
        }}
        decreasingDots={[
          {
            config: { color: 'white', margin: 3, opacity: 0.5, size: 6 },
            quantity: 1,
          },
          {
            config: { color: 'white', margin: 3, opacity: 0.5, size: 4 },
            quantity: 1,
          },
        ]}
      />
      <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
        <Text style={{marginTop:10,backgroundColor:'lightgreen',textAlign:'center',width:'90%',height:'20%',padding:5,marginLeft:20,fontWeight:'900',borderRadius:10}}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome;