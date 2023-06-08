export enum SEX {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export enum GENDER {
  MAN = 'MAN',
  WOMAN = 'FEMALE',
  NON_BINARY = 'NON_BINARY',
  OTHER = 'OTHER',
}

export enum CIVIL_STATUS {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  SEPARATED = 'SEPARATED',
  DIVORCED = 'DIVORCED',
  WIDOWED = 'WIDOWED',
}

export const SEX_LABEL: Record<SEX, string> = {
  FEMALE: 'Feminino',
  MALE: 'Masculino',
  OTHER: 'Outro',
};
