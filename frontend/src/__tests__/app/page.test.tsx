import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '@/app/page';
import '@testing-library/jest-dom';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  CheckCircle2: () => <div data-testid="check-icon" />,
  Upload: () => <div data-testid="upload-icon" />,
  PenTool: () => <div data-testid="pen-icon" />,
  Clock: () => <div data-testid="clock-icon" />,
  LayoutDashboard: () => <div data-testid="dashboard-icon" />,
  ChevronRight: () => <div data-testid="chevron-icon" />,
  FileSpreadsheet: () => <div data-testid="file-icon" />,
  Bot: () => <div data-testid="bot-icon" />,
  Share2: () => <div data-testid="share-icon" />,
  Settings: () => <div data-testid="settings-icon" />,
  Loader2: () => <div data-testid="loader-icon" />,
}));

describe('LandingPage', () => {
  it('renders the landing page correctly', () => {
    const { container } = render(<LandingPage />);
    
    // 테스트 요소 확인 - 구조적 확인으로 전환
    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
    
    // 각 섹션 존재 확인
    expect(container.querySelector('#features')).toBeInTheDocument();
    expect(container.querySelector('#how-it-works')).toBeInTheDocument();
    expect(container.querySelector('#pricing')).toBeInTheDocument();
    
    // 중요 요소 존재 확인 (중복 없는 요소)
    expect(screen.getByText('이용 방법')).toBeInTheDocument();
    expect(screen.getByText('© 2025 카페글지기. All rights reserved.')).toBeInTheDocument();
    
    // 카드 UI 컴포넌트 확인
    const cards = container.querySelectorAll('[data-slot="card"]');
    expect(cards.length).toBeGreaterThan(0);
    
    // 버튼 UI 컴포넌트 확인
    const buttons = container.querySelectorAll('[data-slot="button"]');
    expect(buttons.length).toBeGreaterThan(0);
    
    // 네비게이션 링크 확인
    const navLinks = Array.from(container.querySelectorAll('nav a'));
    expect(navLinks.length).toBe(3);
  });
}); 