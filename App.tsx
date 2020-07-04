import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_300Light,
} from '@expo-google-fonts/montserrat';
import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Colors from './constants/Colors';
import PaperTheme from './constants/PaperTheme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_300Light
  });

  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <PaperProvider theme={PaperTheme}>
        <StatusBar backgroundColor={Colors.light.tint} />
        <SafeAreaView style={{ flex: 1 }}>
          <Navigation colorScheme="light" />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
