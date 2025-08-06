import { ValidationMessage } from "@/enums/form-validation-message";
import z from "zod";

export const passwordRequirements = {
  minLength: 8,
  hasUppercase: /[A-Z]/,
  hasLowercase: /[a-z]/,
  hasNumber: /\d/,
  hasSymbol: /[^A-Za-z0-9]/,
};

export const signInSchema = z.object({
  email: z.email(ValidationMessage.EMAIL_MUST_BE_VALID).trim(),
  password: z.string().trim().nonempty().min(8),
});

export type SignInInput = z.infer<typeof signInSchema>;

export const resetPasswordSchema = z
  .object({
    newPassword: z
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
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, { message: "Passwords don't match", path: ["confirmPassword"] });

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
