import { AsyncStorage } from 'react-native';

export const getItemFromStorage = async (key) => {
  return await AsyncStorage.getItem(key);
}

export const persistItemInStorage = async (key, item) => {
  await AsyncStorage.setItem(key, item);
}

export const removeItemFromStorage = (key) => {
  return AsyncStorage.removeItem(key);
}
