import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CommonModal = ({modalVisible, alertBody, onRequestClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onRequestClose}>
      {alertBody.dialogBoxType != 'Paybill' ? (
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {alertBody.dialogBoxType == 'Error' ? (
              <MaterialCommunityIcons
                name="alert"
                color={'red'}
                size={70}
                style={{bottom: '70%'}}
              />
            ) : (
              <MaterialCommunityIcons
                name="account"
                color={'green'}
                size={70}
                style={{bottom: '70%'}}
              />
            )}
            <Text style={styles.modalText}>{alertBody.dialogBoxType}</Text>
            <Text style={{bottom: '80%'}}> {alertBody.messageText} </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={
                alertBody && alertBody.confirmationFunction
                  ? alertBody.confirmationFunction
                  : onRequestClose
              }>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={styles.centeredView}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'lightgrey',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              height: 420,
              width: '90%',
              top: 25,
            }}>
            <Image
              style={{bottom: '8%'}}
              source={require('../src/assets/GreenTick.png')}
            />
            <Text style={{fontSize: 20, color: 'black', bottom: '10%'}}>
              {alertBody.headerText}
            </Text>
            <Text style={{bottom: '8%', textAlign: 'center', fontSize: 14}}>
              {alertBody.messageText}
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                width: '100%',
                flex: 1,
                borderRadius: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    height: 50,
                    width: '50%',
                    textAlign: 'center',
                    padding: 12,
                    justifyContent: 'center',
                  }}>
                  Payment Amount
                </Text>
                <Text
                  style={{
                    height: 50,
                    borderLeftWidth: 1,
                    borderLeftColor: 'grey',
                    textAlign: 'center',
                    padding: 12,
                  }}>
                  {'        TTD '}
                  {alertBody.amount}
                  {'.00'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderTopWidth: 1,
                  borderTopColor: 'grey',
                }}>
                <Text
                  style={{
                    height: 50,
                    width: '50%',
                    textAlign: 'center',
                    justifyContent: 'center',
                    padding: 12,
                  }}>
                  Convenience Fee
                </Text>
                <Text
                  style={{
                    borderLeftWidth: 1,
                    borderLeftColor: 'grey',
                    padding: 12,
                  }}>
                  {'        TTD '}
                  {'0.00'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderTopWidth: 1,
                  borderTopColor: 'grey',
                }}>
                <Text
                  style={{
                    height: 50,
                    width: '50%',
                    textAlign: 'center',
                    padding: 12,
                  }}>
                  Total Amount
                </Text>
                <Text style={{padding: 12, color: '#00E556'}}>
                  {'        TTD '}
                  {alertBody.amount}
                  {'.00'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                bottom: '-5%',
                justifyContent: 'space-between',
              }}>
              <Pressable
                style={{
                  backgroundColor: 'grey',
                  height: 45,
                  width: '50%',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={onRequestClose}>
                <Text style={{fontSize: 20, color: 'black'}}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={alertBody.handlerFunction}
                style={{
                  backgroundColor: '#00E556',
                  height: 45,
                  width: '50%',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 5,
                }}>
                <Text style={{fontSize: 20, color: 'black'}}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 170,
    width: '90%',
    top: 25,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '60%',
    backgroundColor: 'green',
    bottom: '60%',
  },

  buttonClose: {
    backgroundColor: '#00E556',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    bottom: '75%',
    fontWeight: '600',
    fontSize: 25,
    color: '#2E2F2F',
  },
});

export default CommonModal;
