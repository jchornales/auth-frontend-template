import React, { HTMLInputTypeAttribute } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import Link from "next/link";

interface InputGroupType<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute | undefined;
  renderForgotPassword?: boolean;
}

function InputFormField<T extends FieldValues>({
  form,
  name,
  label,
  type,
  placeholder,
  renderForgotPassword,
}: InputGroupType<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center">
            <FormLabel htmlFor={name}>{label}</FormLabel>
            {renderForgotPassword && (
              <Link href="/auth/forgot-password" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                Forgot your password?
              </Link>
            )}
          </div>
          <FormControl>
            <Input id={name} type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default InputFormField;
