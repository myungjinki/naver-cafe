import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTA() {
  return (
    <section className="py-20 bg-green-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          지금 바로 시작하세요
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          회원가입 후 7일간 무료로 모든 기능을 체험해보세요.
          별도의 신용카드 정보 없이 시작할 수 있습니다.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex mb-4">
            <Input 
              placeholder="이메일 주소를 입력하세요" 
              className="rounded-r-none bg-white"
            />
            <Button className="rounded-l-none bg-gray-900 hover:bg-gray-800" asChild>
              <Link href="/login">무료로 시작하기</Link>
            </Button>
          </div>
          <p className="text-sm text-green-100 mt-2">
            가입 시 이용약관 및 개인정보처리방침에 동의하게 됩니다.
          </p>
        </div>
      </div>
    </section>
  );
} 