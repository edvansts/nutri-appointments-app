import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const PatientImagesContainer = styled.View`
  margin-top: 40px;
`;

export const PatientImagesTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
`;

export const ImagesList = styled.View`
  background-color: ${colors.grayLight};
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ImageContainer = styled.TouchableOpacity`
  min-width: 72px;
  aspect-ratio: 1/1;
  flex: 1;
  max-width: 144px;
`;

export const BodyEvolutionImage = styled.Image`
  border-radius: 12px;
  width: auto;
  width: 100%;
  height: 100%;
`;
