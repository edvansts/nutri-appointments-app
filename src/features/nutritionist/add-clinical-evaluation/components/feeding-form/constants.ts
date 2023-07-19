import { type SelectOption } from '@components/select';
import {
  EATING_BEHAVIOR,
  EATING_BEHAVIOR_LABEL,
  EATING_PLACE,
  EATING_PLACE_LABEL,
  ENVIRONMENT,
  ENVIRONMENT_LABEL,
} from '@constants/patient';
import { type GroupOption } from 'src/types/utils';

export const EATING_BEHAVIOR_OPTIONS: GroupOption[] = Object.values(EATING_BEHAVIOR).map(
  (eatingBehavior) => ({ label: EATING_BEHAVIOR_LABEL[eatingBehavior], value: eatingBehavior })
);

export const ENVIRONMENT_OPTIONS: GroupOption[] = Object.values(ENVIRONMENT).map((environment) => ({
  label: ENVIRONMENT_LABEL[environment],
  value: environment,
}));

export const EATING_PLACE_OPTIONS: Array<SelectOption<EATING_PLACE>> = Object.values(
  EATING_PLACE
).map((eatingPlace) => ({
  label: EATING_PLACE_LABEL[eatingPlace],
  value: eatingPlace,
  key: eatingPlace,
}));
