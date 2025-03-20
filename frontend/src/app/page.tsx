// app/page.js
'use client';

import React from 'react';
import {
  Header,
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
      <Header />

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