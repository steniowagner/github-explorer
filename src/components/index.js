import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import createRootNavigator from 'routes';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserAlreadyPersisted: false,
      isUserAlreadyChecked: false
    };
  }

  componentWillMount() {
    this.checkUserAlreadyPersisted()
      .then(res => {
        this.setState({
          isUserAlreadyPersisted: res,
          isUserAlreadyChecked: true
        })
      });
  }

  checkUserAlreadyPersisted = async () => {
    const user = await AsyncStorage.getItem('@GitHubExplorer:username');
    return user !== null;
  }

  render() {
    if (!this.state.isUserAlreadyChecked) {
      return null;
    }

    const ScreenLayout = createRootNavigator(this.state.isUserAlreadyPersisted);

    return (
      <ScreenLayout />
    );
  }
}

export default AppContainer;
