import React, { useState } from 'react';
import { Upload, AlertCircle, CheckCircle } from "lucide-react";
import { Alert } from "@/components/common/Alert";

interface FileUploadProps {
  label: string;
  acceptedFileTypes?: string;
  onChange: (file: File | null) => void;
  maxSizeMB?: number;
}

export function FileUpload({ 
  label, 
  acceptedFileTypes = ".xlsx,.xls,.csv", 
  onChange,
  maxSizeMB = 5
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(null);
      onChange(null);
      return;
    }
    
    const selectedFile = e.target.files[0];
    
    // 파일 크기 검사
    if (selectedFile.size > maxSizeMB * 1024 * 1024) {
      setError(`파일 크기는 ${maxSizeMB}MB 이하여야 합니다.`);
      return;
    }
    
    setFile(selectedFile);
    setError(null);
    onChange(selectedFile);
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (!e.dataTransfer.files || e.dataTransfer.files.length === 0) {
      return;
    }
    
    const droppedFile = e.dataTransfer.files[0];
    
    // 파일 크기 검사
    if (droppedFile.size > maxSizeMB * 1024 * 1024) {
      setError(`파일 크기는 ${maxSizeMB}MB 이하여야 합니다.`);
      return;
    }
    
    setFile(droppedFile);
    setError(null);
    onChange(droppedFile);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-1">{label}</label>
      
      <div
        className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer ${
          isDragging ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary/50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept={acceptedFileTypes}
          onChange={handleFileChange}
        />
        
        <Upload className="h-10 w-10 text-gray-400 mb-2" />
        
        {file ? (
          <div className="text-center">
            <p className="text-sm font-medium text-gray-700">{file.name}</p>
            <p className="text-xs text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-sm font-medium text-gray-700">파일을 끌어서 놓거나 클릭하여 선택하세요</p>
            <p className="text-xs text-gray-500">
              {acceptedFileTypes} 파일, 최대 {maxSizeMB}MB
            </p>
          </div>
        )}
      </div>
      
      {error && (
        <Alert 
          type="error" 
          message={error}
          showIcon={true}
          className="mt-2"
        />
      )}
      
      {file && !error && (
        <Alert 
          type="success" 
          message="파일이 성공적으로 업로드되었습니다."
          showIcon={true}
          className="mt-2"
        />
      )}
    </div>
  );
} 