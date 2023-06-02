import React from 'react';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { usePostLogin } from '../../api/post-login';
import { useRegisterStackNavigator } from '../../hooks/navigator/use-register-stack-navigator';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string, type TypeOf } from 'zod';
import { invalidEmail, requiredError } from '../../constants/form';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { Link } from '../../styles/components/link';
import { Container } from '../../styles/components/container';
import { Button } from '../../styles/components/button';
import { useAppTheme } from '../../hooks/theme/use-app-theme';

const SIGN_IN_SCHEMA = object({
  email: string({ required_error: requiredError }).email(invalidEmail),
  password: string().min(6, requiredError),
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

  const { navigate } = useRegisterStackNavigator();

  const { error, isLoading, login } = usePostLogin();

  const { colors } = useAppTheme();

  const onSubmit: SubmitHandler<ISignInForm> = async (data) => {
    const { password, email } = data;

    try {
      login({ password, email });
    } catch (err) {}
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <View style={{ margin: 28 }}>
          <Text variant="headlineMedium" style={{ textAlign: 'center' }}>
            nutri+
          </Text>
          <Text variant="headlineMedium" style={{ textAlign: 'center' }}>
            Assistência Nutricional
          </Text>
          <Text variant="headlineMedium" style={{ textAlign: 'center' }}>
            HU - UFS
          </Text>

          {!(error == null) && <Text> - {error.message}</Text>}

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, ...field }, formState: { errors } }) => (
              <View>
                <TextInput
                  {...field}
                  onChangeText={onChange}
                  label="Email"
                  placeholder="maria@gmail.com"
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
                  secureTextEntry
                />

                <HelperText type="error" visible={!!errors.password?.message}>
                  {errors.password?.message}
                </HelperText>
              </View>
            )}
          />

          <Button
            textColor={colors.white}
            margin="10px 0px"
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
          >
            Entrar
          </Button>

          <Link
            onPress={() => {
              navigate('forgotPassword');
            }}
          >
            Esqueceu a senha ?
          </Link>

          <Link
            onPress={() => {
              navigate('firstAccess');
            }}
          >
            Primeiro acesso
          </Link>
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export { SignIn };
