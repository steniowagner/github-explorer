import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  welcomeTitle: {
    fontSize: fonts.big,
    color: colors.white,
    fontWeight: 'bold'
  },

  welcomeDescription: {
    fontSize: fonts.regular,
    color: colors.white,
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'center'
  },

  input: {
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    height: 44,
    borderRadius: 3,
    marginTop: 10,
    fontSize: fonts.small,
    paddingHorizontal: 20
  },

  button: {
    backgroundColor: colors.secondary,
    alignSelf: 'stretch',
    height: 44,
    borderRadius: 3,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: fonts.small,
    color: colors.white,
    fontWeight: 'bold'
  }
});

export default styles;