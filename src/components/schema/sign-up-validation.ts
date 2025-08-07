import { ValidationMessage } from "@/enums/form-validation-message";
import z from "zod";
import { passwordRequirements } from "./auth-validation";

export const signUpFormSchema = z.object({
  firstName: z.string().nonempty({ message: ValidationMessage.FIRST_NAME_REQUIRED }).min(2),
  middleName: z.string().optional(),
  lastName: z.string().nonempty({ message: ValidationMessage.LAST_NAME_REQUIRED }).min(2),
  birthday: z.date().refine((val) => val != null, {
    message: ValidationMessage.BIRTHDAY_REQUIRED,
  }),
  email: z.string().nonempty({ message: ValidationMessage.EMAIL_REQUIRED }).email(ValidationMessage.EMAIL_MUST_BE_VALID).trim(),
  password: z
    .string()
    .nonempty({ message: ValidationMessage.PASSWORD_REQUIRED })
    .trim()
    .min(8, ValidationMessage.PASSWORD_TOO_SHORT)
    .refine((value) => passwordRequirements.hasUppercase.test(value), {
      message: ValidationMessage.PASSWORD_NO_UPPERCASE,
    })
    .refine((value) => passwordRequirements.hasLowercase.test(value), {
      message: ValidationMessage.PASSWORD_NO_LOWERCASE,
    })
    .refine((value) => passwordRequirements.hasNumber.test(value), {
      message: ValidationMessage.PASSWORD_NO_NUMBER,
    })
    .refine((value) => passwordRequirements.hasSymbol.test(value), {
      message: ValidationMessage.PASSWORD_NO_SYMBOL,
    }),
  phone: z.string().nonempty({ message: ValidationMessage.PHONE_REQUIRED }).trim().min(9),
  company: z.string().nonempty({ message: ValidationMessage.COMPANY_REQUIRED }).trim().min(5),
  role: z.string().nonempty({ message: ValidationMessage.ROLE_REQUIRED }),
});

export type SignUpInput = z.infer<typeof signUpFormSchema>;
