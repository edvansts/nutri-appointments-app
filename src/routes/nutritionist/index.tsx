import React from 'react';

import type { NutritionistTabsParamsList } from './types';
import { Home } from '@features/nutritionist/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appointments } from '@features/nutritionist/appointments';
import { MedicalRecords } from '@features/nutritionist/medical-records';
import { Profile } from '@features/nutritionist/profile';
import { type IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';
import { IconButton, Text } from 'react-native-paper';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import ClinicalNotesSvg from '@assets/icon/clinical-notes.svg';
import { type SvgComponent } from 'src/types/utils';
import { StatusBar } from 'expo-status-bar';

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
        headerShown: false,
        tabBarActiveTintColor: colors.greenDarker,
        tabBarInactiveTintColor: colors.grayDark,
        tabBarShowLabel: true,
        tabBarLabel: ({ color }) => (
          <Text style={{ color }} variant="labelSmall">
            {TABS_RECORD[route.name].label}
          </Text>
        ),
        tabBarStyle: {
          paddingHorizontal: 8,
          paddingBottom: 8,
          backgroundColor: colors.grayLighter,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="appointments" component={Appointments} />
      <Tab.Screen name="medicalRecords" component={MedicalRecords} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export { NutritionistTabsNavigator };
