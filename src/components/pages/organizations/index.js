import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="building" size={20} color={tintColor} />
    )
  };

  render() {
    return (
      <View></View>
    );
  }
}

export default Organizations;
