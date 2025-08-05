import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormData, StepProps } from "@/types/form-data";

export function ReviewStep({ formData, updateFormData }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-muted p-4">
        <h3 className="font-semibold mb-2">Review Your Information</h3>
        <div className="space-y-1 text-sm">
          <p>
            <strong>Name:</strong> {formData.firstName} {formData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
          <p>
            <strong>Company:</strong> {formData.company}
          </p>
          <p className="capitalize">
            <strong>Role:</strong> {formData.role}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) => updateFormData("newsletter", checked as boolean)}
          />
          <Label htmlFor="newsletter" className="text-sm">
            Subscribe to our newsletter for updates and tips
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.terms}
            onCheckedChange={(checked) => updateFormData("terms", checked as boolean)}
          />
          <Label htmlFor="terms" className="text-sm">
            I agree to the{" "}
            <a href="#" className="text-primary underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary underline">
              Privacy Policy
            </a>
          </Label>
        </div>
      </div>
    </div>
  );
}

export function validateReviewStep(formData: FormData): boolean {
  return formData.terms;
}
