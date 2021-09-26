import React from 'react';
import { InitialLoadingScreen } from './src/components/InitialLoadingScreen';
import useGoogleFonts from './src/utils/useGoogleFonts';
import Home from './src/views/Home';

export default function App() {
  const googleFontsLoaded = useGoogleFonts();

  if (!googleFontsLoaded) {
    return <InitialLoadingScreen />;
  }

  return <Home />;
}
