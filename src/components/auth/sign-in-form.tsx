import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import InputFormField from "../ui/input-form-field";
import { useForm } from "react-hook-form";
import { SignInInput, signInSchema } from "../schema/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";

export default function SignInForm({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInInput) => {
    console.log(data);
  };
  return (
    <div className={cn("min-h-screen bg-card flex items-center justify-center p-4 w-full", className)} {...props}>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-center">Login to your account</CardTitle>
          <CardDescription className="text-center">Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <InputFormField form={form} label="Email" type="email" name="email" placeholder="johndoe@example.com" />
                <InputFormField form={form} label="Password" type="password" name="password" renderForgotPassword />
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </div>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/sign-up" className="underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
