import React from "react";
import { Input } from "@/components/ui/input";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  children?: React.ReactNode;
}

export function FormField({
  id,
  label,
  type = "text",
  value,
  defaultValue,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error,
  className,
  children
}: FormFieldProps) {
  // 값이 제공되고 onChange 핸들러가 없는 경우를 처리
  const inputProps = value !== undefined && !onChange 
    ? { defaultValue: value } 
    : { value, onChange };

  return (
    <div className={`space-y-2 ${className || ''}`}>
      <label 
        htmlFor={id} 
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {children || (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={error ? "border-red-500" : ""}
          defaultValue={defaultValue}
          {...inputProps}
        />
      )}
      
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

interface FormRowProps {
  children: React.ReactNode;
  className?: string;
}

export function FormRow({ children, className }: FormRowProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className || ''}`}>
      {children}
    </div>
  );
}

interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
}

export function Form({ children, onSubmit, className }: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className || ''}`}>
      {children}
    </form>
  );
} 