"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData, StepProps } from "@/types/form-data";

export function PersonalStep({ formData, updateFormData }: StepProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => updateFormData("firstName", e.target.value)}
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => updateFormData("lastName", e.target.value)}
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
          placeholder="john@example.com"
        />
      </div>
    </div>
  );
}

export function validatePersonalStep(formData: FormData): boolean {
  return !!(formData.firstName && formData.lastName && formData.email);
}
