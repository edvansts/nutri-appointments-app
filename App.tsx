import React from 'react';
import { Provider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { SwrProvider } from './src/config/swr';
import dayjs from 'dayjs';
import { theme } from './src/styles/theme';
import { initImageCacheDirectory } from './src/utils/image';
import { useFonts } from 'expo-font';
import { RootNavigator } from './src/routes';

dayjs.locale('pt-br');
initImageCacheDirectory();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Light': require('./src/assets/fonts/Inter-Light.ttf'),
    'Inter-Thin': require('./src/assets/fonts/Inter-Thin.ttf'),
    Inter: require('./src/assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./src/assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./src/assets/fonts/Inter-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <Provider theme={theme}>
      <SwrProvider>
        <RootNavigator />
      </SwrProvider>
    </Provider>
  );
}
