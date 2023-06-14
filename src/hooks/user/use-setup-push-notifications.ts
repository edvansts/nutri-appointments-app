import { colors } from '@styles/theme';
import { isDevice } from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { usePostCheckIn } from 'src/api/post-check-in';

export const useSetupPushNotifications = () => {
  const { mutate: checkIn } = usePostCheckIn();

  const setup = async () => {
    if (isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        alert('Falha ao ativar notificações');
        return;
      }

      try {
        const { data: token } = await Notifications.getExpoPushTokenAsync();

        checkIn({ pushToken: token });
      } catch (err) {
        alert(err);
      }
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: colors.greenDarker,
      });
    }
  };

  return { setup };
};
