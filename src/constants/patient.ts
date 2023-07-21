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
  COMPLETE_ELEMENTARY_EDUCATION = 'COMPLETE_ELEMENTARY_EDUCATION',
  INCOMPLETE_HIGH_SCHOOL = 'INCOMPLETE_HIGH_SCHOOL',
  COMPLETE_HIGH_SCHOOL = 'COMPLETE_HIGH_SCHOOL',
  INCOMPLETE_HIGHER_EDUCATION = 'INCOMPLETE_HIGHER_EDUCATION',
  COMPLETE_HIGHER_EDUCATION = 'COMPLETE_HIGHER_EDUCATION',
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

export enum SMOKER_STATUS {
  ACTIVE = 'ACTIVE',
  FORMER = 'FORMER',
  INACTIVE = 'INACTIVE',
}

export enum ALCOHOLIC_STATUS {
  ACTIVE = 'ACTIVE',
  FORMER = 'FORMER',
  INACTIVE = 'INACTIVE',
}

export enum EATING_BEHAVIOR {
  HYPERPHAGIC = 'HYPERPHAGIC',
  NIBBLER = 'NIBBLER',
  NIGHT_HUNGER = 'NIGHT_HUNGER',
  EMOTIONAL = 'EMOTIONAL',
  LONG_FASTS = 'LONG_FASTS',
}

export const EATING_BEHAVIOR_LABEL: Record<EATING_BEHAVIOR, string> = {
  HYPERPHAGIC: 'Hiperfágico',
  NIBBLER: 'Beliscador',
  NIGHT_HUNGER: 'Fome noturna',
  EMOTIONAL: 'Emocional',
  LONG_FASTS: 'Longos jejuns seguidos de refeições hipercalóricas',
};

export enum ENVIRONMENT {
  CALM = 'CALM',
  ACCOMPANIED = 'ACCOMPANIED',
  AGITATED = 'AGITATED',
  ALONE = 'ALONE',
}

export const ENVIRONMENT_LABEL: Record<ENVIRONMENT, string> = {
  CALM: 'Calmo e silencioso',
  ACCOMPANIED: 'Acompanhado',
  AGITATED: 'Agitado, com rádio ou tv ligados',
  ALONE: 'Sozinho',
};

export enum EATING_PLACE {
  HOUSE = 'HOUSE',
  WORK = 'WORK',
  RESTAURANT = 'RESTAURANT',
  OTHER_PEOPLE_HOUSE = 'OTHER_PEOPLE_HOUSE',
}

export const EATING_PLACE_LABEL: Record<EATING_PLACE, string> = {
  HOUSE: 'Casa',
  WORK: 'Trabalho',
  RESTAURANT: 'Restaurante',
  OTHER_PEOPLE_HOUSE: 'Na casa de outra pessoa',
};

export enum FAMILIAR_BACKGROUND {
  SAH = 'SAH',
  DM = 'DM',
  OBESITY = 'OBESITY',
  CARDIOPATHIES = 'CARDIOPATHIES',
  CANCER = 'CANCER',
  AMI = 'AMI',
  THYROID_DISEASES = 'THYROID_DISEASES',
  KIDNEY_DISEASES = 'KIDNEY_DISEASES',
  OTHER = 'OTHER',
}

export const FAMILIAR_BACKGROUND_LABEL: Record<FAMILIAR_BACKGROUND, string> = {
  SAH: 'Hipertensão Arterial Sistêmica (HAS)',
  DM: 'Diabetes Mellitus (DM)',
  OBESITY: 'Obesidade',
  CARDIOPATHIES: 'Cardiopatias',
  CANCER: 'Câncer',
  AMI: 'Infarto agudo do miocárdio (IAM)',
  THYROID_DISEASES: 'Doenças tireoidianas',
  KIDNEY_DISEASES: 'Doenças renais',
  OTHER: 'Outras',
};

export enum CLINICAL_HISTORY {
  SAH = 'SAH',
  DM = 'DM',
  DYSLIPIDEMIA = 'DYSLIPIDEMIA',
  CVD = 'DCV',
  CARDIOPATHIES = 'CARDIOPATHIES',
  CANCER = 'CANCER',
  THYROID_DISEASES = 'THYROID_DISEASES',
  KIDNEY_DISEASES = 'KIDNEY_DISEASES',
  GASTRITIS = 'GASTRITIS',
  GERD = 'GERD',
  HEPATIC_STEATOSIS = 'HEPATIC_STEATOSIS',
  OVERWEIGHT = 'OVERWEIGHT',
  OTHER = 'OTHER',
}

export const CLINICAL_HISTORY_LABEL: Record<CLINICAL_HISTORY, string> = {
  SAH: 'Hipertensão Arterial Sistêmica (HAS)',
  DM: 'Diabetes Mellitus (DM)',
  DYSLIPIDEMIA: 'Dislipdemia',
  CARDIOPATHIES: 'Cardiopatias',
  CANCER: 'Câncer',
  DCV: 'Doenças cardiovasculares (DCV)',
  THYROID_DISEASES: 'Doenças tireoidianas',
  KIDNEY_DISEASES: 'Doenças renais',
  GASTRITIS: 'Gastrite',
  GERD: 'Doença do refluxo gastroesofágico (DRGE)',
  HEPATIC_STEATOSIS: 'Esteatose hepática',
  OVERWEIGHT: 'Excesso de peso',
  OTHER: 'Outras',
};

export enum SYMPTOM {
  CONSTIPATION = 'CONSTIPATION',
  HEARTBURN = 'HEARTBURN',
  DIARRHEA = 'DIARRHEA',
  FLATULENCE = 'FLATULENCE',
  NAUSEA = 'NAUSEA',
  VOMITING = 'VOMITING',
  CHOKING = 'CHOKING',
  DIFFICULTY_CHEWING = 'DIFFICULTY_CHEWING',
  OTHER = 'OTHER',
}

export const SYMPTOM_LABEL: Record<SYMPTOM, string> = {
  CONSTIPATION: 'Constipação',
  HEARTBURN: 'Queimadura do coração',
  DIARRHEA: 'Diarréia',
  FLATULENCE: 'Flatulência',
  NAUSEA: 'Náusea',
  VOMITING: 'Vômito',
  CHOKING: 'Engasgamento',
  DIFFICULTY_CHEWING: 'Dificuldade de mastigar',
  OTHER: 'Outros',
};

export enum WEIGHT_GAIN_REASON {
  CHILDHOOD = 'CHILDHOOD',
  ADOLESCENCE = 'ADOLESCENCE',
  ADULTHOOD = 'ADULTHOOD',
  GENETIC = 'GENETIC',
  EMOTIONAL_DISORDERS = 'EMOTIONAL_DISORDERS',
  MEDICATION_USE = 'MEDICATION_USE',
  HORMONE_DYSFUNCTION = 'HORMONE_DYSFUNCTION',
  HYPERCALORIC_DIET = 'HYPERCALORIC_DIET',
  PREGNANCY = 'PREGNANCY',
}
