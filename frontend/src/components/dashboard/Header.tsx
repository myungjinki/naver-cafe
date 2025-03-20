import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="bg-white p-4 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-green-600 text-2xl font-bold">N</span>
          <h1 className="text-2xl font-bold text-gray-800">Cafe Post</h1>
          <span className="text-sm text-gray-500">Ver. 2.1.7</span>
          <Badge className="ml-2 bg-blue-500 hover:bg-blue-600">notice</Badge>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-600">
            홈페이지 바로가기
          </Button>
        </div>
      </div>
    </header>
  );
} 