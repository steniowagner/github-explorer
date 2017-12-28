import { Platform, StatusBar } from 'react-native';

const setupStatusBarColor = (iosStatusBarColor = 'light-content') => {
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('#000000');
  }

  if (Platform.OS === 'ios') {
    StatusBar.setBarStyle(iosStatusBarColor, true);
  }
}

export default setupStatusBarColor;