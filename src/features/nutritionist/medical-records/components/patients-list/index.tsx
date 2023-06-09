import React from 'react';
import { useGetPatientsByName } from '@features/nutritionist/api/get-patients-by-name';
import { PatientsListContainer } from './styles';
import { PatientCard } from '../patient-card';
import { type Patient } from 'src/types/patient';
import { type ListRenderItemInfo } from 'react-native';
import { Text } from '@styles/components/text';
import { HelperText } from 'react-native-paper';
import { Loader } from '@components/loader';
import { RefreshControl } from '@components/refresh-control';

const LIST_LIMIT = 15;

interface PatientListProps {
  isDebouncing: boolean;
  patientName: string;
}

function PatientsList({ isDebouncing, patientName }: PatientListProps) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isLoading,
    isRefetching,
    refetch,
  } = useGetPatientsByName({
    patientName,
    limit: LIST_LIMIT,
  });

  const patients = data ? data.pages.map(({ patients }) => patients).flat() : [];

  const onListEndReached = () => {
    if (isFetchingNextPage || isDebouncing) {
      return;
    }

    fetchNextPage();
  };

  if (error && error instanceof Error) {
    const errorMessage = error instanceof Error ? error.message : error;

    return (
      <HelperText type="error" variant="bodyMedium">
        {errorMessage}
      </HelperText>
    );
  }

  if (isLoading || isDebouncing) {
    return <Loader />;
  }

  return (
    <PatientsListContainer
      data={patients}
      keyExtractor={(item: Patient) => item.id}
      renderItem={({ item }: ListRenderItemInfo<Patient>) => (
        <PatientCard patient={item} marginVertical={4} />
      )}
      ListEmptyComponent={
        <Text variant="bodyMedium" textAlign="center" style={{ marginTop: 8 }}>
          Nenhum paciente encontrado.
        </Text>
      }
      refreshing={isRefetching}
      refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      onEndReachedThreshold={0.25}
      onEndReached={hasNextPage ? onListEndReached : undefined}
      ListFooterComponent={isFetchingNextPage ? <Loader /> : null}
    />
  );
}

export { PatientsList };
