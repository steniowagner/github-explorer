import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { removeItemFromStorage } from 'utils/async-storage-manager';
import { GITHUB_USERNAME_KEY } from '/utils/global-keys';
import { navigate } from 'utils/navigation-manager';

import styles from './styles';
import { colors } from 'styles'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func
    }).isRequired,
  }

  onLogoutButtonPressed = () => {
    removeItemFromStorage(GITHUB_USERNAME_KEY)
      .then(() => {
        navigate(this.props.navigation, 'Welcome');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GitHubExplorer</Text>
        <TouchableOpacity onPress={this.onLogoutButtonPressed}>
          <Icon name="exchange" size={16} color={colors.primary} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
