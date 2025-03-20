import React from "react";
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from "lucide-react";

export type AlertType = "success" | "warning" | "error" | "info";

interface AlertProps {
  type: AlertType;
  title?: string;
  message: string;
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

export function Alert({
  type,
  title,
  message,
  showIcon = true,
  dismissible = false,
  onDismiss,
  className
}: AlertProps) {
  const iconMap = {
    success: <CheckCircle className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />
  };

  const styleMap = {
    success: "bg-green-50 text-green-800 border-green-200",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
    error: "bg-red-50 text-red-800 border-red-200",
    info: "bg-blue-50 text-blue-800 border-blue-200"
  };

  const iconColorMap = {
    success: "text-green-600",
    warning: "text-yellow-600",
    error: "text-red-600",
    info: "text-blue-600"
  };

  return (
    <div className={`p-4 rounded-md border ${styleMap[type]} ${className || ''}`}>
      <div className="flex">
        {showIcon && (
          <div className={`flex-shrink-0 mr-3 ${iconColorMap[type]}`}>
            {iconMap[type]}
          </div>
        )}
        
        <div className="flex-1">
          {title && (
            <h3 className="text-sm font-medium">{title}</h3>
          )}
          <div className={`text-sm ${title ? 'mt-2' : ''}`}>
            {message}
          </div>
        </div>
        
        {dismissible && (
          <button
            type="button"
            className={`ml-3 ${iconColorMap[type]} hover:opacity-70`}
            onClick={onDismiss}
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

export function SuccessAlert(props: Omit<AlertProps, "type">) {
  return <Alert type="success" {...props} />;
}

export function WarningAlert(props: Omit<AlertProps, "type">) {
  return <Alert type="warning" {...props} />;
}

export function ErrorAlert(props: Omit<AlertProps, "type">) {
  return <Alert type="error" {...props} />;
}

export function InfoAlert(props: Omit<AlertProps, "type">) {
  return <Alert type="info" {...props} />;
} 