// app/page.js
'use client';

import { useState } from 'react';
import * as XLSX from 'xlsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";

interface SheetData {
  [key: string]: any[][];
}

export default function Home() {
  const [data, setData] = useState<SheetData | null>(null);
  const [sheets, setSheets] = useState<string[]>([]);
  const [activeSheet, setActiveSheet] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');

  // 드래그 앤 드롭 이벤트 핸들러
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      processExcel(file);
    }
  };

  // 파일 입력 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      processExcel(file);
    }
  };

  // 엑셀 파일 처리 함수
  const processExcel = (file: File) => {
    setIsLoading(true);
    setFileName(file.name);
    
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        if (e.target && e.target.result) {
          const data = new Uint8Array(e.target.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          
          // 모든 시트 이름 추출
          const sheetNames = workbook.SheetNames;
          setSheets(sheetNames);
          
          // 첫 번째 시트를 기본으로 활성화
          const firstSheet = sheetNames[0];
          setActiveSheet(firstSheet);
          
          // 모든 시트의 데이터를 객체로 저장
          const sheetsData: SheetData = {};
          sheetNames.forEach(sheetName => {
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            sheetsData[sheetName] = json as any[][];
          });
          
          setData(sheetsData);
        }
      } catch (error) {
        console.error('파일 처리 중 오류 발생:', error);
        alert('엑셀 파일을 처리하는 동안 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };
    
    reader.onerror = () => {
      setIsLoading(false);
      alert('파일을 읽는 중 오류가 발생했습니다.');
    };
    
    reader.readAsArrayBuffer(file);
  };

  // 현재 활성화된 시트의 데이터 추출
  const activeData = data && data[activeSheet] ? data[activeSheet] : [];
  const headers = activeData.length > 0 ? activeData[0] : [];
  const rows = activeData.length > 1 ? activeData.slice(1) : [];

  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">엑셀 파일 뷰어</CardTitle>
          <CardDescription>
            엑셀 파일을 드래그 앤 드롭하거나 선택하여 웹에서 표로 확인하세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div 
            className="border-2 border-dashed rounded-lg p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => {
              const fileInput = document.getElementById('file-input');
              if (fileInput) {
                fileInput.click();
              }
            }}
          >
            {isLoading ? (
              <div className="flex flex-col items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">파일 처리 중...</p>
              </div>
            ) : (
              <>
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">파일을 이곳에 드래그하거나 클릭하여 선택하세요</p>
                <p className="mt-1 text-xs text-gray-400">지원 형식: .xlsx, .xls</p>
                {fileName && <p className="mt-3 text-xs font-medium text-blue-500">{fileName}</p>}
              </>
            )}
            <Input 
              id="file-input" 
              type="file" 
              className="hidden" 
              accept=".xlsx,.xls" 
              onChange={handleFileChange} 
              disabled={isLoading} 
            />
          </div>
        </CardContent>
      </Card>

      {data && sheets.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{fileName}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setData(null);
                  setSheets([]);
                  setActiveSheet('');
                  setFileName('');
                }}
              >
                초기화
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeSheet} onValueChange={setActiveSheet} className="w-full">
              <TabsList className="mb-4 w-full h-auto flex-wrap">
                {sheets.map(sheet => (
                  <TabsTrigger key={sheet} value={sheet} className="py-2">
                    {sheet}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {sheets.map(sheet => (
                <TabsContent key={sheet} value={sheet} className="border rounded-md p-1">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          {data[sheet][0] && data[sheet][0].map((header: any, index: number) => (
                            <TableHead key={index} className="font-medium">
                              {header !== undefined ? header.toString() : ''}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data[sheet].slice(1).map((row: any[], rowIndex: number) => (
                          <TableRow key={rowIndex}>
                            {row.map((cell: any, cellIndex: number) => (
                              <TableCell key={cellIndex}>
                                {cell !== undefined ? cell.toString() : ''}
                              </TableCell>
                            ))}
                            {/* 행의 셀 수가 헤더보다 적을 경우 빈 셀로 채우기 */}
                            {data[sheet][0] && row.length < data[sheet][0].length && 
                              Array(data[sheet][0].length - row.length).fill(null).map((_, i: number) => (
                                <TableCell key={`empty-${rowIndex}-${i}`}></TableCell>
                              ))
                            }
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
}