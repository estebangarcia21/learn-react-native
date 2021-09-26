import theme from '@app/utils/theme';
import useGoogleFonts from '@app/utils/useGoogleFonts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const googleFontsLoaded = useGoogleFonts();

  if (!googleFontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.overview}>
        <Text style={styles.addonText}>@frhs_fullstack</Text>
        <Text style={[styles.title, { marginVertical: 4 }]}>$0.00</Text>
      </View>
      <View style={{ flex: 4 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  overview: {
    flex: 2,
    backgroundColor: '#004bec',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    color: 'white',
    fontSize: 34
  },
  addonText: {
    fontSize: 14,
    color: theme.colors.grayText,
    fontFamily: 'Inter_400Regular'
  },
  text: {
    fontSize: 34,
    fontWeight: '600',
    marginBottom: 20
  }
});
