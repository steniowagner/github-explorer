import React, { Component } from 'react';
import createRootNavigator from 'routes';

import { getItemFromStorage } from 'utils/async-storage-manager';
import { GITHUB_USERNAME_KEY } from 'utils/global-keys';

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
      .then(isUserAlreadyPersisted => {
        this.setState({
          isUserAlreadyPersisted,
          isUserAlreadyChecked: true
        })
      });
  }

  checkUserAlreadyPersisted = () => {
    return getItemFromStorage(GITHUB_USERNAME_KEY);
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
