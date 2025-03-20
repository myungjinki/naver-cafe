// app/dashboard/page.js
'use client';

import React, { useState } from 'react';
import { Header as CommonHeader } from '@/components/common';
import {
  SubHeader,
  AccountSection,
  PostSection,
  TaskSection,
  EditorSection,
  LogSection
} from '@/components/dashboard';

export default function Dashboard() {
  // 샘플 계정 데이터
  const accounts = [
    { id: 'edgefocus', password: 'dydtla1234', status: true },
  ];
  
  // 샘플 게시글 데이터
  const posts = [
    { id: 1, type: '(중학교) 배수학교', category: '베스트', status: '등록', checked: true },
    { id: 2, type: '(노원구) 메롱 1학년', category: '마파', status: '등록', checked: true },
    { id: 3, type: '(서울) 철1학년', category: '노란', status: '등록', checked: false },
    { id: 4, type: '(서울) 철420번', category: '베스트', status: '등록', checked: false },
    { id: 5, type: '(노원) 솔마을', category: '다락', status: '등록', checked: true },
    { id: 6, type: '(중학교) 메가카페', category: '종로', status: '등록', checked: true },
    { id: 7, type: '(중학교)순수의 토론방', category: '순수', status: '등록', checked: false },
    { id: 8, type: '(강남구) 메롱 6학년', category: '메롱', status: '등록', checked: false },
    { id: 9, type: '(용산구) 메가카페', category: '메가', status: '등록', checked: true },
    { id: 10, type: '(관악,동작) 메롱', category: '메가', status: '등록', checked: false },
    { id: 11, type: '(영등포, 관악) 메롱', category: '메가', status: '등록', checked: false },
    { id: 12, type: '(송파) 포켓몬터지겜', category: '포켓', status: '등록', checked: true },
    { id: 13, type: '(동작구) 포켓클럽', category: '포켓', status: '등록', checked: false },
  ];
  
  // 작업 설정 데이터
  const cafes = [
    { id: 104, name: 'DD머그니스', location: '서울', cafe: 'edgefocus', category: '은평구', type: '설명' },
    { id: 105, name: 'DD머그니스', location: '경기', cafe: 'edgefocus', category: '경기남부', type: '대기' },
    { id: 106, name: 'DD머그니스', location: '경기', cafe: 'edgefocus', category: '경조율', type: '설명' },
    { id: 107, name: 'DD머그니스', location: '경기', cafe: 'edgefocus', category: '파주시', type: '설명' },
    { id: 108, name: 'DD머그니스', location: '서울', cafe: 'edgefocus', category: '서울시', type: '설명', checked: true },
    { id: 109, name: 'DD머그니스', location: '경기', cafe: 'edgefocus', category: '서울근교', type: '설명', checked: true },
  ];
  
  // 작업 로그 데이터
  const logs = [
    { date: '2025.03.13 18:14', message: 'DD머그니스카페 (deep dive business) 게재 [경기] 경기 남부 시골마을 [edgefocus] 아이디의 [서울시 중구] 메이플 투썸플레이스 장소모임 30000원의 글메 등록되었습니다. 카페글 등록 연결중...' },
    { date: '2025.03.13 18:14', message: 'https://cafe.naver.com/deepdivebusiness카페 정보를 가져오는 중..' },
    { date: '2025.03.13 18:14', message: '등록시 필요한 글메 정보를 가져옵니다...' },
    { date: '2025.03.13 18:15', message: '카페글 URL : [ https://m.cafe.naver.com/ArticleRead.nhn?clubid=31330822&menuid=28&articleid=565 ]' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <CommonHeader />
      <main className="flex-1">
        <SubHeader />
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-12 gap-4">
            <AccountSection accounts={accounts} />
            <PostSection posts={posts} />
            <TaskSection cafes={cafes} />
            <EditorSection />
            <LogSection logs={logs} />
          </div>
        </div>
      </main>
    </div>
  );
}