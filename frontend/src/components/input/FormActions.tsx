import React from 'react';
import { Button } from "@/components/ui/button";

interface FormActionsProps {
  onSubmit: () => void;
  onCancel?: () => void;
  isSubmitting?: boolean;
  submitText?: string;
  cancelText?: string;
}

export function FormActions({ 
  onSubmit, 
  onCancel, 
  isSubmitting = false,
  submitText = "저장하기",
  cancelText = "취소"
}: FormActionsProps) {
  return (
    <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
      {onCancel && (
        <Button 
          type="button" 
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          {cancelText}
        </Button>
      )}
      
      <Button 
        type="submit" 
        onClick={onSubmit}
        disabled={isSubmitting}
        className="bg-green-600 hover:bg-green-700"
      >
        {isSubmitting ? "처리 중..." : submitText}
      </Button>
    </div>
  );
} 