import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import Organization from './components/organization-list-item';
import githubApiService from 'services/github-api';
import styles from './styles';

import { getItemFromStorage } from 'utils/async-storage-manager';
import { GITHUB_USERNAME_KEY } from 'utils/global-keys';

class Organizations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organizations: [],
      isLoading: false
    }
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="building" size={20} color={tintColor} />
    )
  };

  componentWillMount() {
    this.setState({
      isLoading: true
    });

    this.loadOrganizations()
      .then(() => {
        this.setState({
          isLoading: false
        })
      });
  }

  loadOrganizations = async () => {
    const username = await getItemFromStorage(GITHUB_USERNAME_KEY);
    const response = await githubApiService.get(`/users/${username}/orgs`);

    this.setState({
      organizations: response.data
    });
  }

  renderOrganizationsList = () => (
    this.state.organizations.length
      ? this.renderOrganizations()
      : <View style={styles.indicator}>
        <Text style={styles.empty}>No Organziations found</Text>
      </View>
  )

  renderOrganizations = () => (
    this.state.organizations.map(organization => (
      <Organization
        key={organization.id}
        organization={organization} />
    ))
  )

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {
          this.state.isLoading
            ? <ActivityIndicator size="small" color="#999" style={styles.loadingIndicator} />
            : this.renderOrganizationsList()
        }
      </ScrollView>
    );
  }
}

export default Organizations;
