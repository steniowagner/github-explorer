import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text
} from 'react-native';

import styles from './styles';

const Organization = ({ organization }) => (
  <View style={styles.container}>
    <Image
      style={styles.avatar}
      source={{ uri: organization.avatar_url }}
    />
    <Text style={styles.title}>{organization.login}</Text>
  </View>
);

Organization.propTypes = {
  organization: PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
};

export default Organization;