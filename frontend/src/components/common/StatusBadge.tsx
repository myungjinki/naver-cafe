import React from "react";
import { Badge } from "@/components/ui/badge";
import { cva } from "class-variance-authority";

export type StatusType = 
  | "success" 
  | "warning" 
  | "error" 
  | "info" 
  | "pending" 
  | "default";

const statusVariants = cva("", {
  variants: {
    variant: {
      success: "bg-green-100 text-green-800 hover:bg-green-100",
      warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
      error: "bg-red-100 text-red-800 hover:bg-red-100",
      info: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      pending: "bg-gray-100 text-gray-800 hover:bg-gray-100",
      default: "bg-gray-100 text-gray-800 hover:bg-gray-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface StatusBadgeProps {
  status: StatusType;
  text: string;
  className?: string;
}

export function StatusBadge({ status, text, className }: StatusBadgeProps) {
  return (
    <Badge 
      className={`${statusVariants({ variant: status })} ${className || ''}`}
    >
      {text}
    </Badge>
  );
}

// 미리 정의된 일반적인 상태 배지
export function SuccessBadge({ text = "성공", className }: { text?: string, className?: string }) {
  return <StatusBadge status="success" text={text} className={className} />;
}

export function WarningBadge({ text = "주의", className }: { text?: string, className?: string }) {
  return <StatusBadge status="warning" text={text} className={className} />;
}

export function ErrorBadge({ text = "오류", className }: { text?: string, className?: string }) {
  return <StatusBadge status="error" text={text} className={className} />;
}

export function InfoBadge({ text = "정보", className }: { text?: string, className?: string }) {
  return <StatusBadge status="info" text={text} className={className} />;
}

export function PendingBadge({ text = "대기중", className }: { text?: string, className?: string }) {
  return <StatusBadge status="pending" text={text} className={className} />;
} 