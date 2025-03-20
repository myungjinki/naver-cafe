import React from 'react';
import Link from 'next/link';

interface FooterLinkColumnProps {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
}

function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-gray-600 hover:text-green-600">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const footerColumns = [
    {
      title: "서비스",
      links: [
        { text: "글 생성", href: "#" },
        { text: "자동 업로드", href: "#" },
        { text: "통계 및 분석", href: "#" },
        { text: "API 연동", href: "#" }
      ]
    },
    {
      title: "회사",
      links: [
        { text: "소개", href: "#" },
        { text: "블로그", href: "#" },
        { text: "채용", href: "#" },
        { text: "문의하기", href: "#" }
      ]
    },
    {
      title: "고객지원",
      links: [
        { text: "FAQ", href: "#" },
        { text: "이용가이드", href: "#" },
        { text: "이용약관", href: "#" },
        { text: "개인정보처리방침", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">카페글지기</h3>
            <p className="text-gray-600 text-sm">
              엑셀로 시작하는 네이버 카페 자동 글쓰기 및 관리 서비스입니다.
            </p>
          </div>
          
          {footerColumns.map((column, index) => (
            <FooterLinkColumn 
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © 2025 카페글지기. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 