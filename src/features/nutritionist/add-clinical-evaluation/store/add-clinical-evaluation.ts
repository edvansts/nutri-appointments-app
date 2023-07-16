import { create } from 'zustand';
import { ADD_CLINICAL_EVALUATION_STEPS, type MedicationsAndAddictionsFormType } from '../constants';

interface AddClinicalEvaluationStore {
  [ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS]?: MedicationsAndAddictionsFormType;
  setMedicationsAndAddictions: (data?: MedicationsAndAddictionsFormType) => void;
}

export const useAddClinicalEvaluationStore = create<AddClinicalEvaluationStore>((set) => ({
  [ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS]: undefined,
  setMedicationsAndAddictions: (data?: MedicationsAndAddictionsFormType) => {
    set(() => ({ [ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS]: data }));
  },
}));
