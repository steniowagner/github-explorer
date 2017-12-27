import { NavigationActions } from 'react-navigation';

export const navigate = (headerProps, destiantion, indexScreen = 0) => {
  const { dispatch } = headerProps;

  const resetAction = NavigationActions.reset({
    index: indexScreen,
    actions: [
      NavigationActions.navigate({
        routeName: destiantion
      })
    ]
  });

  dispatch(resetAction);
}
