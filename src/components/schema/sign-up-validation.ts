import { ValidationMessage } from "@/enums/form-validation-message";
import z from "zod";
import { passwordRequirements } from "./auth-validation";

const userStepSchema = z
  .object({
    email: z.email(ValidationMessage.EMAIL_MUST_BE_VALID).trim(),
    password: z
      .string()
      .trim()
      .min(8, ValidationMessage.PASSWORD_TOO_SHORT)
      .refine((val) => passwordRequirements.hasUppercase.test(val), {
        message: ValidationMessage.PASSWORD_NO_UPPERCASE,
      })
      .refine((val) => passwordRequirements.hasLowercase.test(val), {
        message: ValidationMessage.PASSWORD_NO_LOWERCASE,
      })
      .refine((val) => passwordRequirements.hasNumber.test(val), {
        message: ValidationMessage.PASSWORD_NO_NUMBER,
      })
      .refine((val) => passwordRequirements.hasSymbol.test(val), {
        message: ValidationMessage.PASSWORD_NO_SYMBOL,
      }),
    confirmPassword: z.string().trim().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, { message: "Passwords don't match", path: ["confirmPassword"] });

export const personalStepSchema = z.object({
  firstName: z.string().min(2),
  middleName: z.string().min(2).optional(),
  lastName: z.string().min(2),
  birthday: z.date(),
});

const professionalStepSchema = z.object({
  phone: z.string().trim().min(9),
  company: z.string().trim().min(5),
  role: z.string(),
});

const reviewStepSchema = z.object({
  newsletter: z.boolean(),
  terms: z.boolean(),
});

export const stepsSchema = [userStepSchema, personalStepSchema, professionalStepSchema, reviewStepSchema];

export const signUpFormSchema = z
  .object({
    firstName: z.string().min(2),
    middleName: z.string().min(2).optional(),
    lastName: z.string().min(2),
    birthday: z.date(),
    email: z.email(ValidationMessage.EMAIL_MUST_BE_VALID).trim(),
    password: z
      .string()
      .trim()
      .min(8, ValidationMessage.PASSWORD_TOO_SHORT)
      .refine((val) => passwordRequirements.hasUppercase.test(val), {
        message: ValidationMessage.PASSWORD_NO_UPPERCASE,
      })
      .refine((val) => passwordRequirements.hasLowercase.test(val), {
        message: ValidationMessage.PASSWORD_NO_LOWERCASE,
      })
      .refine((val) => passwordRequirements.hasNumber.test(val), {
        message: ValidationMessage.PASSWORD_NO_NUMBER,
      })
      .refine((val) => passwordRequirements.hasSymbol.test(val), {
        message: ValidationMessage.PASSWORD_NO_SYMBOL,
      }),
    confirmPassword: z.string().trim().min(8),
    phone: z.string().trim().min(9),
    company: z.string().trim().min(5),
    role: z.string(),
    newsletter: z.boolean(),
    terms: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, { message: "Passwords don't match", path: ["confirmPassword"] });

export type SignUpInput = z.infer<typeof signUpFormSchema>;
