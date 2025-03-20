import React from "react";
import { FolderOpen } from "lucide-react";

interface EmptyProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function Empty({
  title = "데이터 없음",
  message = "표시할 데이터가 없습니다.",
  icon,
  action,
  className
}: EmptyProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center ${className || ''}`}>
      <div className="mb-4 text-gray-400">
        {icon || <FolderOpen className="w-12 h-12" />}
      </div>
      
      {title && (
        <h3 className="mb-2 text-lg font-medium text-gray-900">{title}</h3>
      )}
      
      {message && (
        <p className="max-w-md mb-4 text-sm text-gray-500">{message}</p>
      )}
      
      {action && (
        <div className="mt-2">
          {action}
        </div>
      )}
    </div>
  );
}

interface EmptySearchProps extends Omit<EmptyProps, "title" | "message" | "icon"> {
  searchTerm: string;
}

export function EmptySearch({
  searchTerm,
  action,
  className
}: EmptySearchProps) {
  return (
    <Empty
      title="검색 결과 없음"
      message={`"${searchTerm}"에 대한 검색 결과가 없습니다.`}
      icon={<FolderOpen className="w-12 h-12" />}
      action={action}
      className={className}
    />
  );
} 