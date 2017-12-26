import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

const ACTIVE_BUTTON_STYLE = [styles.largeWidgetStyle, styles.baseButton, styles.activeButton];
const INACTIVE_BUTTON_STYLE = [styles.largeWidgetStyle, styles.baseButton, styles.inactiveButton];

class Welcome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      typedUsername: false
    };
  }

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func
    }).isRequired,
  }

  static navigationOptions = {
    header: null
  };

  onExploreButtonPressed = () => {
    const { dispatch } = this.props.navigation;

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Explorer'
        })
      ]
    });

    dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Welcome!</Text>
        <Text style={styles.welcomeDescription}>To go ahead, enter with some GitHub username</Text>

        <TextInput
          style={[styles.largeWidgetStyle, styles.input]}
          placeholder="Type GitHub username"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={username => {
            this.setState({
              username,
              typedUsername: username.length > 0
            });
          }} />

        <TouchableOpacity
          style={this.state.typedUsername ? ACTIVE_BUTTON_STYLE : INACTIVE_BUTTON_STYLE}
          onPress={this.onExploreButtonPressed}
          disabled={!this.state.typedUsername}>
          <Text
            style={this.state.typedUsername ? styles.buttonTextActive : styles.buttonTextInactive}
          >Explore</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome;
