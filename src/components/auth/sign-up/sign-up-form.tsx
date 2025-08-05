"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, SendHorizontal } from "lucide-react";
import { PasswordStep, validatePasswordStep } from "./password-step";
import { PersonalStep, validatePersonalStep } from "./personal-step";
import { ProfessionalStep, validateProfessionalStep } from "./professional-step";
import { ReviewStep, validateReviewStep } from "./review-step";
import { FormData } from "@/types/form-data";
import { stepConfigs } from "@/configs/steps";

export default function SignUpForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    company: "",
    role: "",
    newsletter: false,
    terms: false,
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return validatePersonalStep(formData);
      case 2:
        return validatePasswordStep(formData);
      case 3:
        return validateProfessionalStep(formData);
      case 4:
        return validateReviewStep(formData);
      default:
        return false;
    }
  };

  const renderStep = () => {
    const stepProps = { formData, updateFormData };

    switch (currentStep) {
      case 1:
        return <PersonalStep {...stepProps} />;
      case 2:
        return <PasswordStep {...stepProps} />;
      case 3:
        return <ProfessionalStep {...stepProps} />;
      case 4:
        return <ReviewStep {...stepProps} />;
      default:
        return null;
    }
  };

  const currentStepConfig = stepConfigs[currentStep];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 w-full">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="space-y-2">
            <CardTitle className="text-2xl text-center">Create Account</CardTitle>
            <CardDescription className="text-center">
              Step {currentStep} of {totalSteps}: {currentStepConfig.title}
            </CardDescription>
          </div>
          <div className="space-y-2">
            <Progress value={progress} className="w-full" />
            <p className="text-xs text-muted-foreground text-center">{currentStepConfig.description}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {renderStep()}

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={nextStep} disabled={!isStepValid()} className="flex items-center gap-2">
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={!isStepValid()} className="flex items-center gap-2">
                Submit
                <SendHorizontal className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/auth/sign-in" className="underline underline-offset-4">
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
