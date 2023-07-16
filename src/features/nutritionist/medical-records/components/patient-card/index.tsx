import React, { useState } from 'react';
import { Image, type ImageSourcePropType } from 'react-native';
import { AdditionalInfo, MainInfo, PatientCardContainer, PatientInfo } from './styles';
import { useAssets } from 'expo-asset';
import { type Patient } from 'src/types/patient';
import { Text } from '@styles/components/text';
import { ETHNICITY_LABEL, SEX_LABEL } from '@constants/patient';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { getAge } from '@utils/date';
import dayjs from 'dayjs';
import { cpfMask } from '@utils/transform';

interface PatientCardProps {
  patient: Patient;
  marginVertical?: number;
  onPress?: (patientId: string) => void;
}

const PatientCard = ({ patient, marginVertical, onPress }: PatientCardProps) => {
  const [assets] = useAssets([require('../../../../../assets/img/patient-photo-placeholder.jpg')]);

  const [isShowingAdditionalInfo, setIsShowingAdditionalInfo] = useState(false);

  const { colors } = useAppTheme();

  const [patientPhotoPlaceholder] = assets || [];

  const {
    person,
    sex,
    ethnicity,
    nationality,
    naturality,
    phoneNumber,
    profession,
    completeAddress,
  } = patient;

  const { name = '', birthdayDate, cpf = '' } = person || {};

  const birthdayDateDayJs = dayjs(birthdayDate);

  const patientAge = birthdayDate ? getAge(birthdayDate) : '';

  return (
    <PatientCardContainer
      style={{ marginVertical }}
      activeOpacity={0.6}
      onPress={() => {
        if (onPress) {
          onPress(patient.id);
          return;
        }

        setIsShowingAdditionalInfo(!isShowingAdditionalInfo);
      }}
      onLongPress={() => {
        setIsShowingAdditionalInfo(!isShowingAdditionalInfo);
      }}
    >
      <MainInfo>
        {patientPhotoPlaceholder && (
          <Image
            style={{ borderRadius: 12 }}
            source={patientPhotoPlaceholder as ImageSourcePropType}
          />
        )}

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
      </MainInfo>

      {isShowingAdditionalInfo && (
        <AdditionalInfo>
          <Text variant="bodyMedium">
            Data de Nascimento: {birthdayDateDayJs.format('DD/MM/YYYY')}
          </Text>
          <Text variant="bodyMedium">Celular: {phoneNumber}</Text>
          <Text variant="bodyMedium">Profissão: {profession}</Text>
          <Text variant="bodyMedium">Etnia: {ETHNICITY_LABEL[ethnicity]}</Text>
          <Text variant="bodyMedium">Endereço: {completeAddress}</Text>
          <Text variant="bodyMedium">CPF: {cpfMask(cpf)}</Text>
          <Text variant="bodyMedium">
            {naturality} - {nationality}
          </Text>
        </AdditionalInfo>
      )}
    </PatientCardContainer>
  );
};

export { PatientCard };
