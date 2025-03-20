// app/page.js
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { FormLayout, FileUploadForm } from '@/components/input';
import { Header } from '@/components/common';

export default function InputPage() {
  const router = useRouter();
  const [isUploaded, setIsUploaded] = useState(false);
  
  // 페이지 로드 시 access_token 확인
  useEffect(() => {
    const accessToken = getCookie('access_token');
    
    // access_token이 없으면 로그인 페이지로 리다이렉트
    if (!accessToken) {
      router.push('/login');
    }
  }, [router]);
  
  const handleSuccess = () => {
    // 업로드 성공 상태 변경
    setIsUploaded(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <FormLayout 
          title="엑셀 파일 업로드" 
          description={
            isUploaded 
              ? "파일이 성공적으로 업로드되었습니다. 아래에서 데이터를 확인하세요." 
              : "자동 게시글에 사용할 엑셀 파일을 업로드하세요."
          }
        >
          <FileUploadForm onSuccess={handleSuccess} />
        </FormLayout>
      </main>
    </div>
  );
}