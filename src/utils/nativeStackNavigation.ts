import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CreatePaletteProps } from '../screens/CreatePalette';
import { HomeProps } from '../screens/Home';

export type RootStackParamList = {
  Home: HomeProps;
  CreatePalette: CreatePaletteProps;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
