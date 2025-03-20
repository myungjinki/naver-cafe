import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface PricingFeature {
  text: string;
}

interface PricingPlanProps {
  title: string;
  price: string;
  period: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant?: 'default' | 'outline';
  buttonLink: string;
}

function PricingPlan({ 
  title, 
  price, 
  period, 
  features, 
  isPopular, 
  buttonText,
  buttonVariant = 'default',
  buttonLink 
}: PricingPlanProps) {
  return (
    <Card className={`border-2 ${isPopular ? 'border-green-600' : 'border-gray-100'} relative`}>
      {isPopular && (
        <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
          <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            가장 인기있는 요금제
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="mt-4 text-4xl font-bold">
          {price}<span className="text-lg font-normal text-gray-500">{period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <Button 
          variant={buttonVariant} 
          className={`w-full mt-8 ${buttonVariant === 'default' ? 'bg-green-600 hover:bg-green-700' : ''}`} 
          asChild={buttonLink !== '#'}
        >
          {buttonLink !== '#' ? (
            <Link href={buttonLink}>{buttonText}</Link>
          ) : (
            <span>{buttonText}</span>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

export function Pricing() {
  const pricingPlans = [
    {
      title: "스타터",
      price: "₩29,900",
      period: "/월",
      features: [
        { text: "월 50개 글 생성" },
        { text: "1개 카페 연동" },
        { text: "기본 통계 및 분석" },
        { text: "이메일 지원" }
      ],
      isPopular: false,
      buttonText: "시작하기",
      buttonVariant: 'default' as const,
      buttonLink: "/login"
    },
    {
      title: "프로",
      price: "₩79,900",
      period: "/월",
      features: [
        { text: "월 200개 글 생성" },
        { text: "5개 카페 연동" },
        { text: "고급 통계 및 분석" },
        { text: "우선 이메일 지원" },
        { text: "커스텀 템플릿 5개" }
      ],
      isPopular: true,
      buttonText: "시작하기",
      buttonVariant: 'default' as const,
      buttonLink: "/login"
    },
    {
      title: "엔터프라이즈",
      price: "문의",
      period: "/월",
      features: [
        { text: "무제한 글 생성" },
        { text: "무제한 카페 연동" },
        { text: "고급 통계 및 분석" },
        { text: "전용 매니저 배정" },
        { text: "API 연동" }
      ],
      isPopular: false,
      buttonText: "문의하기",
      buttonVariant: 'outline' as const,
      buttonLink: "#"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">합리적인 요금제</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 니즈에 맞는 유연한 요금제를 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant}
              buttonLink={plan.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 