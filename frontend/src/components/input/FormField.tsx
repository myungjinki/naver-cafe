import React from 'react';
import { Input } from "@/components/ui/input";
import { FormField as FormFieldBase, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";

interface FormFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  type?: string;
}

export function FormField({ 
  control, 
  name, 
  label, 
  placeholder, 
  description,
  type = "text" 
}: FormFieldProps) {
  return (
    <FormFieldBase
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-4">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input 
              type={type} 
              placeholder={placeholder} 
              {...field} 
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
} 