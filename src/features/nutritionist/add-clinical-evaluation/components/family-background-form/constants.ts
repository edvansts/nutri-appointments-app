import {
  SYMPTOM,
  SYMPTOM_LABEL,
  FAMILIAR_BACKGROUND,
  FAMILIAR_BACKGROUND_LABEL,
  CLINICAL_HISTORY,
  CLINICAL_HISTORY_LABEL,
} from '@constants/patient';
import { type GroupOption } from 'src/types/utils';

export const FAMILIAR_BACKGROUND_DISEASES_OPTIONS: GroupOption[] = Object.values(
  FAMILIAR_BACKGROUND
).map((disease) => ({
  label: FAMILIAR_BACKGROUND_LABEL[disease],
  value: disease,
  key: disease,
}));

export const CLINICAL_HISTORY_DISEASE_OPTIONS: GroupOption[] = Object.values(CLINICAL_HISTORY).map(
  (disease) => ({
    label: CLINICAL_HISTORY_LABEL[disease],
    value: disease,
    key: disease,
  })
);

export const SYMPTOM_OPTIONS: GroupOption[] = Object.values(SYMPTOM).map((symptom) => ({
  label: SYMPTOM_LABEL[symptom],
  value: symptom,
  key: symptom,
}));
