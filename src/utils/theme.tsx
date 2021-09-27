import { StyleSheet } from 'react-native';

const fonts = {
  primary: {
    normal: 'OpenSans_400Regular',
    semibold: 'OpenSans_600SemiBold',
    bold: 'OpenSans_700Bold'
  },
  title: {
    bold: 'Poppins_700Bold'
  },
  subtitle: {
    semibold: 'Poppins_600SemiBold'
  }
};

const colors = {
  gray: '#e0e0e0',
  blue: '#004bec',
  shadow: 'rgba(0, 0, 0, 0.466)'
};

const styles = {
  text: StyleSheet.create({
    title: {
      fontSize: 40,
      fontFamily: fonts.title.bold,
      color: 'white'
    },
    subtitle: {
      fontSize: 20,
      fontFamily: fonts.subtitle.semibold,
      color: 'white'
    }
  })
};

export default {
  fonts,
  colors,
  styles
};
