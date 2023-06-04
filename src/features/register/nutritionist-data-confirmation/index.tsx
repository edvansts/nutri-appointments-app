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
import { usePostCheckNutritionistFirstAccess } from '../api/use-post-check-nutritionist-first-access';
import { useRegisterStackNavigator } from '../../../hooks/navigator/use-register-stack-navigator';

const DATA_CONFIRMATION_FORM_SCHEMA = object({
  completeName: string({ required_error: requiredError }).min(5, 'Nome inválido'),
  crn: string({ required_error: requiredError }).min(3, 'Crn inválido'),
  birthdayDate: date({ required_error: requiredError }),
});

type NutritionistDataConfirmationFormType = TypeOf<typeof DATA_CONFIRMATION_FORM_SCHEMA>;

const NutritionistDataConfirmation = () => {
  const { colors } = useAppTheme();

  const navigation = useRegisterStackNavigator();

  const handleNavigateToAccessData = (data: {
    name: string;
    crn: string;
    birthdayDate: string;
  }) => {
    navigation.navigate('nutritionistAccessData', data);
  };

  const { checkNutritionistFirstAccess, error, isLoading } = usePostCheckNutritionistFirstAccess();

  const { control, handleSubmit, formState } = useForm<NutritionistDataConfirmationFormType>({
    defaultValues: { birthdayDate: undefined, completeName: '', crn: '' },
    resolver: zodResolver(DATA_CONFIRMATION_FORM_SCHEMA),
  });

  const handleSubmitForm: SubmitHandler<NutritionistDataConfirmationFormType> = async (data) => {
    checkNutritionistFirstAccess(
      {
        name: data.completeName,
        birthdayDate: data.birthdayDate.toISOString(),
        crn: data.crn,
      },
      {
        onSuccess: () => {
          handleNavigateToAccessData({
            birthdayDate: data.birthdayDate.toISOString(),
            crn: data.crn,
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
            Nutricionista
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
            name="crn"
            render={({ field: { onChange, ...field }, formState: { errors } }) => (
              <View>
                <TextInput
                  {...field}
                  onChangeText={onChange}
                  label="CRN"
                  placeholder="Insira seu CRN"
                  autoCapitalize="characters"
                  mode="outlined"
                />

                <HelperText type="error" visible>
                  {errors.crn?.message}
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

          <Text variant="labelSmall" style={{ textAlign: 'center', color: colors.redPure }}>
            {error?.message}
          </Text>

          <Button
            size="md"
            mode="contained"
            textColor={colors.white}
            style={{ borderRadius: 18, marginTop: 64 }}
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

export { NutritionistDataConfirmation };
