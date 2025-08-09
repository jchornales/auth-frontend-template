"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordInput, resetPasswordSchema } from "../schema/auth-validation";
import InputFormField from "../ui/input-form-field";
import { Form } from "../ui/form";

export function ResetPassword({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordInput) => {
    console.log(data);
  };

  return (
    <div className={cn("min-h-screen bg-card flex items-center justify-center p-4 w-full", className)} {...props}>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-center">Create a New Password</CardTitle>
          <CardDescription className="text-center">
            {" "}
            Enter a new password for your account. Make sure it&apos;s strong and secure.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="space-y-4">
                  <InputFormField
                    form={form}
                    label="Password"
                    name="newPassword"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <InputFormField
                    form={form}
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full">
                    Reset Password
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
