export enum ValidationMessage {
  EMAIL_ALREADY_EXISTS = "Email already exists",
  EMAIL_INVALID_CHARACTERS = "Email can only contain letters, numbers, underscores, and dots",
  EMAIL_MUST_BE_VALID = "Email must be a valid email address",
  EMAIL_MUST_START_WITH_LETTER = "Email must start with a letter",
  EMAIL_TOO_LONG = "Email must be at most 255 characters long",
  PASSWORD_NO_LOWERCASE = "Password must contain at least one lowercase letter",
  PASSWORD_NO_NUMBER = "Password must contain at least one number",
  PASSWORD_NO_SYMBOL = "Password must contain at least one symbol",
  PASSWORD_NO_UPPERCASE = "Password must contain at least one uppercase letter",
  PASSWORD_TOO_SHORT = "Password must be at least 8 characters long",
}
