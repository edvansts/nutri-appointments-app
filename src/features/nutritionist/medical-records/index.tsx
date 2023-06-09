import React from 'react';
import { MedicalRecordsContainer } from './styles';
import { TextInput } from 'react-native-paper';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Text } from '@styles/components/text';
import { StatusBar } from 'expo-status-bar';
import { useDebouncedState } from '@hooks/utils/use-debounced-state';
import { PatientsList } from './components/patients-list';

const MedicalRecords = () => {
  const {
    debouncedState: debouncedPatientNameQuery,
    state: pacientNameQuery,
    handleChange,
    isDebouncing,
  } = useDebouncedState('', {
    timeout: 1000,
  });

  const { colors } = useAppTheme();

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

        <Text
          variant="titleMedium"
          color={colors.black}
          style={{ marginTop: 40, marginBottom: 10 }}
        >
          Lista de Prontuários
        </Text>

        <PatientsList isDebouncing={isDebouncing} patientName={debouncedPatientNameQuery} />

        <StatusBar backgroundColor={colors.greenDarker} />
      </MedicalRecordsContainer>
    </TouchableWithoutFeedback>
  );
};

export { MedicalRecords };
