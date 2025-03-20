import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Play } from "lucide-react";

interface Cafe {
  id: number;
  name: string;
  location: string;
  cafe: string;
  category: string;
  type: string;
  checked?: boolean;
}

interface TaskSectionProps {
  cafes: Cafe[];
}

export function TaskSection({ cafes }: TaskSectionProps) {
  const [date, setDate] = useState('2025.03.13');
  const [hour, setHour] = useState('18');
  const [minute, setMinute] = useState('05');

  return (
    <Card className="col-span-4 bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <h3 className="text-lg font-bold border-b border-gray-700 pb-2 mb-4">작업설정</h3>
        
        <div className="flex justify-end mb-4">
          <Button className="bg-green-600 hover:bg-green-700">
            등록설정
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">아이디 선택</label>
            <Select defaultValue="edgefocus">
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600 text-white">
                <SelectItem value="edgefocus">edgefocus</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm text-gray-400 mb-1 block">카페주소입력</label>
            <Input 
              value="https://cafe.naver.com/deepdivebusiness" 
              className="bg-gray-700 border-gray-600 text-white h-10"
            />
          </div>
          
          <div>
            <label className="text-sm text-gray-400 mb-1 block">게시판 등록</label>
            <Select defaultValue="경기">
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600 text-white">
                <SelectItem value="경기">경기</SelectItem>
                <SelectItem value="서울">서울</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm text-gray-400 mb-1 block">말머리 선택</label>
            <Select defaultValue="default-header">
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder="선택하세요" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600 text-white">
                <SelectItem value="default-header">선택하세요</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm text-gray-400 mb-1 block">게시글 선택</label>
            <Select defaultValue="서울시 중구">
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600 text-white">
                <SelectItem value="서울시 중구">서울시 중구</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm text-gray-400 mb-1 block">통합모니터링</label>
            <Select defaultValue="통합모니터링">
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600 text-white">
                <SelectItem value="통합모니터링">통합모니터링</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-md border border-gray-700 mb-4">
          <Table>
            <TableHeader className="bg-gray-700">
              <TableRow className="hover:bg-gray-700">
                <TableHead className="w-12 text-center">선택</TableHead>
                <TableHead>번호</TableHead>
                <TableHead>카페명</TableHead>
                <TableHead>위치</TableHead>
                <TableHead>카페ID</TableHead>
                <TableHead>카테고리</TableHead>
                <TableHead>유형</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cafes.map((cafe) => (
                <TableRow key={cafe.id} className={`hover:bg-gray-700 border-t border-gray-700 ${cafe.checked ? 'bg-blue-900 bg-opacity-30' : ''}`}>
                  <TableCell className="text-center">
                    <Checkbox checked={cafe.checked} className="border-gray-500" />
                  </TableCell>
                  <TableCell>{cafe.id}</TableCell>
                  <TableCell>{cafe.name}</TableCell>
                  <TableCell>{cafe.location}</TableCell>
                  <TableCell>{cafe.cafe}</TableCell>
                  <TableCell>{cafe.category}</TableCell>
                  <TableCell>{cafe.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="h-5 w-5 text-gray-400" />
          <span className="text-gray-400">예약시간</span>
          <Input 
            value={date} 
            onChange={(e) => setDate(e.target.value)}
            className="w-32 bg-gray-700 border-gray-600 text-white h-8"
          />
          <Input 
            value={hour} 
            onChange={(e) => setHour(e.target.value)}
            className="w-14 bg-gray-700 border-gray-600 text-white h-8 text-center"
          />
          <span className="text-gray-400">:</span>
          <Input 
            value={minute} 
            onChange={(e) => setMinute(e.target.value)}
            className="w-14 bg-gray-700 border-gray-600 text-white h-8 text-center"
          />
          <Button className="bg-green-600 hover:bg-green-700 h-8">
            예약
          </Button>
          <Button variant="outline" className="border-gray-600 text-white h-8 ml-4">
            게시바로가기
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <Play className="h-4 w-4 mr-2" /> 작업시작
          </Button>
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            작업중지
          </Button>
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            선택삭제
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 