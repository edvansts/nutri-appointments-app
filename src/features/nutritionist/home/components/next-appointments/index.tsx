/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { NextAppointmentsContainer, NextAppointmentsTitle } from './styles';
import { Text } from '@styles/components/text';
import { AppointmentCard } from '@features/nutritionist/components/appointment-card';
import { useGetNextNutritionistAppointments } from '@features/nutritionist/api/get-next-nutritionist-appointments';
import { useNutritionistInfo } from '@features/nutritionist/hooks/use-nutritionist-info';
import { ActivityIndicator } from 'react-native-paper';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { TouchableOpacity } from 'react-native';
import { APPOINTMENT_TYPE } from '@constants/appointments';
import { useNutritionistTabsNavigator } from '@hooks/navigator/use-nutritionist-tabs-navigator';

const APPOINTMENTS_LIMIT = 3;

const NextAppoinments = () => {
  const { nutritionist } = useNutritionistInfo();

  const { colors } = useAppTheme();

  const { isLoading: isLoadingAppointments, data } = useGetNextNutritionistAppointments({
    nutritionistId: nutritionist?.id,
    type: APPOINTMENT_TYPE.SCHEDULED,
    limit: APPOINTMENTS_LIMIT,
  });

  const appointments = data ? data.map(({ appointments }) => appointments).flat() : [];

  const { navigate } = useNutritionistTabsNavigator();

  return (
    <NextAppointmentsContainer>
      <NextAppointmentsTitle>
        <Text variant="titleMedium" fontWeight="600">
          Próximas consultas
        </Text>

        <TouchableOpacity
          style={{ paddingHorizontal: 4 }}
          onPress={() => {
            navigate('appointments');
          }}
        >
          <Text variant="titleSmall" fontWeight="500">
            Ver tudo
          </Text>
        </TouchableOpacity>
      </NextAppointmentsTitle>

      {isLoadingAppointments ? (
        <ActivityIndicator color={colors.greenDarker} />
      ) : appointments.length > 0 ? (
        appointments?.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))
      ) : (
        <Text variant="bodyMedium" textAlign="center">
          Nenhuma consulta marcada.
        </Text>
      )}
    </NextAppointmentsContainer>
  );
};

export { NextAppoinments };
