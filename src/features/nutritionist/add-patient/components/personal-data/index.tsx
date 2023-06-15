import React, { useState } from 'react';
import { Form, PersonalDataContainer, SubmitButton } from './styles';
import { Text } from '@styles/components/text';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { type SubmitHandler, useForm, Controller } from 'react-hook-form';
import { type PersonalDataFormType } from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { PERSONAL_DATA_FORM_SCHEMA, SEX_OPTIONS } from '../../constants';
import { View } from 'react-native';
import { HelperText, List, TextInput } from 'react-native-paper';
import { SEX, SEX_LABEL } from '@constants/patient';
import { Select } from '@components/select';

const PersonalData = () => {
  const { colors } = useAppTheme();

  const [isSexDropdownOpened, setIsSexDropdownOpened] = useState(false);

  const { control, handleSubmit, formState } = useForm<PersonalDataFormType>({
    resolver: zodResolver(PERSONAL_DATA_FORM_SCHEMA),
  });

  const handleSubmitForm: SubmitHandler<PersonalDataFormType> = (data) => {
    console.log(data);
  };

  return (
    <PersonalDataContainer>
      <Text variant="titleMedium" fontWeight="600" color={colors.black}>
        Dados pessoais
      </Text>
      <Form>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, ...field }, formState: { errors } }) => (
            <View>
              <TextInput
                {...field}
                onChangeText={onChange}
                label="Nome"
                autoCapitalize="sentences"
                mode="outlined"
              />

              <HelperText type="error" visible>
                {errors.name?.message}
              </HelperText>
            </View>
          )}
        />

        <Controller
          control={control}
          name="socialName"
          render={({ field: { onChange, ...field }, formState: { errors } }) => (
            <View>
              <TextInput
                {...field}
                onChangeText={onChange}
                label="Nome Social"
                autoCapitalize="sentences"
                mode="outlined"
              />

              <HelperText type="error" visible>
                {errors.socialName?.message}
              </HelperText>
            </View>
          )}
        />

        <Controller
          control={control}
          name="sex"
          render={({ field: { onChange, value, ...field }, formState: { errors } }) => (
            <View>
              <Select
                onChange={onChange}
                value={value}
                options={SEX_OPTIONS}
                label="Sexo"
                mode="outlined"
              />

              <HelperText type="error" visible>
                {errors.sex?.message}
              </HelperText>
            </View>
          )}
        />

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, ...field }, formState: { errors } }) => (
            <View>
              <TextInput
                {...field}
                onChangeText={onChange}
                label="Nome"
                autoCapitalize="sentences"
                mode="outlined"
              />

              <HelperText type="error" visible>
                {errors.name?.message}
              </HelperText>
            </View>
          )}
        />

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, ...field }, formState: { errors } }) => (
            <View>
              <TextInput
                {...field}
                onChangeText={onChange}
                label="Nome"
                autoCapitalize="sentences"
                mode="outlined"
              />

              <HelperText type="error" visible>
                {errors.name?.message}
              </HelperText>
            </View>
          )}
        />

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, ...field }, formState: { errors } }) => (
            <View>
              <TextInput
                {...field}
                onChangeText={onChange}
                label="Nome"
                autoCapitalize="sentences"
                mode="outlined"
              />

              <HelperText type="error" visible>
                {errors.name?.message}
              </HelperText>
            </View>
          )}
        />

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, ...field }, formState: { errors } }) => (
            <View>
              <TextInput
                {...field}
                onChangeText={onChange}
                label="Nome"
                autoCapitalize="sentences"
                mode="outlined"
              />

              <HelperText type="error" visible>
                {errors.name?.message}
              </HelperText>
            </View>
          )}
        />

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, ...field }, formState: { errors } }) => (
            <View>
              <TextInput
                {...field}
                onChangeText={onChange}
                label="Nome"
                autoCapitalize="sentences"
                mode="outlined"
              />

              <HelperText type="error" visible>
                {errors.name?.message}
              </HelperText>
            </View>
          )}
        />
      </Form>

      <SubmitButton
        style={{ marginLeft: 'auto' }}
        icon="arrow-right"
        iconColor={colors.white}
        containerColor={colors.greenDarker}
        isDirty={formState.isDirty}
      />
    </PersonalDataContainer>
  );
};

export { PersonalData };
