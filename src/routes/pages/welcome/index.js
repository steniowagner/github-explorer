import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

class Welcome extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Welcome!</Text>
        <Text style={styles.welcomeDescription}>To go ahead, enter with some GitHub user</Text>

        <TextInput
          style={styles.input}
          placeholder="Type GitHub username" />

        <TouchableOpacity
          style={styles.button}
          onPress={() => { }}>
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome;
