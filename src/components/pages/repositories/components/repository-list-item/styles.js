import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    padding: 15,
    borderRadius: 3,
    shadowColor: colors.inactive,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginHorizontal: 20,
    marginVertical: 8
  },

  title: {
    color: colors.primary,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },

  infoContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  info: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },

  infoIcon: {
    color: colors.dark,
  },

  infoText: {
    color: colors.dark,
    fontSize: fonts.small,
    marginLeft: 5
  }
});

export default styles;