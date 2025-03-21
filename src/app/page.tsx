"use client";

// pages/index.tsx
import { useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

// 데이터 타입 정의
type CellValue = string | number | boolean | Date | null;
type DataRow = CellValue[];
type HeaderRow = string[];

export default function ExcelUploader() {
  const [data, setData] = useState<DataRow[]>([]);
  const [headers, setHeaders] = useState<HeaderRow>([]);
  const [fileName, setFileName] = useState<string>("");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [jsonOutput, setJsonOutput] = useState<string>("");
  const [apiResponse, setApiResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files.length) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    if (!file) return;
    
    setFileName(file.name);
    const reader = new FileReader();
    
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (!e.target?.result) return;
      
      const data = new Uint8Array(e.target.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      
      // 첫번째 시트 가져오기
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      
      // 시트 데이터를 JSON으로 변환
      const jsonData = XLSX.utils.sheet_to_json<DataRow>(firstSheet, { header: 1 });
      
      if (jsonData.length > 0) {
        const headers = jsonData[0].map(header => String(header));
        const rows = jsonData.slice(1);
        
        setHeaders(headers);
        setData(rows);
        setSelectedRows([]);
        setJsonOutput("");
        setApiResponse("");
        setError("");
		console.log(jsonOutput);
      }
    };
    
    reader.readAsArrayBuffer(file);
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleRowSelection = (rowIndex: number) => {
    setSelectedRows((prev) => {
      const newSelectedRows = [...prev];
      
      if (newSelectedRows.includes(rowIndex)) {
        // 이미 선택된 경우 제거
        return newSelectedRows.filter(i => i !== rowIndex);
      } else {
        // 선택되지 않은 경우 추가
        return [...newSelectedRows, rowIndex];
      }
    });
  };

  const generateContentAndFetch = async () => {
    try {
      setIsLoading(true);
      setError("");
      
      // JSON 생성
      const selectedData = selectedRows.map(rowIndex => {
        const rowData: Record<string, CellValue> = {};
        data[rowIndex].forEach((cell, cellIndex) => {
          if (cellIndex < headers.length) {
            rowData[headers[cellIndex]] = cell;
          }
        });
        return rowData;
      });
      
      const jsonStr = JSON.stringify(selectedData, null, 2);
      setJsonOutput(jsonStr);
      
      // API 요청 준비
      const requestBody = {
        type: "promotion",
        storeData: selectedData[0]  // 첫 번째 선택된 항목 사용
      };
      
      // API 요청
      const response = await fetch('https://9yjktnplna.execute-api.ap-northeast-2.amazonaws.com/post/bedrock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });
      
      if (!response.ok) {
        throw new Error(`API 요청 실패: ${response.status}`);
      }
      
      const responseData = await response.json();
      
      // 응답에서 프로모션 텍스트 추출
      if (responseData && responseData.promotion) {
        setApiResponse(responseData.promotion);
      } else {
        throw new Error('응답 데이터에 프로모션 정보가 없습니다.');
      }
    } catch (err) {
      console.error('API 요청 오류:', err);
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 프로모션 텍스트를 줄바꿈 유지하며 표시
  const formatPromotionText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">프랜차이즈 데이터 뷰어</h1>
      
      {/* 파일 업로드 영역 */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div 
            className="border-2 border-dashed rounded-lg p-10 text-center cursor-pointer hover:bg-gray-50"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={triggerFileInput}
          >
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
              className="hidden"
              ref={fileInputRef}
            />
            <div className="flex flex-col items-center justify-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <div>
                <p className="text-sm text-gray-600 mb-1">클릭하거나 파일을 드래그하여 업로드하세요</p>
                <p className="text-xs text-gray-500">지원 형식: .xlsx, .xls</p>
              </div>
            </div>
          </div>
          {fileName && (
            <div className="mt-4 text-sm text-gray-700">
              <span className="font-medium">업로드된 파일:</span> {fileName}
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* API 응답 결과 영역 */}
      {(apiResponse || isLoading || error) && (
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">생성된 프로모션</h2>
            
            {isLoading ? (
              <div className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2">생성 중...</span>
              </div>
            ) : error ? (
              <div className="bg-red-50 text-red-800 p-4 rounded-md">
                <p className="font-medium">오류 발생</p>
                <p>{error}</p>
              </div>
            ) : (
              <div className="bg-gray-50 p-6 rounded-md whitespace-pre-line">
                {formatPromotionText(apiResponse)}
              </div>
            )}
          </CardContent>
        </Card>
      )}
      
      {/* 데이터 테이블 */}
      {data.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">데이터 테이블</h2>
              <Button 
                onClick={generateContentAndFetch} 
                disabled={selectedRows.length === 0 || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    생성 중...
                  </>
                ) : "글 생성"}
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">선택</TableHead>
                    {headers.map((header, index) => (
                      <TableHead key={index}>{header}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      <TableCell>
                        <Checkbox
                          checked={selectedRows.includes(rowIndex)}
                          onCheckedChange={() => handleRowSelection(rowIndex)}
                        />
                      </TableCell>
                      {row.map((cell, cellIndex) => (
                        <TableCell key={cellIndex}>{cell !== null ? String(cell) : ""}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}