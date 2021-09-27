import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../src/utils/componentProps';
import theme from '../src/utils/theme';

export interface RoundedButtonProps {
  title: string;
  borderRadius?: number;
  navigation?: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

export function RoundedButton({
  title,
  borderRadius = 2.5,
  navigation
}: RoundedButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { borderRadius }]}
      onPress={() => navigation?.navigate('Buy')}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.blue,
    paddingVertical: 10,
    width: '100%'
  },
  text: {
    color: 'white',
    fontFamily: theme.fonts.primary.semibold
  }
});
