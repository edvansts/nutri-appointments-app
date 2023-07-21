import { type APPOINTMENT_TYPE } from '@constants/appointments';
import {
  type SMOKER_STATUS,
  type CIVIL_STATUS,
  type ETHNICITY,
  type GENDER,
  type SCHOOLING,
  type SEX,
  type ALCOHOLIC_STATUS,
  type EATING_BEHAVIOR,
  type EATING_PLACE,
  type ENVIRONMENT,
  type FAMILIAR_BACKGROUND,
  type CLINICAL_HISTORY,
  type SYMPTOM,
} from '@constants/patient';
import { type Appointment } from 'src/types/appointment';
import { type Nutritionist } from 'src/types/nutritionist';
import { type ClinicalEvaluation, type BodyEvolution, type Patient } from 'src/types/patient';

export interface GetNextNutritionistAppointmentsParams {
  type: APPOINTMENT_TYPE;
  limit: number;
  nutritionistId?: string;
}
export type GetNextNutritionistAppointmentsResponse = Appointment[];

export interface GetPatientsByNameParams {
  limit: number;
  patientName?: string;
}
export type GetPatientsByNameResponse = Patient[];

export interface GetPatientBodyEvolutionParams {
  limit: number;
  patientId: string;
}
export type GetPatientBodyEvolutionResponse = BodyEvolution[];

export type GetNutritionistInfoData = Nutritionist;

export interface PostCreatePatientParams {
  name: string;
  birthdayDate: string;
  sex: SEX;
  gender: GENDER;
  civilStatus: CIVIL_STATUS;
  nationality: string;
  naturality: string;
  ethnicity: ETHNICITY;
  schooling: SCHOOLING;
  profession: string;
  completeAddress: string;
  phoneNumber: string;
  cpf: string;
  socialName?: string;
}

export type PostCreatePatientResponse = Patient;

export interface PostCreateClinicalEvaluationParams {
  patientId: string;

  medicationsAndSupplementsUsed?: string;
  weightLossTreatmentsPerformed?: string;
  smokerStatus: SMOKER_STATUS;
  smokerDescription?: string;
  alcoholicStatus: ALCOHOLIC_STATUS;
  alcoholicDescription?: string;
  physicalActivityDescription?: string;
  spareTimeDescription?: string;
  eatingBehavior: EATING_BEHAVIOR;
  breakfastPlace: EATING_PLACE;
  snackPlace: EATING_PLACE;
  lunchPlace: EATING_PLACE;
  afternoonSnackPlace: EATING_PLACE;
  dinnerPlace: EATING_PLACE;
  supperPlace: EATING_PLACE;
  mainMealsEnvironment: ENVIRONMENT;
  familiarBackground: FAMILIAR_BACKGROUND[];
  otherFamiliarBackgrounds?: string;
  clinicalHistory: CLINICAL_HISTORY[];
  otherClinicalHistories?: string;
  reportedSymptoms: SYMPTOM[];
  otherReportedSymptoms?: string;
  examDate: string;
}

export type PostCreateClinicalEvaluationResponse = ClinicalEvaluation;
