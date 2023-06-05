import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const AppointmentCardButton = styled.TouchableOpacity`
  display: flex;
  background-color: ${colors.grayLighter};
  border-radius: 12px;
  padding: 8px;
  flex-direction: row;
`;

export const DayInfo = styled.View`
  width: 72px;
  height: 72px;
  padding: 8px;
  background-color: ${colors.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PatientInfo = styled.View`
  margin-left: 16px;
  margin-right: 8px;
  flex: 1;
`;

export const Options = styled.Pressable`
  padding: 4px 10px;
  border-radius: 12px;
`;
