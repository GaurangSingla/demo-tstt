import {View, Text, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addition, login, logout, subtraction} from '../redux/actions/action';
// import { Button } from 'react-native-paper'

const Counter = props => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Add Count" onPress={() => dispatch(login())} />
      <Text>{data.logintoken}</Text>
      <Button title="Subtract Count" onPress={() => dispatch(logout())} />
    </View>
  );
};

export default Counter;
