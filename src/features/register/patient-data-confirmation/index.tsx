import React from 'react';
import { Container } from '../../../styles/components/container';
import { Form, Header } from './styles';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { useAppTheme } from '../../../hooks/theme/use-app-theme';
import { type TypeOf, date, object, string } from 'zod';
import { requiredError } from '../../../constants/form';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';
import { Button } from '../../../styles/components/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterStackNavigator } from '../../../hooks/navigator/use-register-stack-navigator';
import { isValidCPF } from '@utils/validate';
import { usePostCheckPatientFirstAccess } from '../api/use-post-check-patient-first-access';
import { MaskedTextInput } from 'react-native-mask-text';

const DATA_CONFIRMATION_FORM_SCHEMA = object({
  completeName: string({ required_error: requiredError }).min(5, 'Nome inválido'),
  cpf: string({ required_error: requiredError }).refine(isValidCPF, 'CPF inválido'),
  birthdayDate: date({ required_error: requiredError }),
});

type PatientDataConfirmationFormType = TypeOf<typeof DATA_CONFIRMATION_FORM_SCHEMA>;

const PatientDataConfirmation = () => {
  const { colors } = useAppTheme();

  const navigation = useRegisterStackNavigator();

  const handleNavigateToAccessData = (data: {
    name: string;
    cpf: string;
    birthdayDate: string;
  }) => {
    navigation.navigate('patientAccessData', data);
  };

  const { postCheckPatientFirstAccess, error, isLoading } = usePostCheckPatientFirstAccess();

  const { control, handleSubmit, formState } = useForm<PatientDataConfirmationFormType>({
    defaultValues: { birthdayDate: undefined, completeName: '', cpf: '' },
    resolver: zodResolver(DATA_CONFIRMATION_FORM_SCHEMA),
  });

  const handleSubmitForm: SubmitHandler<PatientDataConfirmationFormType> = async (data) => {
    postCheckPatientFirstAccess(
      {
        name: data.completeName,
        birthdayDate: data.birthdayDate.toISOString(),
        cpf: data.cpf,
      },
      {
        onSuccess: () => {
          handleNavigateToAccessData({
            birthdayDate: data.birthdayDate.toISOString(),
            cpf: data.cpf,
            name: data.completeName,
          });
        },
      }
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Header>
          <Text variant="titleMedium" style={{ color: colors.greenDarker, fontWeight: '600' }}>
            Confirmação de dados
          </Text>
          <Text variant="titleMedium" style={{ color: colors.grayDark, fontWeight: '600' }}>
            Paciente
          </Text>
        </Header>

        <Form>
          <Text variant="bodyLarge" style={{ color: colors.black, marginBottom: 4 }}>
            Para configurar o seu primeiro acesso ao aplicativo confirme seus dados pessoais
          </Text>
          <Text variant="labelMedium" style={{ color: colors.purplePure, marginBottom: 24 }}>
            Atenção: o acesso é liberado apenas se você tiver um pré-cadastro ativo
          </Text>

          <Controller
            control={control}
            name="completeName"
            render={({ field: { onChange, ...field }, formState: { errors } }) => (
              <View>
                <TextInput
                  {...field}
                  onChangeText={onChange}
                  label="Nome completo"
                  placeholder="Insira seu nome"
                  autoCapitalize="sentences"
                  mode="outlined"
                />

                <HelperText type="error" visible>
                  {errors.completeName?.message}
                </HelperText>
              </View>
            )}
          />

          <Controller
            control={control}
            name="cpf"
            render={({ field: { onChange, ...field }, formState: { errors } }) => (
              <View>
                <TextInput
                  {...field}
                  onChangeText={onChange}
                  label="CPF"
                  placeholder="Insira seu CPF"
                  autoCapitalize="characters"
                  mode="outlined"
                  keyboardType="numeric"
                  error={!!errors.cpf}
                  render={({ onChangeText, ...props }) => (
                    <MaskedTextInput
                      {...props}
                      onChangeText={(text, maskText) => {
                        onChangeText?.(maskText);
                      }}
                      ref={undefined}
                      mask="999.999.999-99"
                    />
                  )}
                />

                <HelperText type="error" visible>
                  {errors.cpf?.message}
                </HelperText>
              </View>
            )}
          />

          <Controller
            control={control}
            name="birthdayDate"
            render={({ field: { onChange, ...field }, formState: { errors } }) => (
              <View>
                <DatePickerInput
                  {...field}
                  locale="pt-BR"
                  label="Data de Nascimento"
                  onChange={onChange}
                  inputMode="start"
                  mode="outlined"
                />

                <HelperText type="error">{errors.birthdayDate?.message}</HelperText>
              </View>
            )}
          />

          <Text
            variant="labelSmall"
            style={{ textAlign: 'center', color: colors.redPure, marginBottom: 'auto' }}
          >
            {error?.message}
          </Text>

          <Button
            size="md"
            mode="contained"
            textColor={colors.white}
            style={{ borderRadius: 18 }}
            onPress={handleSubmit(handleSubmitForm)}
            disabled={!formState.isDirty || isLoading}
            loading={isLoading}
          >
            Confirmar meus dados
          </Button>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export { PatientDataConfirmation };
