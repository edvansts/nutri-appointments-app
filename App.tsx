import React, { useEffect, useState } from 'react';
import { Provider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { RootNavigator } from './src/config/navigator';
import { SwrProvider } from './src/config/swr';
import dayjs from 'dayjs';

dayjs.locale('pt-br');

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
    <Provider>
      <SwrProvider>
        <RootNavigator />
      </SwrProvider>
    </Provider>
  );
}
