import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
//import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import Carousel from 'pinar';
const Welcome = ({navigation}) => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <Carousel
        dotStyle={{
          ...styles.dot,
          backgroundColor: '#d3f1dc',
          marginBottom:
            Dimensions.get('window').height < 700
              ? Dimensions.get('screen').height * 0.13
              : Platform.OS == 'android'
              ? Dimensions.get('screen').height * 0.15
              : Dimensions.get('screen').height * 0.2,
        }}
        activeDotStyle={{
          ...styles.dot,
          backgroundColor: '#00E556',
          marginBottom:
            Dimensions.get('window').height < 700
              ? Dimensions.get('screen').height * 0.13
              : Platform.OS == 'android'
              ? Dimensions.get('screen').height * 0.15
              : Dimensions.get('screen').height * 0.2,
        }}>
        <View style={styles.slide1}>
          <Image
            style={{
              height: '100%',
              width: '100%',
            }}
            source={require('../assets/firstwlcm.png')}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              marginTop:-95
            }}
            source={require('../assets/PayBill.png')}
          />
        </View>
      </Carousel>

      <TouchableOpacity
        style={{position: 'absolute', bottom: 10}}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            backgroundColor: '#00E556',
            textAlign: 'center',
            width: '100%',
            height: '100%',
            fontSize: 20,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: '35%',
            paddingRight: '35%',
            fontWeight: '900',
            borderRadius: 10,
            marginLeft:'7%',
            bottom:10
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a3c9a8',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#84b59f',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    bottom:10
  },
});
