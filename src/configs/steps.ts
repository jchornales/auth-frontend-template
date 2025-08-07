import { HTMLInputTypeAttribute } from "react";

type Field = {
  name: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

export interface StepConfig {
  title: string;
  description: string;
  fields?: Field[];
  isReview?: boolean;
}

export const stepConfigs: StepConfig[] = [
  {
    title: "Account Setup",
    description: "Set up your login details to access your account.",
    fields: [
      { name: "email", label: "Email Address", placeholder: "johndoe@example.com", type: "email" },
      { name: "password", label: "Password", type: "password" },
    ],
  },
  {
    title: "Personal Information",
    description: "Tell us who you are so we can personalize your experience.",
    fields: [
      { name: "firstName", label: "First Name", placeholder: "John", type: "text" },
      { name: "middleName", label: "Middle Name", placeholder: "Ben", type: "text" },
      { name: "lastName", label: "Last Name", placeholder: "Tee", type: "text" },
      { name: "phone", label: "Phone Number", placeholder: "+1 234 567 8900", type: "tel" },
      { name: "birthday", label: "Birthday", type: "date" },
    ],
  },
  {
    title: "Professional Details",
    description: "Let us know about your professional background and current position.",
    fields: [
      { name: "company", label: "Company", placeholder: "Avarice inc.", type: "text" },
      { name: "role", label: "Role", placeholder: "Developer", type: "text" },
    ],
  },
  {
    title: "Review & Confirm",
    description: "Review all your information and confirm to finish signing up.",
    isReview: true,
  },
];
