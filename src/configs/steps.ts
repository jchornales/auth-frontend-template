export interface StepConfig {
  title: string;
  description: string;
}

export const stepConfigs: Record<number, StepConfig> = {
  1: {
    title: "Personal Information",
    description: "Let's start with your basic information",
  },
  2: {
    title: "Create Password",
    description: "Create a secure password for your account",
  },
  3: {
    title: "Professional Details",
    description: "Tell us about your professional background",
  },
  4: {
    title: "Review & Confirm",
    description: "Review your information and complete registration",
  },
};
