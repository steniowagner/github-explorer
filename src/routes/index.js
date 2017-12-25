import { StackNavigator, TabNavigator } from 'react-navigation';

import Repositories from './pages/repositories';
import Organizations from './pages/organizations';
import Welcome from './pages/welcome';

const Routes = StackNavigator({
  'Welcome': {
    screen: Welcome
  },
  'Explorer': {
    screen: TabNavigator({
      Repositories: {
        screen: Repositories
      },
      Organizations: {
        screen: Organizations
      }
    })
  }
});

export default Routes;
