import { SignUpInput } from "@/components/schema/sign-up-validation";
import { UseFormReturn } from "react-hook-form";

export interface StepProps {
  form: UseFormReturn<SignUpInput>;
}
