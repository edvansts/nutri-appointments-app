import {
  type SMOKER_STATUS,
  type CIVIL_STATUS,
  type GENDER,
  type SEX,
  type ALCOHOLIC_STATUS,
  type EATING_PLACE,
  type EATING_BEHAVIOR,
  type ENVIRONMENT,
  type FAMILIAR_BACKGROUND,
  type CLINICAL_HISTORY,
  type SYMPTOM,
} from '../constants/patient';
import { type Person } from './person';

export interface Patient {
  id: string;
  birthdayDate: string;
  sex: SEX;
  gender: GENDER;
  civilStatus: CIVIL_STATUS;
  nationality: string;
  naturality: string;
  ethnicity: string;
  schooling: string;
  profession: string;
  completeAddress: string;
  historyWeightGain: string;
  phoneNumber: string;
  personId: string;
  person?: Person;
}

export interface BodyEvolution {
  id: string;
  uploadDate: string;
  publicId: string;
  imageUrl: string;
  patientId: string;
}

export interface ClinicalEvaluation {
  id: string;
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
