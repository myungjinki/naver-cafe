// app/page.js
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { 
  FormLayout, 
  SelectField, 
  FileUpload, 
  FormActions 
} from '@/components/input';
import { Alert, SuccessAlert } from '@/components/common/Alert';

export default function InputPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCafe, setSelectedCafe] = useState("cafe1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  
  // 페이지 로드 시 access_token 확인
  useEffect(() => {
    const accessToken = getCookie('access_token');
    
    // access_token이 없으면 로그인 페이지로 리다이렉트
    if (!accessToken) {
      router.push('/login');
    }
  }, [router]);
  
  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
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
    
    // 실제로는 API 호출 등을 수행
    try {
      // API 호출 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      
      // 성공 후 3초 뒤 대시보드로 이동
      setTimeout(() => {
        router.push('/dashboard');
      }, 3000);
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
    <FormLayout 
      title="엑셀 파일 업로드" 
      description="자동 게시글에 사용할 엑셀 파일을 업로드하세요."
    >
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
    </FormLayout>
  );
}