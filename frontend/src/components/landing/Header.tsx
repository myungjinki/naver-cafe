import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b sticky top-0 z-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-green-600">카페글지기</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-green-600 font-medium">서비스 특징</Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-green-600 font-medium">이용 방법</Link>
          <Link href="#pricing" className="text-gray-600 hover:text-green-600 font-medium">요금제</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex" asChild>
            <Link href="/login">로그인</Link>
          </Button>
          <Button className="bg-green-600 hover:bg-green-700" asChild>
            <Link href="/login">시작하기</Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 