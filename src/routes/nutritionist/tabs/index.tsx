import React from 'react';

import type { NutritionistTabsParamsList } from './types';
import { Home } from '@features/nutritionist/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appointments } from '@features/nutritionist/appointments';
import { Profile } from '@features/nutritionist/profile';
import { type IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';
import { IconButton } from 'react-native-paper';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import ClinicalNotesSvg from '@assets/icon/clinical-notes.svg';
import { type SvgComponent } from 'src/types/utils';
import { Text } from '@styles/components/text';
import { View } from 'react-native';
import { BackButton } from '@components/back-button';
import { MedicalRecords } from '@features/nutritionist/medical-records';

const Tab = createBottomTabNavigator<NutritionistTabsParamsList>();

const TABS_RECORD: Record<
  keyof NutritionistTabsParamsList,
  { icon: IconSource; customIcon?: SvgComponent; label: string }
> = {
  home: { icon: 'home', label: 'Home' },
  appointments: { icon: 'calendar-today', label: 'Consultas' },
  medicalRecords: { icon: '', customIcon: ClinicalNotesSvg, label: 'Prontuários' },
  profile: { icon: 'account-circle', label: 'Perfil' },
};

const NutritionistTabsNavigator = () => {
  const { colors } = useAppTheme();

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const { icon, customIcon: CustomIcon } = TABS_RECORD[route.name];

          if (CustomIcon) {
            return <CustomIcon color={color} />;
          }

          return <IconButton icon={icon} iconColor={color} />;
        },
        tabBarActiveTintColor: colors.greenDarker,
        tabBarInactiveTintColor: colors.grayDark,
        tabBarShowLabel: true,
        tabBarLabel: ({ color, children }) => (
          <Text color={color} variant="labelSmall">
            {TABS_RECORD[route.name].label}
          </Text>
        ),
        tabBarStyle: {
          paddingHorizontal: 8,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: colors.grayLighter,
          height: 60,
        },
        headerShown: true,
        headerTitle: ({ children }) => (
          <Text variant="headlineSmall" color={colors.white}>
            {children}
          </Text>
        ),
        headerBackgroundContainerStyle: { backgroundColor: colors.greenDarker },
        headerBackground: (style) => (
          <View style={{ ...style, backgroundColor: colors.greenPure }}></View>
        ),
        headerLeft: (props) => <BackButton />,
      })}
    >
      <Tab.Screen name="home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen
        name="appointments"
        component={Appointments}
        options={({ route }) => ({
          title: TABS_RECORD[route.name].label,
        })}
      />
      <Tab.Screen
        name="medicalRecords"
        component={MedicalRecords}
        options={({ route }) => ({
          title: TABS_RECORD[route.name].label,
        })}
      />
      <Tab.Screen
        name="profile"
        options={({ route }) => ({
          title: TABS_RECORD[route.name].label,
        })}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export { NutritionistTabsNavigator };
