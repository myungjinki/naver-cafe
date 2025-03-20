// app/page.js
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  CheckCircle2, 
  Upload, 
  PenTool, 
  Clock, 
  LayoutDashboard, 
  ChevronRight, 
  FileSpreadsheet,
  Bot,
  Share2,
  Settings
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
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

      <main className="flex-grow">
        {/* 히어로 섹션 */}
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

        {/* 서비스 특징 섹션 */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">서비스 특징</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                카페글지기는 네이버 카페 운영을 자동화하고 최적화하는 데 필요한 모든 기능을 제공합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <FileSpreadsheet className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>엑셀 파일 입력</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    익숙한 엑셀 형식으로 작성하고 업로드하세요. 손쉬운 데이터 관리가 가능합니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Bot className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>LLM 글 생성</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    AI가 자연스러운 글을 생성합니다. 키워드만 입력하면 고품질 콘텐츠가 완성됩니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Share2 className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>자동 업로드</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    원하는 시간에 자동으로 네이버 카페에 글을 게시합니다. 일정을 미리 계획하세요.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>편리한 관리</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    한 곳에서 모든 글을 관리하세요. 업로드 상태, 통계, 성과를 쉽게 확인할 수 있습니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 사용 방법 섹션 */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">서비스 이용 방법</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                4단계 간단한 과정으로 네이버 카페 글쓰기를 자동화하세요.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">서비스 가입</h3>
                <p className="text-gray-600">
                  간단한 회원가입 절차로 서비스를 시작하세요.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">엑셀 파일 업로드</h3>
                <p className="text-gray-600">
                  형식에 맞게 작성된 엑셀 파일을 업로드하세요.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">글 생성 및 업로드</h3>
                <p className="text-gray-600">
                  AI가 글을 생성하고 원하는 시간에 업로드합니다.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">글 관리</h3>
                <p className="text-gray-600">
                  대시보드에서 업로드된 글을 편리하게 관리하세요.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/login">지금 시작하기</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 데모 섹션 */}
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
                  <TabsTrigger value="excel">엑셀 입력</TabsTrigger>
                  <TabsTrigger value="generation">AI 글 생성</TabsTrigger>
                  <TabsTrigger value="dashboard">관리 대시보드</TabsTrigger>
                </TabsList>
                <TabsContent value="excel" className="rounded-lg overflow-hidden border-2 border-gray-100">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <img 
                      src="/api/placeholder/800/450" 
                      alt="엑셀 입력 화면 데모" 
                      className="w-full"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold mb-2">간편한 엑셀 입력</h3>
                    <p className="text-gray-600">
                      익숙한 엑셀 형식으로 글의 주제, 키워드, 업로드 일정을 관리하세요. 
                      템플릿을 활용하면 더욱 빠르게 작업할 수 있습니다.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="generation" className="rounded-lg overflow-hidden border-2 border-gray-100">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <img 
                      src="/api/placeholder/800/450" 
                      alt="AI 글 생성 화면 데모" 
                      className="w-full"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold mb-2">인공지능 글 생성</h3>
                    <p className="text-gray-600">
                      최신 LLM 기술로 자연스럽고 고품질의 글을 생성합니다. 
                      키워드와 주제만 입력하면 네이버 카페에 최적화된 글이 완성됩니다.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="dashboard" className="rounded-lg overflow-hidden border-2 border-gray-100">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <img 
                      src="/api/placeholder/800/450" 
                      alt="관리 대시보드 데모" 
                      className="w-full"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold mb-2">통합 관리 대시보드</h3>
                    <p className="text-gray-600">
                      모든 글의 상태, 예약 현황, 업로드 이력을 한눈에 확인하세요. 
                      간편한 대시보드로 카페 운영을 효율적으로 관리할 수 있습니다.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* 가격 정책 섹션 */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">합리적인 요금제</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                다양한 니즈에 맞는 유연한 요금제를 제공합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-gray-100">
                <CardHeader>
                  <CardTitle>스타터</CardTitle>
                  <div className="mt-4 text-4xl font-bold">
                    ₩29,900<span className="text-lg font-normal text-gray-500">/월</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>월 50개 글 생성</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>1개 카페 연동</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>기본 통계 및 분석</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>이메일 지원</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-8 bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/login">시작하기</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-600 relative">
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                  <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    가장 인기있는 요금제
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>프로</CardTitle>
                  <div className="mt-4 text-4xl font-bold">
                    ₩79,900<span className="text-lg font-normal text-gray-500">/월</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>월 200개 글 생성</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>5개 카페 연동</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>고급 통계 및 분석</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>우선 이메일 지원</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>커스텀 템플릿 5개</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-8 bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/login">시작하기</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100">
                <CardHeader>
                  <CardTitle>엔터프라이즈</CardTitle>
                  <div className="mt-4 text-4xl font-bold">
                    문의<span className="text-lg font-normal text-gray-500">/월</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>무제한 글 생성</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>무제한 카페 연동</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>고급 통계 및 분석</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>전용 매니저 배정</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>API 연동</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full mt-8">문의하기</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
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
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">카페글지기</h3>
              <p className="text-gray-600 text-sm">
                엑셀로 시작하는 네이버 카페 자동 글쓰기 및 관리 서비스입니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">서비스</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-green-600">글 생성</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">자동 업로드</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">통계 및 분석</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">API 연동</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">회사</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-green-600">소개</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">블로그</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">채용</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">문의하기</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">고객지원</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-green-600">FAQ</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">이용가이드</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">이용약관</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">개인정보처리방침</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-6 text-center">
            <p className="text-sm text-gray-600">
              © 2025 카페글지기. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}