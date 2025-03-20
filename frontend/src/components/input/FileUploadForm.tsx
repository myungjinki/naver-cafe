"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  SelectField, 
  FileUpload, 
  FormActions 
} from '@/components/input';
import { Alert, SuccessAlert } from '@/components/common/Alert';

interface FileUploadFormProps {
  onSuccess?: () => void;
}

export function FileUploadForm({ onSuccess }: FileUploadFormProps) {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCafe, setSelectedCafe] = useState("cafe1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  
  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
    if (submitError) {
      setSubmitError(null);
    }
  };
  
  const cafeOptions = [
    { value: "cafe1", label: "메가스터디 카페" },
    { value: "cafe2", label: "대치동 학원" },
    { value: "cafe3", label: "강남 카페" },
    { value: "cafe4", label: "서울대입구 카페" },
  ];
  
  const handleSubmit = async () => {
    if (!selectedFile) {
      setSubmitError("파일을 선택해주세요.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    
    try {
      // API 호출 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 업로드 폼 데이터 구성
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('cafeId', selectedCafe);
      
      // 실제로는 여기서 API 호출
      // const response = await fetch('/api/upload', { method: 'POST', body: formData });
      // const data = await response.json();
      
      setSubmitSuccess(true);
      
      // 성공 핸들러 호출
      if (onSuccess) {
        setTimeout(onSuccess, 3000);
      } else {
        // 기본 동작: 3초 후 대시보드로 이동
        setTimeout(() => {
          router.push('/dashboard');
        }, 3000);
      }
    } catch (error) {
      setSubmitError("파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCancel = () => {
    if (confirm("작성 중인 내용이 저장되지 않습니다. 취소하시겠습니까?")) {
      router.push('/dashboard');
    }
  };

  return (
    <>
      {submitSuccess && (
        <SuccessAlert 
          title="업로드 성공" 
          message="파일이 성공적으로 업로드되었습니다. 잠시 후 대시보드로 이동합니다." 
          className="mb-6"
        />
      )}
      
      {submitError && (
        <Alert 
          title="오류" 
          type="error" 
          message={submitError}
          className="mb-6"
        />
      )}
      
      <form className="space-y-6">
        <SelectField 
          label="카페 선택" 
          options={cafeOptions} 
          value={selectedCafe} 
          onChange={setSelectedCafe} 
        />
        
        <FileUpload 
          label="엑셀 파일 업로드" 
          onChange={handleFileChange} 
          maxSizeMB={10}
        />
        
        <FormActions 
          onSubmit={handleSubmit} 
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
          submitText="파일 업로드"
        />
      </form>
    </>
  );
} 