// app/page.js
'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { FormLayout, FileUploadForm } from '@/components/input';

export default function InputPage() {
  const router = useRouter();
  
  // 페이지 로드 시 access_token 확인
  useEffect(() => {
    const accessToken = getCookie('access_token');
    
    // access_token이 없으면 로그인 페이지로 리다이렉트
    if (!accessToken) {
      router.push('/login');
    }
  }, [router]);
  
  const handleSuccess = () => {
    // 성공 후 대시보드로 이동
    router.push('/dashboard');
  };

  return (
    <FormLayout 
      title="엑셀 파일 업로드" 
      description="자동 게시글에 사용할 엑셀 파일을 업로드하세요."
    >
      <FileUploadForm onSuccess={handleSuccess} />
    </FormLayout>
  );
}