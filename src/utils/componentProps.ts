import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeProps } from '../views/Home';

export type RootStackParamList = {
  Home: HomeProps;
  Buy: HomeProps;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
