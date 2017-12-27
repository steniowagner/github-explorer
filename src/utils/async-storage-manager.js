import { AsyncStorage } from 'react-native';

export const persistItem = (key, item) => {

}

export const removeItemFromStorage = (key) => {
  return AsyncStorage.removeItem(key);
}