/* eslint-disable react-hooks/exhaustive-deps */
import { SignUpInput, userStepSchema } from "@/components/schema/sign-up-validation";
import InputFormField from "@/components/ui/input-form-field";
import { toLabel } from "@/lib/utils";
import { useSignUpStore } from "@/stores/sign-up-form-state";
import React, { useEffect } from "react";
import { Path, UseFormReturn } from "react-hook-form";

interface UserFormStepProps {
  form: UseFormReturn<SignUpInput>;
}

function UserFormStep({ form }: UserFormStepProps) {
  const inputFields = userStepSchema.keyof().options;
  const { setTriggers } = useSignUpStore();

  useEffect(() => {
    setTriggers(inputFields);
  }, []);

  return (
    <div className="space-y-4">
      {inputFields.map((field) => {
        return <InputFormField key={field} form={form} name={field as Path<SignUpInput>} label={toLabel(field)} />;
      })}
    </div>
  );
}

export default UserFormStep;
