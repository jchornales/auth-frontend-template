/* eslint-disable react-hooks/exhaustive-deps */
import { SignUpInput } from "@/components/schema/sign-up-validation";
import InputFormField from "@/components/ui/input-form-field";
import { stepConfigs } from "@/configs/steps";
import { useSignUpStore } from "@/stores/sign-up-form-state";
import React, { useEffect } from "react";
import { Path, UseFormReturn } from "react-hook-form";

interface PersonalFormStepProps {
  form: UseFormReturn<SignUpInput>;
  currentStep: number;
}

function SignUpFormStep({ form, currentStep }: PersonalFormStepProps) {
  const step = currentStep - 1;
  const inputFields = stepConfigs[step].fields;
  const fieldsName = inputFields.map((field) => field.name);
  const { setTriggers } = useSignUpStore();

  useEffect(() => {
    setTriggers(fieldsName);
  }, [currentStep]);

  return (
    <div className="space-y-4">
      {inputFields.map(({ name, label, type, placeholder }) => {
        // Todo: add form field for dates, phone number and checkbox
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
      })}
    </div>
  );
}

export default SignUpFormStep;
