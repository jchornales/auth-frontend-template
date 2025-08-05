"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData, StepProps } from "@/types/form-data";

export function PasswordStep({ formData, updateFormData }: StepProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => updateFormData("password", e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => updateFormData("confirmPassword", e.target.value)}
          placeholder="Confirm your password"
        />
        {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
          <p className="text-sm text-red-500">Passwords do not match</p>
        )}
      </div>
    </div>
  );
}

export function validatePasswordStep(formData: FormData): boolean {
  return !!(formData.password && formData.confirmPassword && formData.password === formData.confirmPassword);
}
