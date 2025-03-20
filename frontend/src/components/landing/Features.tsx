import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSpreadsheet, Bot, Share2, Settings } from "lucide-react";
import { CardGrid } from "@/components/common/Card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export function Features() {
  const featureCards = [
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-green-600" />,
      title: "엑셀 파일 입력",
      description: "익숙한 엑셀 형식으로 작성하고 업로드하세요. 손쉬운 데이터 관리가 가능합니다."
    },
    {
      icon: <Bot className="h-6 w-6 text-green-600" />,
      title: "LLM 글 생성",
      description: "AI가 자연스러운 글을 생성합니다. 키워드만 입력하면 고품질 콘텐츠가 완성됩니다."
    },
    {
      icon: <Share2 className="h-6 w-6 text-green-600" />,
      title: "자동 업로드",
      description: "원하는 시간에 자동으로 네이버 카페에 글을 게시합니다. 일정을 미리 계획하세요."
    },
    {
      icon: <Settings className="h-6 w-6 text-green-600" />,
      title: "편리한 관리",
      description: "한 곳에서 모든 글을 관리하세요. 업로드 상태, 통계, 성과를 쉽게 확인할 수 있습니다."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">서비스 특징</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            카페글지기는 네이버 카페 운영을 자동화하고 최적화하는 데 필요한 모든 기능을 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCards.map((card, index) => (
            <FeatureCard 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 