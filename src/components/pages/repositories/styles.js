import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;