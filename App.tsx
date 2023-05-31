import React, { useEffect, useState } from 'react';
import { Provider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { RootNavigator } from './src/config/navigator';
import { SwrProvider } from './src/config/swr';
import dayjs from 'dayjs';
import { theme } from './src/styles/theme';
import { initImageCacheDirectory } from './src/utils/image';

dayjs.locale('pt-br');
initImageCacheDirectory();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    setTimeout(hideSplashScreen, 1000);
  }, []);

  function hideSplashScreen() {
    SplashScreen.hideAsync();
    setAppIsReady(true);
  }

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider theme={theme}>
      <SwrProvider>
        <RootNavigator />
      </SwrProvider>
    </Provider>
  );
}
