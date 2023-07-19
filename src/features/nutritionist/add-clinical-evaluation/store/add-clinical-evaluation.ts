import { create } from 'zustand';
import {
  ADD_CLINICAL_EVALUATION_STEPS,
  type FamilyBackgroundFormType,
  type FeedingFormType,
  type LifestyleFormType,
  type MedicationsAndAddictionsFormType,
} from '../constants';

interface AddClinicalEvaluationStore {
  [ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS]?: MedicationsAndAddictionsFormType;
  setMedicationsAndAddictionsFormData: (data?: MedicationsAndAddictionsFormType) => void;

  [ADD_CLINICAL_EVALUATION_STEPS.LIFESTYLE]?: LifestyleFormType;
  setLifestyleFormData: (data?: LifestyleFormType) => void;

  [ADD_CLINICAL_EVALUATION_STEPS.FEEDING]?: FeedingFormType;
  setFeedingFormData: (data?: FeedingFormType) => void;

  [ADD_CLINICAL_EVALUATION_STEPS.FAMILY_BACKGROUND]?: FamilyBackgroundFormType;
  setFamilyBackgroundFormData: (data?: FamilyBackgroundFormType) => void;

  resetData: () => void;
}

export const useAddClinicalEvaluationStore = create<AddClinicalEvaluationStore>((set) => ({
  [ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS]: undefined,
  setMedicationsAndAddictionsFormData: (data?: MedicationsAndAddictionsFormType) => {
    set(() => ({ [ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS]: data }));
  },

  [ADD_CLINICAL_EVALUATION_STEPS.LIFESTYLE]: undefined,
  setLifestyleFormData: (data?: LifestyleFormType) => {
    set(() => ({ [ADD_CLINICAL_EVALUATION_STEPS.LIFESTYLE]: data }));
  },

  [ADD_CLINICAL_EVALUATION_STEPS.FEEDING]: undefined,
  setFeedingFormData: (data?: FeedingFormType) => {
    set(() => ({ [ADD_CLINICAL_EVALUATION_STEPS.FEEDING]: data }));
  },

  [ADD_CLINICAL_EVALUATION_STEPS.FAMILY_BACKGROUND]: undefined,
  setFamilyBackgroundFormData: (data?: FamilyBackgroundFormType) => {
    set(() => ({ [ADD_CLINICAL_EVALUATION_STEPS.FAMILY_BACKGROUND]: data }));
  },

  resetData: () => {
    set(() => ({
      [ADD_CLINICAL_EVALUATION_STEPS.FEEDING]: undefined,
      [ADD_CLINICAL_EVALUATION_STEPS.FAMILY_BACKGROUND]: undefined,
      [ADD_CLINICAL_EVALUATION_STEPS.LIFESTYLE]: undefined,
      [ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS]: undefined,
    }));
  },
}));
