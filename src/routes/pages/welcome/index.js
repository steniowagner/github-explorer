import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

import api from 'services/api';
import styles from './styles';

const ACTIVE_BUTTON_STYLE = [styles.largeWidgetStyle, styles.baseButton, styles.activeButton];
const INACTIVE_BUTTON_STYLE = [styles.largeWidgetStyle, styles.baseButton, styles.inactiveButton];

const ACTIVE_BUTTON_TEXT_STYLE = [styles.baseButtonText, styles.buttonTextActive];
const INACTIVE_BUTTON_TEXT_STYLE = [styles.baseButtonText, styles.buttonTextInactive];

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      typedUsername: false,
      isLoading: false,
      userExists: true
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
    this.setState({
      isLoading: true
    })

    this.getGitHubUserInfo()
      .then(() => {
        this.persistUsernameIntoStorage();
        this.performScreenNavigation();
      })
      .catch(() => {
        this.setState({
          userExists: false,
          typedUsername: false,
          isLoading: false
        });
      });
  }

  getGitHubUserInfo = async () => {
    const response = await api.get(`/users/${this.state.username}`);

    if (!response.ok) {
      throw Error();
    }
  }

  persistUsernameIntoStorage = async () => {
    await AsyncStorage.setItem('@GitHubExplorer:username', this.state.username);
  }

  performScreenNavigation = () => {
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
        <Text style={[styles.baseDescription, styles.welcomeDescription]}>To go ahead, enter with some GitHub username</Text>

        <TextInput
          style={[styles.largeWidgetStyle, styles.input]}
          placeholder="Type GitHub username"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={username => {
            this.setState({
              username,
              typedUsername: username.length > 0,
              userExists: true
            });
          }} />

        <TouchableOpacity
          style={this.state.typedUsername ? ACTIVE_BUTTON_STYLE : INACTIVE_BUTTON_STYLE}
          onPress={this.onExploreButtonPressed}
          disabled={!this.state.typedUsername}>
          <Text
            style={this.state.typedUsername ? ACTIVE_BUTTON_TEXT_STYLE : INACTIVE_BUTTON_TEXT_STYLE}
          >Explore</Text>
        </TouchableOpacity>

        {
          this.state.isLoading &&
          <ActivityIndicator
            size="small"
            color="#FFF"
            style={{ marginTop: 10 }} />
        }

        {
          !this.state.userExists &&
          <Text style={[styles.baseDescription, styles.errorDescription]}>
            The user "{this.state.username}" doesn't exists on GitHub. Try another username.
          </Text>
        }

      </View>
    );
  }
}

export default Welcome;
