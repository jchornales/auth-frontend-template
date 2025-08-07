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
  fields: Field[];
}

export const stepConfigs: StepConfig[] = [
  {
    title: "Account Setup",
    description: "Create your account credentials to get started.",
    fields: [
      { name: "email", label: "Email Address", placeholder: "johndoe@example.com", type: "email" },
      { name: "password", label: "Password", type: "password" },
    ],
  },
  {
    title: "Personal Information",
    description: "Provide your name and date of birth for your profile.",
    fields: [
      { name: "firstName", label: "First Name", placeholder: "John", type: "text" },
      { name: "middleName", label: "Middle Name", placeholder: "Ben", type: "text" },
      { name: "lastName", label: "Last Name", placeholder: "Tee", type: "text" },
      { name: "phone", label: "Phone Number", placeholder: "+1 234 567 8900", type: "tel" },
      { name: "birthday", label: "Birth Day", type: "text" },
    ],
  },
  {
    title: "Professional Details",
    description: "Share your work background and current role.",
    fields: [
      { name: "company", label: "Company", placeholder: "Avarice inc.", type: "text" },
      { name: "role", label: "Role", placeholder: "Developer", type: "text" },
    ],
  },
  {
    title: "Review & Confirm",
    description: "Double-check your details before completing registration.",
    fields: [
      { name: "terms", label: "Terms", type: "checkbox" },
      { name: "newsletter", label: "Newsletter", type: "checkbox" },
    ],
  },
];
