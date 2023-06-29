import { Container } from '@styles/components/container';
import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { Form, Header } from './styles';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { type PatientDataConfirmationFormType } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { PATIENT_ACCESS_DATA_FORM_SCHEMA } from './constants';
import { Button } from '@styles/components/button';
import { useRoute } from '@react-navigation/native';
import { type RegisterRouteProps } from '@routes/register/types';
import { type PostConfirmPatientAccessDataResponse } from '../api/types';
import { useTokenStore } from '@store/token';
import { usePostConfirmPatientAccessData } from '../api/use-post-confirm-patient-access-data';

const PatientAccessData = () => {
  const { colors } = useAppTheme();

  const { setToken } = useTokenStore();

  const { control, formState, handleSubmit } = useForm<PatientDataConfirmationFormType>({
    defaultValues: {},
    resolver: zodResolver(PATIENT_ACCESS_DATA_FORM_SCHEMA),
  });

  const { params } = useRoute<RegisterRouteProps<'patientAccessData'>>();

  const setupUserData = (data: PostConfirmPatientAccessDataResponse) => {
    setToken(data.token);
  };

  const { postConfirmPatientAccessData, error, isLoading } = usePostConfirmPatientAccessData({
    onSuccess: setupUserData,
  });

  const handleSubmitForm: SubmitHandler<PatientDataConfirmationFormType> = async (data) => {
    const { birthdayDate, cpf, name } = params;
    const { email, password } = data;

    postConfirmPatientAccessData({
      birthdayDate,
      cpf,
      email,
      name,
      password,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Header>
          <Text variant="titleMedium" style={{ color: colors.greenDarker, fontWeight: '600' }}>
            Dados de Acesso
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
            name="email"
            render={({ field: { onChange, ...field }, formState: { errors } }) => (
              <View>
                <TextInput
                  {...field}
                  onChangeText={onChange}
                  label="Email"
                  placeholder="Insira seu email"
                  autoCapitalize="none"
                  mode="outlined"
                />

                <HelperText type="error" visible>
                  {errors.email?.message}
                </HelperText>
              </View>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, ...field }, formState: { errors } }) => (
              <View>
                <TextInput
                  {...field}
                  onChangeText={onChange}
                  label="Senha"
                  placeholder="********"
                  autoCapitalize="none"
                  mode="outlined"
                  secureTextEntry
                  error={!!errors.password}
                />

                <HelperText type="error" visible>
                  {errors.password?.message}
                </HelperText>
              </View>
            )}
          />

          <Controller
            control={control}
            name="confirmedPassword"
            render={({ field: { onChange, ...field }, formState: { errors } }) => (
              <TextInput
                {...field}
                onChangeText={onChange}
                label="Confirme a sua senha"
                placeholder="********"
                autoCapitalize="none"
                mode="outlined"
                secureTextEntry
                error={!!errors.confirmedPassword}
              />
            )}
          />

          <Text
            variant="labelSmall"
            style={{
              textAlign: 'center',
              color: colors.redPure,
              marginTop: 16,
              marginBottom: 'auto',
            }}
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

export { PatientAccessData };
