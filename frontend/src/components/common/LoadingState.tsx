import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  text?: string;
  size?: "sm" | "md" | "lg";
  fullPage?: boolean;
  className?: string;
}

export function LoadingState({ 
  text = "로딩 중...", 
  size = "md", 
  fullPage = false,
  className 
}: LoadingStateProps) {
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  const content = (
    <div className={`flex flex-col items-center justify-center ${className || ''}`}>
      <Loader2 className={`${sizeMap[size]} animate-spin text-gray-400`} />
      {text && <p className="mt-2 text-sm text-gray-500">{text}</p>}
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
}

interface LoadingOverlayProps {
  loading: boolean;
  children: React.ReactNode;
  text?: string;
  size?: "sm" | "md" | "lg";
}

export function LoadingOverlay({
  loading,
  children,
  text,
  size
}: LoadingOverlayProps) {
  return (
    <div className="relative">
      {children}
      
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
          <LoadingState text={text} size={size} />
        </div>
      )}
    </div>
  );
}

export function LoadingButton({
  loading,
  children,
  disabled,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { loading: boolean }) {
  return (
    <button
      disabled={loading || disabled}
      className={`inline-flex items-center justify-center ${className || ''}`}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
} 