import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  ActivityIndicator,
  Text,
  FlatList,
  RefreshControl
} from 'react-native';

import Repository from './components/repository-list-item';
import githubApiService from 'services/github-api';
import styles from './styles';

import { getItemFromStorage } from 'utils/async-storage-manager';
import { GITHUB_USERNAME_KEY } from 'utils/global-keys';

class Repositories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repositories: [],
      isLoading: false,
      isRefresing: false,
    }
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    )
  };

  componentWillMount() {
    this.setState({
      isLoading: true
    });

    this.loadRepositories()
      .then(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  loadRepositories = async () => {
    this.setState({
      isRefresing: true
    })

    const username = await getItemFromStorage(GITHUB_USERNAME_KEY);
    const response = await githubApiService.get(`/users/${username}/repos`);

    this.setState({
      repositories: response.data,
      isRefresing: false
    });
  }

  renderRepositoriesList = () => (
    this.state.repositories.length
      ? this.renderRepositories()
      :
      <View style={styles.indicator}>
        <Text style={styles.empty}>No Repository found</Text>
      </View>
  )

  renderRepositories = () => (
    <FlatList
      data={this.state.repositories}
      keyExtractor={repository => repository.id}
      renderItem={({ item }) => <Repository repository={item} />}
      refreshControl={
        <RefreshControl
          refreshing={this.state.isRefresing}
          onRefresh={this.loadRepositories} />
      }
    />
  )

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.isLoading
            ? <View style={styles.indicator}>
              <ActivityIndicator
                size="small"
                color="#999" />
            </View>
            : this.renderRepositoriesList()
        }
      </View>
    );
  }
}

export default Repositories;
