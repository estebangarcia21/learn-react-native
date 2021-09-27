import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { ScreenProps } from '../utils/nativeStackNavigation';
import theme from '../utils/theme';

export type HomeProps = undefined;

export default function Home({ navigation }: ScreenProps<'Home'>) {
  return (
    <LinearGradient
      colors={['rgba(114,41,210,1) 0%', 'rgba(107,2,254,1) 100%']}
      style={styles.container}
    >
      <Text style={theme.styles.text.title}>Purplex</Text>
      <Text style={[theme.styles.text.subtitle, { textAlign: 'center' }]}>
        Color palette generator
      </Text>

      <View style={styles.buttonsContainer}>
        <RoundedButton
          title="Create a palette"
          borderRadius={999}
          backgroundColor="#2cdb92"
          onPress={() => navigation.navigate('CreatePalette')}
        />
        <RoundedButton
          title="View palettes"
          borderRadius={999}
          backgroundColor="#29cccc"
          margins={{
            marginTop: 10
          }}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  buttonsContainer: {
    flex: 0,
    flexDirection: 'column',
    marginVertical: 20,
    width: '100%'
  }
});
