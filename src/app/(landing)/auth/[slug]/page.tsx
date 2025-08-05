"use client";

import ForgotPasswordConfirmation from "@/components/auth/forgot-password-confirmation";
import { ForgotPassword } from "@/components/auth/forgot-password-form";
import { ResetPassword } from "@/components/auth/reset-password-form";
import SignInForm from "@/components/auth/sign-in-form";
import SignUpForm from "@/components/auth/sign-up/sign-up-form";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { notFound, useParams } from "next/navigation";
import { useMemo } from "react";

function AuthForms() {
  const params = useParams();
  const slug = params.slug;
  const slugParam = Array.isArray(slug) ? slug[0] : slug;

  const form = useMemo(() => {
    switch (slugParam) {
      case "sign-in":
        return <SignInForm />;
      case "sign-up":
        return <SignUpForm />;
      case "forgot-password":
        return <ForgotPassword />;
      case "reset-password":
        return <ResetPassword />;
      case "forgot-password-confirmation":
        return <ForgotPasswordConfirmation />;
      default:
        notFound();
    }
  }, [slugParam]);

  return (
    <main className="h-lvh w-w-full flex flex-col items-center justify-center">
      <ThemeToggle />

      {form}
    </main>
  );
}

export default AuthForms;
