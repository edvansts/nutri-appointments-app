import React, { useEffect } from 'react';
import { LoadingContainer, PatientDetailsContainer, PatientInfoTitle } from './styles';
import { Text } from '@styles/components/text';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useNutritionistTabsNavigator } from '@hooks/navigator/use-nutritionist-tabs-navigator';
import { useRoute } from '@react-navigation/native';
import { type NutritionistMainRouteProps } from '@routes/nutritionist/types';
import { useGetPatientById } from '../api/use-get-patient-by-id';
import { HelperText } from 'react-native-paper';
import { Loader } from '@components/loader';
import { RefreshControl } from '@components/refresh-control';
import { PatientImages } from './components/patient-images';
import { PatientCard } from '../medical-records/components/patient-card';
import { NutritionalData } from './components/nutritional-data';

const PatientDetails = () => {
  const navigation = useNutritionistTabsNavigator();

  const {
    params: { patientId },
  } = useRoute<NutritionistMainRouteProps<'patientDetails'>>();

  const {
    data: patient,
    isLoading,
    error,
    status,
    refetch,
    isRefetching,
  } = useGetPatientById(patientId);

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
      <LoadingContainer>
        <Loader size="large" />
      </LoadingContainer>
    );
  }

  return (
    <PatientDetailsContainer>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 36, paddingHorizontal: 16 }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      >
        <PatientInfoTitle>
          <Text variant="titleMedium" fontWeight="600">
            Dados pessoais
          </Text>

          {/* TODO Add onPress  */}
          <TouchableOpacity style={{ paddingHorizontal: 4 }}>
            <Text variant="titleSmall" fontWeight="500">
              Ver tudo
            </Text>
          </TouchableOpacity>
        </PatientInfoTitle>

        <PatientCard patient={patient} />

        <NutritionalData patient={patient} />

        <PatientImages patientId={patient.id} />
      </ScrollView>
    </PatientDetailsContainer>
  );
};

export { PatientDetails };
