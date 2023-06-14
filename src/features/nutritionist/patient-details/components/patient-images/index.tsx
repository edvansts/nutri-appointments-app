import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  BodyEvolutionImage,
  ImageContainer,
  ImagesList,
  PatientImagesContainer,
  PatientImagesTitle,
} from './styles';
import { Text } from '@styles/components/text';
import { useGetPatientBodyEvolution } from '@features/nutritionist/api/get-patient-body-evolution';
import { Loader } from '@components/loader';
import { HelperText } from 'react-native-paper';
import { type AxiosError } from 'axios';

interface PatientImagesProps {
  patientId: string;
}

const DEFAULT_IMAGES_LIMIT = 12;

const PatientImages = ({ patientId }: PatientImagesProps) => {
  const { data, isLoading, error } = useGetPatientBodyEvolution({
    limit: DEFAULT_IMAGES_LIMIT,
    patientId,
  });

  const bodyEvolutions = data ? data.pages.map(({ bodyEvolutions }) => bodyEvolutions).flat() : [];

  const hasBodyEvolutions = bodyEvolutions.length > 0;

  if (isLoading) {
    return (
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Loader />
      </View>
    );
  }

  return (
    <PatientImagesContainer>
      <PatientImagesTitle>
        <Text variant="titleMedium" fontWeight="600">
          Fotos
        </Text>

        {/* TODO Add patient all images screen  */}
        {hasBodyEvolutions && (
          <TouchableOpacity style={{ paddingHorizontal: 4 }}>
            <Text variant="titleSmall" fontWeight="500">
              Ver tudo
            </Text>
          </TouchableOpacity>
        )}
      </PatientImagesTitle>

      {hasBodyEvolutions ? (
        <ImagesList>
          {Array.from({ length: 12 }).map((_, index) => (
            <ImageContainer activeOpacity={0.75} key={index}>
              <BodyEvolutionImage
                resizeMode="cover"
                source={{ uri: 'https://via.placeholder.com/72x72' }}
              />
            </ImageContainer>
          ))}
        </ImagesList>
      ) : (
        <HelperText type={error ? 'error' : 'info'} style={{ textAlign: 'center' }}>
          {(error as AxiosError)?.message || 'Nenhuma imagem enviada pelo paciente.'}
        </HelperText>
      )}
    </PatientImagesContainer>
  );
};

export { PatientImages };
