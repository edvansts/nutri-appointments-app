import React from 'react';
import { Form, PersonalDataContainer, SubmitButton } from './styles';
import { Text } from '@styles/components/text';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { type SubmitHandler, useForm, Controller } from 'react-hook-form';
import { type PersonalDataFormType } from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CIVIL_STATUS_OPTIONS,
  ETHNICITY_OPTIONS,
  PERSONAL_DATA_FORM_SCHEMA,
  SCHOOLING_OPTIONS,
  SEX_OPTIONS,
} from '../../constants';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { Select } from '@components/select';
import { DatePickerInput } from 'react-native-paper-dates';
import { MaskedTextInput } from 'react-native-mask-text';

const PersonalData = () => {
  const { colors } = useAppTheme();

  const { control, handleSubmit, formState } = useForm<PersonalDataFormType>({
    resolver: zodResolver(PERSONAL_DATA_FORM_SCHEMA),
  });

  const handleSubmitForm: SubmitHandler<PersonalDataFormType> = (data) => {
    console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <PersonalDataContainer
          contentContainerStyle={{ paddingVertical: 36, paddingHorizontal: 12 }}
        >
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
              name="civilStatus"
              render={({ field: { onChange, value, ...field }, formState: { errors } }) => (
                <View>
                  <Select
                    onChange={onChange}
                    value={value}
                    options={CIVIL_STATUS_OPTIONS}
                    label="Estado civil"
                    mode="outlined"
                  />

                  <HelperText type="error" visible>
                    {errors.civilStatus?.message}
                  </HelperText>
                </View>
              )}
            />

            <Controller
              control={control}
              name="ethinicity"
              render={({ field: { onChange, value, ...field }, formState: { errors } }) => (
                <View>
                  <Select
                    onChange={onChange}
                    value={value}
                    options={ETHNICITY_OPTIONS}
                    label="Etnia"
                    mode="outlined"
                  />

                  <HelperText type="error" visible>
                    {errors.ethinicity?.message}
                  </HelperText>
                </View>
              )}
            />

            <Controller
              control={control}
              name="schooling"
              render={({ field: { onChange, value, ...field }, formState: { errors } }) => (
                <View>
                  <Select
                    onChange={onChange}
                    value={value}
                    options={SCHOOLING_OPTIONS}
                    label="Escolaridade"
                    mode="outlined"
                  />

                  <HelperText type="error" visible>
                    {errors.schooling?.message}
                  </HelperText>
                </View>
              )}
            />

            <Controller
              control={control}
              name="profession"
              render={({ field: { onChange, ...field }, formState: { errors } }) => (
                <View>
                  <TextInput
                    {...field}
                    onChangeText={onChange}
                    label="Profissão"
                    autoCapitalize="sentences"
                    mode="outlined"
                  />

                  <HelperText type="error" visible>
                    {errors.profession?.message}
                  </HelperText>
                </View>
              )}
            />

            <Controller
              control={control}
              name="nationality"
              render={({ field: { onChange, ...field }, formState: { errors } }) => (
                <View>
                  <TextInput
                    {...field}
                    onChangeText={onChange}
                    label="Nacionalidade"
                    autoCapitalize="sentences"
                    mode="outlined"
                  />

                  <HelperText type="error" visible>
                    {errors.nationality?.message}
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
                    withDateFormatInLabel={false}
                  />

                  <HelperText type="error" visible>
                    {errors.birthdayDate?.message}
                  </HelperText>
                </View>
              )}
            />

            <Controller
              control={control}
              name="address"
              render={({ field: { onChange, ...field }, formState: { errors } }) => (
                <View>
                  <TextInput
                    {...field}
                    onChangeText={onChange}
                    label="Endereço"
                    autoCapitalize="sentences"
                    mode="outlined"
                  />

                  <HelperText type="error" visible>
                    {errors.address?.message}
                  </HelperText>
                </View>
              )}
            />

            <Controller
              control={control}
              name="phoneNumber"
              render={({ field: { onChange, ...field }, formState: { errors } }) => (
                <View>
                  <TextInput
                    {...field}
                    onChangeText={onChange}
                    label="Telefone"
                    placeholder="99 9 9999 9999"
                    mode="outlined"
                    keyboardType="numeric"
                    error={!!errors.phoneNumber}
                    render={({ onChangeText, ...props }) => (
                      <MaskedTextInput
                        {...props}
                        onChangeText={(text, maskText) => {
                          onChangeText?.(maskText);
                        }}
                        ref={undefined}
                        mask="99 9 9999 9999"
                      />
                    )}
                  />

                  <HelperText type="error" visible>
                    {errors.phoneNumber?.message}
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
                    placeholder="999.999.999-99"
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
          </Form>
        </PersonalDataContainer>

        <SubmitButton
          color={colors.white}
          icon="arrow-right"
          visible={formState.isDirty}
          onPress={handleSubmit(handleSubmitForm)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export { PersonalData };