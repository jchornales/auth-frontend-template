import { create } from "zustand";

interface SignUpStore {
  isStepValid: boolean;
  setIsStepValid: (value: boolean) => void;
  triggers: string[];
  setTriggers: (list: string[]) => void;
}

export const useSignUpStore = create<SignUpStore>((set) => ({
  isStepValid: false,
  setIsStepValid: (value) => set({ isStepValid: value }),
  triggers: [],
  setTriggers: (list) => set({ triggers: list }),
}));
