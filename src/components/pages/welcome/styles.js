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

  baseDescription: {
    fontSize: fonts.regular,
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'center'
  },

  welcomeDescription: {
    color: colors.white
  },

  errorDescription: {
    color: colors.error
  },

  largeWidgetStyle: {
    alignSelf: 'stretch',
    height: 44,
    borderRadius: 3,
    marginTop: 10,
  },

  input: {
    backgroundColor: colors.white,
    fontSize: fonts.small,
    paddingHorizontal: 20
  },

  baseButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  activeButton: {
    backgroundColor: colors.secondary,
  },

  inactiveButton: {
    backgroundColor: colors.inactive
  },

  baseButtonText: {
    fontSize: fonts.small,
    fontWeight: 'bold'
  },

  buttonTextActive: {
    color: colors.white,
  },

  buttonTextInactive: {
    color: colors.light
  }

});

export default styles;
