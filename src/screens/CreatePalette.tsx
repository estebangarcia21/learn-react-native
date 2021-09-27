import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from '../components/Navbar';

export type CreatePaletteProps = undefined;

export default function CreatePalette() {
  return (
    <View>
      <Navbar />

      <View style={styles.container}>
        <Text>CreatePalette</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
