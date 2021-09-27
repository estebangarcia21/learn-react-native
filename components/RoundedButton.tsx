import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { MarginProps } from '../src/utils/cssProps';
import theme from '../src/utils/theme';

export type RoundedButtonProps = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number;
  margins?: MarginProps;
  onPress?: (e: GestureResponderEvent) => void;
};

export function RoundedButton({
  title,
  borderRadius = 2.5,
  backgroundColor = 'white',
  textColor = 'black',
  margins,
  onPress
}: RoundedButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { borderRadius, backgroundColor, ...margins }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%'
  },
  text: {
    fontFamily: theme.fonts.primary.semibold
  }
});
