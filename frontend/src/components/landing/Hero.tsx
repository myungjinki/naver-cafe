import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              엑셀로 시작하는<br />
              <span className="text-green-600">네이버 카페 자동 글쓰기</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              LLM 기반 자동 글 생성과 예약 업로드로<br />
              네이버 카페 운영을 자동화하세요.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/login">무료로 시작하기</Link>
              </Button>
              <Button size="lg" variant="outline">
                서비스 소개 보기
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-xl p-6 relative">
              <div className="w-full aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                <img 
                  src="/api/placeholder/800/450" 
                  alt="서비스 대시보드 미리보기" 
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 