import { queryClient } from '@config/react-query';
import Reactotron, { networking, openInEditor } from 'reactotron-react-native';
import { QueryClientManager, reactotronReactQuery } from 'reactotron-react-query';

const hostname = '192.168.0.4';

export const initReactotron = () => {
  if (!__DEV__) {
    return;
  }

  const queryClientManager = new QueryClientManager({
    queryClient,
  });

  Reactotron.configure({ host: hostname, name: 'NutriAppointments' })
    .use(reactotronReactQuery(queryClientManager))
    .configure({
      onDisconnect: () => {
        queryClientManager.unsubscribe();
      },
    })
    .use(openInEditor())
    .use(networking())
    .useReactNative()
    .connect();
};
