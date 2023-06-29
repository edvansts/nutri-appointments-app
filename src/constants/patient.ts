export enum SEX {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export const SEX_LABEL: Record<SEX, string> = {
  FEMALE: 'Feminino',
  MALE: 'Masculino',
  OTHER: 'Outro',
};

export enum GENDER {
  MAN = 'MAN',
  WOMAN = 'FEMALE',
  NON_BINARY = 'NON_BINARY',
  OTHER = 'OTHER',
}

export const GENDER_LABEL: Record<GENDER, string> = {
  FEMALE: 'Feminino',
  MAN: 'Masculino',
  OTHER: 'Outro',
  NON_BINARY: 'Não binário',
};

export enum CIVIL_STATUS {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  SEPARATED = 'SEPARATED',
  DIVORCED = 'DIVORCED',
  WIDOWED = 'WIDOWED',
}

export const CIVIL_STATUS_LABEL: Record<CIVIL_STATUS, string> = {
  SINGLE: 'Solteiro',
  MARRIED: 'Casado',
  DIVORCED: 'Divorciado',
  SEPARATED: 'Separado',
  WIDOWED: 'Viúvo',
};

export enum ETHNICITY {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
  BROWN = 'BROWN',
  INDIGENOUS = 'INDIGENOUS',
  YELLOW = 'YELLOW',
}

export const ETHNICITY_LABEL: Record<ETHNICITY, string> = {
  WHITE: 'Branco',
  BLACK: 'Preto',
  BROWN: 'Pardo',
  INDIGENOUS: 'Indígena',
  YELLOW: 'Amarelo',
};

export enum SCHOOLING {
  UNEDUCATED = 'UNEDUCATED',
  INCOMPLETE_ELEMENTARY_SCHOOL = 'INCOMPLETE_ELEMENTARY_SCHOOL',
  COMPLETE_HIGHER_EDUCATION = 'COMPLETE_HIGHER_EDUCATION',
  COMPLETE_ELEMENTARY_EDUCATION = 'COMPLETE_ELEMENTARY_EDUCATION',
  INCOMPLETE_HIGHER_EDUCATION = 'INCOMPLETE_HIGHER_EDUCATION',
  COMPLETE_HIGH_SCHOOL = 'COMPLETE_HIGH_SCHOOL',
  INCOMPLETE_HIGH_SCHOOL = 'INCOMPLETE_HIGH_SCHOOL',
}

export const SCHOOLING_LABEL: Record<SCHOOLING, string> = {
  UNEDUCATED: 'Analfabeto',
  INCOMPLETE_ELEMENTARY_SCHOOL: 'Ensino fundamental incompleto',
  COMPLETE_ELEMENTARY_EDUCATION: 'Ensino fundamental completo',
  INCOMPLETE_HIGH_SCHOOL: 'Ensino médio incompleto',
  COMPLETE_HIGH_SCHOOL: 'Ensino médio completo',
  INCOMPLETE_HIGHER_EDUCATION: 'Ensino superior incompleto',
  COMPLETE_HIGHER_EDUCATION: 'Ensino superior completo',
};
