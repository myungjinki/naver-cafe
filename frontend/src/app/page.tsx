// app/page.js
'use client';

import React from 'react';
import { Header as CommonHeader } from '@/components/common';
import {
  Hero,
  Features,
  HowItWorks,
  Demo,
  Pricing,
  CTA,
  Footer
} from '@/components/landing';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <CommonHeader title="네이버 카페 자동 글 올리기" />

      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <Demo />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}