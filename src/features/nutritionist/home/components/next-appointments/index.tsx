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

const NextAppoinments = () => {
  const { nutritionist } = useNutritionistInfo();

  const { colors } = useAppTheme();

  const { isLoading: isLoadingAppointments, data } = useGetNextNutritionistAppointments({
    nutritionistId: nutritionist?.id,
    type: 'SCHEDULED',
    limit: 3,
    offset: 0,
  });

  const { appointments } = data || {};

  const showAppointments = appointments && appointments.length > 0;

  if (isLoadingAppointments || appointments === undefined) {
    return <ActivityIndicator color={colors.greenDarker} />;
  }

  return (
    <NextAppointmentsContainer>
      <NextAppointmentsTitle>
        <Text variant="titleMedium" fontWeight="600">
          Próximas consultas
        </Text>

        <TouchableOpacity style={{ paddingHorizontal: 4 }}>
          <Text variant="titleSmall" fontWeight="500">
            Ver tudo
          </Text>
        </TouchableOpacity>
      </NextAppointmentsTitle>

      {showAppointments ? (
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
