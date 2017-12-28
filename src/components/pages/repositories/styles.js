import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  noRepositoriesFound: {
    color: colors.primary,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },

  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;