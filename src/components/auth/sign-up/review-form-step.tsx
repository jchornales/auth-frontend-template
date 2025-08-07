/* eslint-disable @typescript-eslint/no-explicit-any */
import { SignUpInput } from "@/components/schema/sign-up-validation";
import { toLabel } from "@/lib/utils";
import { format } from "date-fns";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface ReviewSignUpFormStepProps {
  form: UseFormReturn<SignUpInput>;
}

// Optional helper to format values nicely
function formatValue(value: any) {
  if (value instanceof Date) {
    return format(value, "PPP"); // e.g. "2025-08-08"
  }
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
  if (value === null || value === undefined) {
    return "-";
  }
  return value.toString();
}

function ReviewSignUpFormStep({ form }: ReviewSignUpFormStepProps) {
  const formValues = form.getValues();
  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        {Object.entries(formValues)
          .filter(([key]) => key !== "password")
          .map(([key, value]) => (
            <li key={key} className="flex gap-2">
              <span className="font-semibold">{toLabel(key)}:</span>
              <span>{formatValue(value)}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ReviewSignUpFormStep;
