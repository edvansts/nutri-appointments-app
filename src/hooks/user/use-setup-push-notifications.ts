import { colors } from '@styles/theme';
import { isDevice } from 'expo-device';
import {
  AndroidImportance,
  getExpoPushTokenAsync,
  getPermissionsAsync,
  requestPermissionsAsync,
  setNotificationChannelAsync,
} from 'expo-notifications';
import { Platform } from 'react-native';
import { usePostCheckIn } from 'src/api/post-check-in';

export const useSetupPushNotifications = () => {
  const { mutate: checkIn } = usePostCheckIn();

  const setup = async () => {
    if (isDevice) {
      const { status: existingStatus } = await getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        alert('Falha ao ativar notificações');
        return;
      }

      try {
        const { data: token } = await getExpoPushTokenAsync();
        console.log(token);

        checkIn({ pushToken: token });
      } catch (err) {
        alert(err);
      }
    }

    if (Platform.OS === 'android') {
      setNotificationChannelAsync('default', {
        name: 'default',
        importance: AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: colors.greenDarker,
      });
    }
  };

  return { setup };
};
