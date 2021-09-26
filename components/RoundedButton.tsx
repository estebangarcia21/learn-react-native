import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface RoundedButtonProps {
  title: string;
}

export function RoundedButton({ title }: RoundedButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    width: '100%',
    borderRadius: 2
  },
  text: {
    color: '#fff',
    fontWeight: '500'
  }
});
