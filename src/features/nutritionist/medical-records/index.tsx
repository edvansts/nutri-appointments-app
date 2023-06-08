import React from 'react';
import { MedicalRecordsContainer, PatientsList } from './styles';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { Keyboard, type ListRenderItemInfo, TouchableWithoutFeedback } from 'react-native';
import { Text } from '@styles/components/text';
import { StatusBar } from 'expo-status-bar';
import { useGetPatientsByName } from '../api/get-patients-by-name';
import { useDebouncedState } from '@hooks/utils/use-debounced-state';
import { PatientCard } from './components/patient-card';
import { type Patient } from 'src/types/patient';

const LIST_LIMIT = 15;

const MedicalRecords = () => {
  const {
    debouncedState: debouncedPatientNameQuery,
    state: pacientNameQuery,
    handleChange,
    isDebouncing,
  } = useDebouncedState('', {
    onDebounceChange: () => {
      setSize(0);
    },
    timeout: 1000,
  });

  const { colors } = useAppTheme();

  const { data, mutate, size, isLoading, setSize, isValidating } = useGetPatientsByName({
    patientName: debouncedPatientNameQuery,
    limit: LIST_LIMIT,
  });

  const patients = data ? data.map(({ patients }) => patients).flat() : [];

  const totalCount = data?.[0]?.totalCount;

  const hasMorePatients = typeof totalCount === 'number' && totalCount > size * LIST_LIMIT;

  const isRefreshing = isValidating && data && data.length === size;

  const isLoadingOrRefreshing = isLoading || isRefreshing || isDebouncing;

  const onListEndReached = () => {
    if (isLoadingOrRefreshing) {
      return;
    }

    mutate();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <MedicalRecordsContainer>
        <TextInput
          onChangeText={handleChange}
          value={pacientNameQuery}
          label="Buscar paciente"
          left={<TextInput.Icon icon="magnify" />}
          mode="outlined"
          outlineStyle={{ borderColor: colors.grayDark }}
          activeOutlineColor={colors.grayDark}
          style={{ color: colors.grayDark }}
        />

        <Text variant="titleMedium" color={colors.black} style={{ marginTop: 40 }}>
          Lista de Prontuários
        </Text>

        <PatientsList
          data={patients}
          keyExtractor={(item: Patient) => item.id}
          renderItem={({ item }: ListRenderItemInfo<Patient>) => (
            <PatientCard patient={item} marginVertical={4} />
          )}
          ListEmptyComponent={
            !isLoadingOrRefreshing ? (
              <Text variant="bodyMedium" textAlign="center" style={{ marginTop: 8 }}>
                Nenhum paciente encontrado.
              </Text>
            ) : null
          }
          onEndReachedThreshold={0.25}
          onEndReached={hasMorePatients ? onListEndReached : undefined}
          ListFooterComponent={
            isLoadingOrRefreshing ? (
              <ActivityIndicator style={{ marginTop: 10 }} color={colors.greenDarker} />
            ) : null
          }
        />

        <StatusBar backgroundColor={colors.greenDarker} />
      </MedicalRecordsContainer>
    </TouchableWithoutFeedback>
  );
};

export { MedicalRecords };
