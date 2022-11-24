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

const CommonModal = ({modalVisible, alertBody,onRequestClose}) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onRequestClose}>
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
            onPress={onRequestClose}>
            <Text style={styles.textStyle}>OK</Text>
          </Pressable>
        </View>
      </View>
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
