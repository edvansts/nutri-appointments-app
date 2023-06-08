import React, { useState } from 'react';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { StatusBar } from 'expo-status-bar';
import { APPOINTMENT_TYPE } from '@constants/appointments';
import { APPOINTMENT_TYPE_LABEL } from './constants';
import {
  AppointmentCardList,
  AppointmentTypeButton,
  AppointmentTypesList,
  AppointmentsContainer,
} from './styles';
import { Text } from '@styles/components/text';
import { useNutritionistInfo } from '../hooks/use-nutritionist-info';
import { useGetNextNutritionistAppointments } from '../api/get-next-nutritionist-appointments';
import { AppointmentCard } from '../components/appointment-card';
import { type ListRenderItemInfo } from 'react-native';
import { type Appointment } from 'src/types/appointment';
import { ActivityIndicator } from 'react-native-paper';

const LIST_LIMIT = 15;

const Appointments = () => {
  const { colors } = useAppTheme();

  const [appointmentChoosedType, setAppointmentChoosedType] = useState<APPOINTMENT_TYPE>(
    APPOINTMENT_TYPE.SCHEDULED
  );

  const { nutritionist } = useNutritionistInfo();

  const { data, mutate, size, isLoading, setSize, isValidating } =
    useGetNextNutritionistAppointments({
      nutritionistId: nutritionist?.id,
      type: appointmentChoosedType,
      limit: LIST_LIMIT,
    });

  const appointments = data ? data.map(({ appointments }) => appointments).flat() : [];

  const totalCount = data?.[0]?.totalCount;

  const hasMoreAppointments = typeof totalCount === 'number' && totalCount > size * LIST_LIMIT;

  const isRefreshing = isValidating && data && data.length === size;

  const isLoadingOrRefreshing = isLoading || isRefreshing;

  const onListEndReached = () => {
    if (isLoading) {
      return;
    }

    mutate();
  };

  const handleChangeAppointmentType = (type: APPOINTMENT_TYPE) => {
    setAppointmentChoosedType(type);
    setSize(1);
  };

  return (
    <AppointmentsContainer>
      <AppointmentTypesList>
        {Object.values(APPOINTMENT_TYPE).map((appointmentType) => (
          <AppointmentTypeButton
            key={appointmentType}
            onPress={() => {
              handleChangeAppointmentType(appointmentType);
            }}
            actived={appointmentType === appointmentChoosedType}
          >
            <Text
              variant="labelLarge"
              color={appointmentType === appointmentChoosedType ? colors.white : colors.grayDark}
            >
              {APPOINTMENT_TYPE_LABEL[appointmentType]}
            </Text>
          </AppointmentTypeButton>
        ))}
      </AppointmentTypesList>

      <AppointmentCardList
        data={appointments}
        keyExtractor={(item: Appointment) => item.id}
        renderItem={({ item }: ListRenderItemInfo<Appointment>) => (
          <AppointmentCard appointment={item} marginVertical={4} />
        )}
        ListEmptyComponent={
          !isLoadingOrRefreshing ? (
            <Text variant="bodyMedium" textAlign="center">
              Nenhuma consulta encontrada.
            </Text>
          ) : null
        }
        onEndReachedThreshold={0.25}
        onEndReached={hasMoreAppointments ? onListEndReached : undefined}
        ListFooterComponent={
          isLoadingOrRefreshing ? (
            <ActivityIndicator style={{ marginTop: 10 }} color={colors.greenDarker} />
          ) : null
        }
      />

      <StatusBar backgroundColor={colors.greenDarker} />
    </AppointmentsContainer>
  );
};

export { Appointments };
