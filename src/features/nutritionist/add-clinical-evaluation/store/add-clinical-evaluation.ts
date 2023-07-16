import { create } from 'zustand';
import {
  ADD_CLINICAL_EVALUATION_STEPS,
  type FeedingFormType,
  type LifestyleFormType,
  type MedicationsAndAddictionsFormType,
} from '../constants';

interface AddClinicalEvaluationStore {
  [ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS]?: MedicationsAndAddictionsFormType;
  setMedicationsAndAddictions: (data?: MedicationsAndAddictionsFormType) => void;

  [ADD_CLINICAL_EVALUATION_STEPS.LIFESTYLE]?: LifestyleFormType;
  setLifestyle: (data?: LifestyleFormType) => void;

  [ADD_CLINICAL_EVALUATION_STEPS.FEEDING]?: FeedingFormType;
  setFeeding: (data?: FeedingFormType) => void;

  resetData: () => void;
}

export const useAddClinicalEvaluationStore = create<AddClinicalEvaluationStore>((set) => ({
  [ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS]: undefined,
  setMedicationsAndAddictions: (data?: MedicationsAndAddictionsFormType) => {
    set(() => ({ [ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS]: data }));
  },

  [ADD_CLINICAL_EVALUATION_STEPS.LIFESTYLE]: undefined,
  setLifestyle: (data?: LifestyleFormType) => {
    set(() => ({ [ADD_CLINICAL_EVALUATION_STEPS.LIFESTYLE]: data }));
  },

  [ADD_CLINICAL_EVALUATION_STEPS.FEEDING]: undefined,
  setFeeding: (data?: FeedingFormType) => {
    set(() => ({ [ADD_CLINICAL_EVALUATION_STEPS.FEEDING]: data }));
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
