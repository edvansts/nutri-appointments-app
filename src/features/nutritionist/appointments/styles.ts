import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const AppointmentTypesList = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-direction: row;
`;

export const AppointmentTypeButton = styled.TouchableOpacity<{ actived?: boolean }>`
  background-color: ${colors.white};
  border-color: ${colors.grayDark};
  border-width: 1px;
  height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0 16px;

  ${({ actived }) =>
    actived
      ? `
        background-color: ${colors.greenDarker};
        border-width: 0;
      `
      : ''}
`;

export const AppointmentsContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${colors.background};
  padding: 24px 16px;
`;

export const AppointmentCardList = styled.FlatList`
  gap: 8px;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;
