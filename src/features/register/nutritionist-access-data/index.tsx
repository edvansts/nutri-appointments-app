import { Container } from '@styles/components/container';
import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { Form, Header } from './styles';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { type NutritionistDataConfirmationFormType } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { NUTRITIONIST_ACCESS_DATA_FORM_SCHEMA } from './constants';
import { Button } from '@styles/components/button';
import { useRoute } from '@react-navigation/native';
import { type RegisterRouteProps } from '@routes/register/types';
import { type PostConfirmNutritionistAccessDataResponse } from '../api/types';
import { useTokenStore } from '@store/token';
import { usePostConfirmNutritionistAccessData } from '../api/use-post-confirm-nutritionist-access-data';

const NutritionistAccessData = () => {
  const { colors } = useAppTheme();

  const { setToken } = useTokenStore();

  const { control, formState, handleSubmit } = useForm<NutritionistDataConfirmationFormType>({
    defaultValues: {},
    resolver: zodResolver(NUTRITIONIST_ACCESS_DATA_FORM_SCHEMA),
  });

  const { params } = useRoute<RegisterRouteProps<'nutritionistAccessData'>>();

  const setupUserData = (data: PostConfirmNutritionistAccessDataResponse) => {
    setToken(data.token);
  };

  const { postConfirmNutritionistAccessData, error, isLoading } =
    usePostConfirmNutritionistAccessData({
      onSuccess: setupUserData,
    });

  const handleSubmitForm: SubmitHandler<NutritionistDataConfirmationFormType> = async (data) => {
    const { birthdayDate, crn, name } = params;
    const { email, password } = data;

    postConfirmNutritionistAccessData({
      birthdayDate,
      crn,
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
            style={{ textAlign: 'center', color: colors.redPure, marginTop: 16 }}
          >
            {error?.message}
          </Text>

          <Button
            size="md"
            textColor={colors.white}
            style={{ borderRadius: 18, marginTop: 'auto' }}
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

export { NutritionistAccessData };
