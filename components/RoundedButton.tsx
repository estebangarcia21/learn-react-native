import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../src/utils/theme';

export interface RoundedButtonProps {
  title: string;
  borderRadius?: number;
}

export function RoundedButton({
  title,
  borderRadius = 2.5
}: RoundedButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, { borderRadius }]}>
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
