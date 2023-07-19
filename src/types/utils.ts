import { type FunctionComponent } from 'react';
import { type SvgProps } from 'react-native-svg';

export type SvgComponent = FunctionComponent<SvgProps>;

export interface GroupOption<T = string> {
  label: string;
  value: T;
  key?: string;
}
