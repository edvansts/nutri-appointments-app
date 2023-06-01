import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../../../screens/sign-in';
import type { RegisterStackNavigationProps, RegisterStackParamList } from './types';
import { FirstAccess } from '../../../screens/first-access';
import { useAppTheme } from '../../../hooks/theme/use-app-theme';
import { Welcome } from '../../../screens/register/welcome';
import { NutritionistAccessType } from '../../../screens/register/nutritionist-access-type';
import { IconButton } from 'react-native-paper';

const Stack = createNativeStackNavigator<RegisterStackParamList>();

const RegisterStackNavigator = () => {
  const { colors } = useAppTheme();

  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen
        name="nutritionistAccessType"
        component={NutritionistAccessType}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: (props) => (
            <IconButton
              icon="arrow-left"
              iconColor={colors.white}
              style={
                {
                  borderRadius: 48 / 2,
                  backgroundColor: colors.greenDarker,
                  width: 48,
                  height: 48,
                } as any
              }
              onPress={
                props.canGoBack ? (navigation as RegisterStackNavigationProps).goBack : undefined
              }
            />
          ),
        })}
      />
      <Stack.Screen name="signIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen
        name="forgotPassword"
        component={FirstAccess}
        options={{ title: 'Esqueci a senha' }}
      />
      <Stack.Screen
        name="firstAccess"
        component={FirstAccess}
        options={{
          title: 'Primeiro acesso',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.grayDark,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export { RegisterStackNavigator };
