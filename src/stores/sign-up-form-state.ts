import { create } from "zustand";

// 1. Define the type for the store
interface SignUpStore {
  isStepValid: boolean;
  setIsStepValid: (value: boolean) => void;
  triggers: string[];
  setTriggers: (list: string[]) => void;
}

// 2. Create the store with type annotations
export const useSignUpStore = create<SignUpStore>((set) => ({
  isStepValid: false,
  setIsStepValid: (value) => set({ isStepValid: value }),
  triggers: [],
  setTriggers: (list) => set({ triggers: list }),
}));
