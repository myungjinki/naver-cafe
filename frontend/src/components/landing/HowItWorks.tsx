import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface StepItemProps {
  number: number;
  title: string;
  description: string;
}

function StepItem({ number, title, description }: StepItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "서비스 가입",
      description: "간단한 회원가입 절차로 서비스를 시작하세요."
    },
    {
      number: 2,
      title: "엑셀 파일 업로드",
      description: "형식에 맞게 작성된 엑셀 파일을 업로드하세요."
    },
    {
      number: 3,
      title: "글 생성 및 업로드",
      description: "AI가 글을 생성하고 원하는 시간에 업로드합니다."
    },
    {
      number: 4,
      title: "글 관리",
      description: "대시보드에서 업로드된 글을 편리하게 관리하세요."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">서비스 이용 방법</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            4단계 간단한 과정으로 네이버 카페 글쓰기를 자동화하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <StepItem 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <Link href="/login">지금 시작하기</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 