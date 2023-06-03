import Reactotron, { networking, openInEditor } from 'reactotron-react-native';

const hostname = '192.168.0.5';

export const initReactotron = () => {
  if (!__DEV__) {
    return;
  }

  Reactotron.configure({ host: hostname, name: 'NutriAppointments' })
    .use(openInEditor())
    .use(networking())
    .useReactNative()
    .connect();
};
