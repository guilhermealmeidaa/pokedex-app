import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Router} from './src/routes/routes';
import {useFonts} from 'expo-font';
import React, {useCallback} from 'react';
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import {Text} from 'react-native';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_400Regular,
  });

  if (__DEV__) {
    import('./config/ReactotronConfig').then(() =>
      console.log('Reactotron Configured'),
    );
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Router />;
}
