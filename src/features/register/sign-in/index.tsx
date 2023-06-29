import React from 'react';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { usePostLogin } from '../api/post-login';
import { useRegisterStackNavigator } from '../../../hooks/navigator/use-register-stack-navigator';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string, type TypeOf } from 'zod';
import { invalidEmail, requiredError } from '../../../constants/form';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { Link } from '../../../styles/components/link';
import { Container } from '../../../styles/components/container';
import { Button } from '../../../styles/components/button';
import { useAppTheme } from '../../../hooks/theme/use-app-theme';
import { Form, Header } from './styles';
import { useRoute } from '@react-navigation/native';
import { type RegisterRouteProps } from '@routes/register/types';
import { useTokenStore } from '@store/token';
import { useQueryClient } from '@tanstack/react-query';
import { GET_USER_INFO_CACHE } from 'src/api/cache';

const SIGN_IN_SCHEMA = object({
  email: string({ required_error: requiredError }).email(invalidEmail),
  password: string({ required_error: requiredError }).min(6, requiredError),
});

type ISignInForm = TypeOf<typeof SIGN_IN_SCHEMA>;

const SignIn = () => {
  const { control, handleSubmit } = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SIGN_IN_SCHEMA),
  });

  const queryClient = useQueryClient();

  const { setToken } = useTokenStore();

  const { navigate } = useRegisterStackNavigator();

  const { params } = useRoute<RegisterRouteProps<'signIn'>>();

  const { signInType } = params;

  const { isLoading, postLogin, error } = usePostLogin({
    onSuccess: (data) => {
      queryClient.removeQueries([GET_USER_INFO_CACHE]);
      setToken(data.token);
    },
  });

  const { colors } = useAppTheme();

  const signInTypeText = signInType === 'NUTRITIONIST' ? 'Nutricionista' : 'Paciente';

  const onSubmit: SubmitHandler<ISignInForm> = async (data) => {
    const { password, email } = data;

    postLogin({ password, email });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Header>
          <Text variant="titleMedium" style={{ color: colors.greenDarker, fontWeight: '600' }}>
            Acessar meu cadastro
          </Text>
          <Text variant="titleMedium" style={{ color: colors.grayDark, fontWeight: '600' }}>
            {signInTypeText}
          </Text>
        </Header>

        <Form>
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

                <HelperText type="error" visible={!!errors.email?.message}>
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
                  autoCapitalize="none"
                  mode="outlined"
                  placeholder="******"
                  secureTextEntry
                />

                <HelperText type="error" visible={!!errors.password?.message}>
                  {errors.password?.message}
                </HelperText>
              </View>
            )}
          />

          {!!error && (
            <Text variant="labelSmall" style={{ textAlign: 'center', color: colors.redPure }}>
              {error.message}
            </Text>
          )}

          <Link
            onPress={() => {
              navigate('forgotPassword');
            }}
            textAlign="center"
            variant="bodyLarge"
            style={{ marginBottom: 'auto' }}
          >
            Esqueci a senha
          </Link>

          <Button
            textColor={colors.white}
            style={{ borderRadius: 18 }}
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
            disabled={isLoading}
          >
            Acessar cadastro
          </Button>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export { SignIn };
