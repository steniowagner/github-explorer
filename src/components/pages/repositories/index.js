import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    )
  };

  render() {
    return (
      <View></View>
    );
  }
}

export default Repositories;
