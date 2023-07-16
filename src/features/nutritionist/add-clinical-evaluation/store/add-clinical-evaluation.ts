import { create } from 'zustand';
import {
  ADD_CLINICAL_EVALUATION_STEPS,
  type LifestyleFormType,
  type MedicationsAndAddictionsFormType,
} from '../constants';

interface AddClinicalEvaluationStore {
  [ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS]?: MedicationsAndAddictionsFormType;
  setMedicationsAndAddictions: (data?: MedicationsAndAddictionsFormType) => void;

  [ADD_CLINICAL_EVALUATION_STEPS.LIFESTYLE]?: LifestyleFormType;
  setLifestyle: (data?: LifestyleFormType) => void;
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
}));
