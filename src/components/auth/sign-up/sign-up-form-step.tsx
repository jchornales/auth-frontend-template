/* eslint-disable react-hooks/exhaustive-deps */
import { SignUpInput } from "@/components/schema/sign-up-validation";
import CheckboxFormField from "@/components/ui/checkbox-form-field";
import InputFormField from "@/components/ui/input-form-field";
import { stepConfigs } from "@/configs/steps";
import { useSignUpStore } from "@/stores/sign-up-form-state";
import React, { useEffect } from "react";
import { Path, UseFormReturn } from "react-hook-form";
import ReviewSignUpFormStep from "./review-form-step";
import { DatePickerFormField } from "@/components/ui/date-picker-form-field";

interface PersonalFormStepProps {
  form: UseFormReturn<SignUpInput>;
  currentStep: number;
}

function SignUpFormStep({ form, currentStep }: PersonalFormStepProps) {
  const step = currentStep - 1;
  const inputFields = stepConfigs[step].fields;
  const fieldsName = inputFields?.map((field) => field.name);
  const { setTriggers } = useSignUpStore();

  useEffect(() => {
    if (fieldsName) {
      setTriggers(fieldsName);
    }
  }, [currentStep]);

  if (stepConfigs[step].isReview) {
    return <ReviewSignUpFormStep form={form} />;
  }

  return inputFields?.map(({ name, label, type, placeholder }) => {
    if (type === "checkbox") {
      return <CheckboxFormField key={name} form={form} name={name as Path<SignUpInput>} label={label} type={type} />;
    }

    if (type === "date") {
      return <DatePickerFormField key={name} form={form} name={name as Path<SignUpInput>} label={label} />;
    }

    return (
      <InputFormField
        key={name}
        form={form}
        name={name as Path<SignUpInput>}
        label={label}
        type={type}
        placeholder={placeholder}
      />
    );
  });
}

export default SignUpFormStep;
