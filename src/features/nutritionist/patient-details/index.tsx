import React, { useEffect } from 'react';
import { PatientDetailsContainer, PatientInfoTitle } from './styles';
import { Text } from '@styles/components/text';
import { TouchableOpacity } from 'react-native';
import { useNutritionistTabsNavigator } from '@hooks/navigator/use-nutritionist-tabs-navigator';
import { useRoute } from '@react-navigation/native';
import { type NutritionistMainRouteProps } from '@routes/nutritionist/types';
import { useGetPatientById } from '../api/use-get-patient-by-id';
import { HelperText } from 'react-native-paper';
import { Loader } from '@components/loader';
import { PatientCard } from '../medical-records/components/patient-card';
import { NutritionalData } from './components/nutritional-data';

const PatientDetails = () => {
  const navigation = useNutritionistTabsNavigator();

  const {
    params: { patientId },
  } = useRoute<NutritionistMainRouteProps<'patientDetails'>>();

  const { data: patient, isLoading, error, status } = useGetPatientById(patientId);

  useEffect(() => {
    if (status === 'success' && patient) {
      navigation.setOptions({ title: patient.person?.name });
    }
  }, [status]);

  if (error && error instanceof Error) {
    const errorMessage = error instanceof Error ? error.message : error;

    return (
      <PatientDetailsContainer>
        <HelperText type="error" variant="bodyLarge">
          {errorMessage}
        </HelperText>
      </PatientDetailsContainer>
    );
  }

  if (isLoading || !patient) {
    return (
      <PatientDetailsContainer style={{ justifyContent: 'center' }}>
        <Loader size="large" />
      </PatientDetailsContainer>
    );
  }

  return (
    <PatientDetailsContainer>
      <PatientInfoTitle>
        <Text variant="titleMedium" fontWeight="600">
          Dados pessoais
        </Text>

        <TouchableOpacity
          style={{ paddingHorizontal: 4 }}
          onPress={() => {
            navigation.navigate('appointments');
          }}
        >
          <Text variant="titleSmall" fontWeight="500">
            Ver tudo
          </Text>
        </TouchableOpacity>
      </PatientInfoTitle>

      <PatientCard patient={patient} />

      <NutritionalData />
    </PatientDetailsContainer>
  );
};

export { PatientDetails };
