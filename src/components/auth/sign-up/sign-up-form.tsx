import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import React, { ComponentProps } from "react";

function SignUpForm({ className, ...props }: ComponentProps<"div">) {
  const searchParams = useSearchParams();
  const currentStep = Number(searchParams.get("step"));

  const progress = (currentStep / 4) * 100;

  if (isNaN(currentStep)) {
    return notFound();
  }

  return (
    <div className={cn("min-h-screen bg-card flex items-center justify-center p-4 w-full", className)} {...props}>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="space-y-2">
            <CardTitle className="text-2xl text-center">Create Account</CardTitle>
            <CardDescription className="text-center">Step {currentStep} of 4</CardDescription>
          </div>
          <div className="space-y-2">
            <Progress value={progress} className="w-full" />
            <p className="text-xs text-muted-foreground text-center">TEST</p>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex justify-between">
            <Button variant="outline" type="button" className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            <Button className="flex items-center gap-2 text-white">
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="underline underline-offset-4">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUpForm;
