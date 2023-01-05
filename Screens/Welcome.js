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
import { RFValue } from 'react-native-responsive-fontsize';
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
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
              height: responsiveScreenHeight(100),
              width: responsiveScreenWidth(100),
            
            }}
            source={require('../assets/firstwlcm.png')}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            style={{
              height: responsiveScreenHeight(100),
              width: responsiveScreenWidth(100),
             
            }}
            source={require('../assets/PayBill.png')}
          />
        </View>
      </Carousel>

      <TouchableOpacity
        style={{position: 'absolute', bottom: RFValue(30),alignSelf:'center',justifyContent:'center'}}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            backgroundColor: '#00E556',
            textAlign: 'center',
            fontSize: RFValue(25),
            fontWeight: '900',
            borderRadius: RFValue(15),
            justifyContent:'center',
             height:responsiveHeight(8.5)
             ,
             paddingVertical:RFValue(10),

             width:responsiveWidth(70)
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
