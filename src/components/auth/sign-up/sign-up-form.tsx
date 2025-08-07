import { signUpFormSchema, SignUpInput } from "@/components/schema/sign-up-validation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Path, useForm } from "react-hook-form";
import { useSignUpStore } from "@/stores/sign-up-form-state";
import { isEmpty } from "es-toolkit/compat";
import SignUpFormStep from "./sign-up-form-step";
import { ComponentProps, useEffect, useState } from "react";
import { stepConfigs } from "@/configs/steps";

function SignUpForm({ className, ...props }: ComponentProps<"div">) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const totalSteps = stepConfigs.length;
  const form = useForm<SignUpInput>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      middleName: "",
      lastName: "",
      phone: "",
      birthday: new Date(),
      company: "",
      role: "",
    },
    mode: "onBlur",
  });
  const { triggers } = useSignUpStore();

  const progress = (currentStep / totalSteps) * 100;
  const currentFormStep = stepConfigs[currentStep - 1];

  const onSubmit = (data: SignUpInput) => {
    console.log(data);
  };

  const handleNext = async (currentStep: number) => {
    const output = await form.trigger(triggers as Path<SignUpInput>[]);
    if (currentStep === totalSteps || !output) {
      setIsNextDisabled(true);
    }

    if (currentStep <= totalSteps && output) {
      setCurrentStep((current) => (current += 1));
    }
  };

  const handleBack = (currentStep: number) => {
    if (currentStep >= 1) {
      form.clearErrors();
      setCurrentStep((current) => (current -= 1));
    }
  };

  useEffect(() => {
    if (isEmpty(form.formState.errors)) {
      setIsNextDisabled(false);
    } else {
      console.log(form.formState.errors);
      setIsNextDisabled(true);
    }
  }, [form.formState]);

  return (
    <div className={cn("min-h-screen bg-card flex items-center justify-center p-4 w-full", className)} {...props}>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="space-y-2">
            <CardTitle className="text-2xl text-center">{currentFormStep.title}</CardTitle>
            <CardDescription className="text-center">
              Step {currentStep} of {totalSteps}
            </CardDescription>
          </div>
          <div className="space-y-2">
            <Progress value={progress} className="w-full" />
            <p className="text-xs text-muted-foreground text-center">{currentFormStep.description}</p>
          </div>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="space-y-4">
                  <SignUpFormStep form={form} currentStep={currentStep} />
                </div>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    type="button"
                    className="flex items-center gap-2 bg-transparent"
                    disabled={currentStep <= 1}
                    onClick={() => handleBack(currentStep)}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>

                  {currentStep === totalSteps ? (
                    <Button type="submit">Submit</Button>
                  ) : (
                    <Button
                      disabled={isNextDisabled || currentStep === totalSteps}
                      type="button"
                      onClick={() => handleNext(currentStep)}
                      className="flex items-center gap-2 text-white"
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </Form>
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
