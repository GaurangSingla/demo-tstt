import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_KEY } from './string';

export async function setItem(item, value) {
  await AsyncStorage.setItem(item, value);
}
export async function getItem(item) {
  let result;
  await AsyncStorage.getItem(item, (err, value) => {
    if (err) throw new Error(err);
    else result = value;
  });
  return result;
}
export async function multiRemove(keys) {
  AsyncStorage.multiRemove(keys, err => {
    console.log('Stuff Removed');
    getAllKeys();
  });
}
export async function getAllKeys() {
  const keys= await AsyncStorage.getAllKeys();
  console.log(keys);
}

