import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DemoTabContentProps {
  title: string;
  description: string;
  imageAlt: string;
}

function DemoTabContent({ title, description, imageAlt }: DemoTabContentProps) {
  return (
    <div className="rounded-lg overflow-hidden border-2 border-gray-100">
      <div className="aspect-video bg-gray-100 flex items-center justify-center">
        <img 
          src="/api/placeholder/800/450" 
          alt={imageAlt} 
          className="w-full"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Demo() {
  const tabs = [
    {
      id: "excel",
      label: "엑셀 입력",
      title: "간편한 엑셀 입력",
      description: "익숙한 엑셀 형식으로 글의 주제, 키워드, 업로드 일정을 관리하세요. 템플릿을 활용하면 더욱 빠르게 작업할 수 있습니다.",
      imageAlt: "엑셀 입력 화면 데모"
    },
    {
      id: "generation",
      label: "AI 글 생성",
      title: "인공지능 글 생성",
      description: "최신 LLM 기술로 자연스럽고 고품질의 글을 생성합니다. 키워드와 주제만 입력하면 네이버 카페에 최적화된 글이 완성됩니다.",
      imageAlt: "AI 글 생성 화면 데모"
    },
    {
      id: "dashboard",
      label: "관리 대시보드",
      title: "통합 관리 대시보드",
      description: "모든 글의 상태, 예약 현황, 업로드 이력을 한눈에 확인하세요. 간편한 대시보드로 카페 운영을 효율적으로 관리할 수 있습니다.",
      imageAlt: "관리 대시보드 데모"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">서비스 데모</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            실제 서비스 작동 방식을 확인해보세요.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="excel" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>{tab.label}</TabsTrigger>
              ))}
            </TabsList>
            
            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <DemoTabContent
                  title={tab.title}
                  description={tab.description}
                  imageAlt={tab.imageAlt}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
} 