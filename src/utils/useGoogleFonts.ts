import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts as inter_useFonts
} from '@expo-google-fonts/inter';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts as poppins_useFonts
} from '@expo-google-fonts/poppins';
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
  useFonts as opensans_useFonts
} from '@expo-google-fonts/open-sans';

/**
 * Loads the Google fonts used in the app.
 * @returns A boolean indicating whether all font families have been loaded.
 */
export default function useGoogleFonts() {
  const [interFontsLoaded] = inter_useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  const [poppinsFontsLoaded] = poppins_useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  const [openSansFontsLoaded] = opensans_useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold
  });

  return interFontsLoaded && poppinsFontsLoaded && openSansFontsLoaded;
}
