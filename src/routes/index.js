import { StackNavigator, TabNavigator } from 'react-navigation';
import React from 'react';

import Welcome from 'components/pages/welcome';
import Repositories from 'components/pages/repositories';
import Organizations from 'components/pages/organizations';

import Header from 'components/header';
import { colors } from 'styles';

const createRootNavigator = (userAlreadyPersisted = false) =>
  StackNavigator({
    Welcome: {
      screen: Welcome
    },
    Explorer: {
      screen: TabNavigator({
        Repositories: {
          screen: Repositories
        },
        Organizations: {
          screen: Organizations
        }
      }, {
          swipeEnabled: true,
          animationEnabled: true,
          tabBarPosition: 'bottom',
          tabBarOptions: {
            showLabel: true,
            showIcon: true,
            activeTintColor: colors.white,
            inactiveTintColor: colors.inactive,
            indicatorStyle: {
              borderBottomColor: '#ffffff',
              borderBottomWidth: 2,
            },
            style: {
              backgroundColor: colors.primary,
            }
          }
        })
    }
  },
    {
      initialRouteName: userAlreadyPersisted ? 'Explorer' : 'Welcome',
      navigationOptions: {
        header: props => <Header {...props} />,
      }
    }
  );

export default createRootNavigator;
