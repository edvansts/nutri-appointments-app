import React from 'react';
import { Image, type ImageSourcePropType } from 'react-native';
import { PatientCardContainer, PatientInfo } from './styles';
import { useAssets } from 'expo-asset';
import { type Patient } from 'src/types/patient';
import { Text } from '@styles/components/text';
import dayjs from 'dayjs';
import { SEX_LABEL } from '@constants/patient';
import { useAppTheme } from '@hooks/theme/use-app-theme';

interface PatientCardProps {
  patient: Patient;
  marginVertical?: number;
}

const PatientCard = ({ patient, marginVertical }: PatientCardProps) => {
  const [assets] = useAssets([require('../../../../../assets/img/patient-photo-placeholder.jpg')]);

  const { colors } = useAppTheme();

  const [patientPhotoPlaceholder] = assets || [];

  const { person, sex } = patient;

  const { name = '', birthdayDate } = person || {};

  const patientAge = birthdayDate ? Math.abs(dayjs(birthdayDate).diff(new Date(), 'year')) : '';

  return (
    <PatientCardContainer style={{ marginVertical }} activeOpacity={0.75}>
      <Image style={{ borderRadius: 12 }} source={patientPhotoPlaceholder as ImageSourcePropType} />

      <PatientInfo>
        <Text color={colors.grayDark} variant="bodyMedium" fontWeight="500">
          {name}
        </Text>
        <Text color={colors.grayDark} variant="bodyMedium" fontWeight="500">
          {patientAge} anos
        </Text>
        <Text color={colors.grayDark} variant="bodyMedium" fontWeight="500">
          {SEX_LABEL[sex]}
        </Text>
      </PatientInfo>
    </PatientCardContainer>
  );
};

export { PatientCard };
