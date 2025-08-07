import React, { HTMLInputTypeAttribute } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Checkbox } from "./checkbox";

interface InputGroupType<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  renderForgotPassword?: boolean;
}

function CheckboxFormField<T extends FieldValues>({ form, name, label }: InputGroupType<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Checkbox
              {...field}
              onCheckedChange={(e) => {
                field.onChange(e);
                form.clearErrors(name);
              }}
            />
          </FormControl>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CheckboxFormField;
