import React from 'react';
import { Button } from "@/components/ui/button";

export function SubHeader() {
  return (
    <div className="bg-gray-50 p-2 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-green-600 text-xl font-bold mr-2">N</span>
          <h2 className="text-xl font-bold text-gray-800">Cafe Post</h2>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span>하드웨어 이름 <span className="text-green-600">[00718856]</span> | <span className="text-green-600">luxury168</span> 님 반갑습니다!</span>
          <Button variant="outline" size="sm" className="ml-4 bg-green-600 hover:bg-green-700 text-white">
            정식버전
          </Button>
        </div>
      </div>
    </div>
  );
} 