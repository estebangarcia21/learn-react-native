import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { InitialLoadingScreen } from './src/components/InitialLoadingScreen';
import { RootStackParamList } from './src/utils/nativeStackNavigation';
import useGoogleFonts from './src/utils/useGoogleFonts';
import Home from './src/views/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const googleFontsLoaded = useGoogleFonts();

  if (!googleFontsLoaded) {
    return <InitialLoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
