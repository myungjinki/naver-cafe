import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Log {
  date: string;
  message: string;
}

interface LogSectionProps {
  logs: Log[];
}

export function LogSection({ logs }: LogSectionProps) {
  return (
    <Card className="col-span-12 bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <h3 className="text-lg font-bold border-b border-gray-700 pb-2 mb-4">작업내역</h3>
        
        <div className="bg-gray-700 rounded-md border border-gray-600 p-2 h-32 overflow-y-auto text-xs">
          {logs.map((log, index) => (
            <div key={index} className="mb-1">
              <span className="text-gray-400">[{log.date}]</span> {log.message}
            </div>
          ))}
        </div>
        
        <div className="mt-2 text-xs text-gray-400">
          ※ 네이버가 맘을공유 [응집설정] - [네이버 추천자료]를 이용해주세요.
        </div>
      </CardContent>
    </Card>
  );
} 