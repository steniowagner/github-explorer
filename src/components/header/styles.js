import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: 54 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },

  title: {
    color: colors.primary,
    fontSize: fonts.regular,
    fontWeight: 'bold'
  }

});

export default styles;