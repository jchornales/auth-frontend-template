"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ForgotPasswordConfirmation({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("min-h-screen bg-gray-50 flex items-center justify-center p-4 w-full", className)} {...props}>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-center">Check Your Email</CardTitle>
          <CardDescription className="text-center">
            We&apos;ve sent a password reset link to your email address. Please check your inbox and follow the instructions to
            reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">Didn&apos;t receive the email? Check your spam folder or try again.</p>
            <Button
              variant="outline"
              className="w-full mb-3 bg-transparent"
              onClick={() => {
                // Resend email logic would go here
                console.log("Resending email...");
              }}
            >
              Resend Email
            </Button>
            <Button
              variant="ghost"
              className="w-full text-gray-600 hover:text-gray-900"
              onClick={() => {
                // Navigate back to login
                console.log("Going back to login...");
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
