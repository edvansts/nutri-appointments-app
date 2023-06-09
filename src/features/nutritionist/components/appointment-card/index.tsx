import { Text } from '@styles/components/text';
import React from 'react';
import { type Appointment } from 'src/types/appointment';
import { AppointmentCardButton, DayInfo, Options, PatientInfo } from './styles';
import dayjs from 'dayjs';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { upperCaseFirstLetter } from '@utils/transform';

interface AppointmentCardProps {
  appointment: Appointment;
  marginVertical?: number;
}

const AppointmentCard = ({ appointment, marginVertical }: AppointmentCardProps) => {
  const { appointmentDate, patient } = appointment;

  const patientName = patient?.person?.name || '';
  const patientAge = patient?.person?.birthdayDate
    ? Math.abs(dayjs(patient.person.birthdayDate).diff(new Date(), 'year'))
    : '';

  const { colors } = useAppTheme();

  const appointmentDateDayJs = dayjs(appointmentDate);

  const weekDay = upperCaseFirstLetter(appointmentDateDayJs.format('ddd'));

  return (
    <AppointmentCardButton activeOpacity={0.6} style={{ marginVertical }}>
      <DayInfo>
        <Text color={colors.greenDarker} fontWeight="500" variant="bodySmall">
          {weekDay}
        </Text>
        <Text color={colors.greenDarker} variant="bodyLarge" fontWeight="500">
          {appointmentDateDayJs.format('DD')}
        </Text>
        <Text color={colors.greenDarker} fontWeight="500" variant="bodySmall">
          {appointmentDateDayJs.format('HH:mm')}
        </Text>
      </DayInfo>

      <PatientInfo>
        <Text color={colors.grayDark} fontWeight="500" variant="bodyMedium">
          {patientName}
        </Text>

        <Text color={colors.grayDark} fontWeight="500" variant="bodyMedium">
          {patientAge} anos
        </Text>
      </PatientInfo>

      <View>
        <Options android_ripple={{ color: colors.white, radius: 20 }}>
          <MaterialCommunityIcons name="dots-vertical" size={24} color={colors.grayDark} />
        </Options>
      </View>
    </AppointmentCardButton>
  );
};

export { AppointmentCard };
