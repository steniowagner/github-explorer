import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 3,
    shadowColor: colors.inactive,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: 160
  },

  avatar: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },

  title: {
    fontSize: fonts.small,
    color: colors.primary,
    fontWeight: 'bold',
    marginTop: 5,
  }
});

export default styles;
