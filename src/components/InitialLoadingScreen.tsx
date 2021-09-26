import React from 'react';
import { Text } from 'react-native';

export interface InitialLoadingScreenProps {
  error?: string;
}

export function InitialLoadingScreen({ error }: InitialLoadingScreenProps) {
  return <Text>{error}</Text>;
}
