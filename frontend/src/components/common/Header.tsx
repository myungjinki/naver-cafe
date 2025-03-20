"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getCookie, deleteCookie } from 'cookies-next';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title?: string;
}

export function Header({ title = "네이버 카페 자동 글 올리기" }: HeaderProps) {
  const router = useRouter();
  const [hasToken, setHasToken] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // 클라이언트 측에서만 실행되는 코드
  useEffect(() => {
    setIsClient(true);
    const token = getCookie('access_token');
    setHasToken(token !== undefined);
  }, []);

  const handleLogout = () => {
    deleteCookie('access_token');
    setHasToken(false);
    router.push('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between sticky top-0 z-10 shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors">
          {title}
        </Link>
      </div>
      
      <nav className="flex gap-4 items-center">
        {isClient && (
          hasToken ? (
            <>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                대시보드
              </Link>
              <Link href="/input" className="text-gray-600 hover:text-gray-900">
                업로드
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                로그아웃
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button variant="outline" size="sm">
                로그인
              </Button>
            </Link>
          )
        )}
      </nav>
    </header>
  );
} 