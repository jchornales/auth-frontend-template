export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  company: string;
  role: string;
  newsletter: boolean;
  terms: boolean;
}

export interface StepProps {
  formData: Partial<FormData>;
  updateFormData: (field: keyof FormData, value: string | boolean) => void;
}
