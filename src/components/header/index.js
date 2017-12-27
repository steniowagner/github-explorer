import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';

import { removeItemFromStorage } from 'utils/async-storage-manager';
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

  onLogoutButtonClicked = () => {
    const { dispatch } = this.props.navigation;

    removeItemFromStorage('@GitHubExplorer:username')
      .then(() => {

      })


    /*const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Welcome'
        })
      ]
    });
 
    dispatch(resetAction);*/
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GitHubExplorer</Text>
        <TouchableOpacity onPress={this.onLogoutButtonClicked}>
          <Icon name="exchange" size={14} colors={colors.primary} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
