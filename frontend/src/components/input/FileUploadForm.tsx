"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as XLSX from 'xlsx';
import { 
  SelectField, 
  FileUpload, 
  FormActions,
  ExcelDataViewer
} from '@/components/input';
import { Alert, SuccessAlert } from '@/components/common/Alert';

interface FileUploadFormProps {
  onSuccess?: () => void;
}

type ExcelRow = Record<string, any>;

export function FileUploadForm({ onSuccess }: FileUploadFormProps) {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCafe, setSelectedCafe] = useState("cafe1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [excelData, setExcelData] = useState<ExcelRow[]>([]);
  const [excelColumns, setExcelColumns] = useState<{key: string; label: string}[]>([]);
  
  const handleFileChange = async (file: File | null) => {
    setSelectedFile(file);
    if (submitError) {
      setSubmitError(null);
    }
    
    // 파일이 선택되면 엑셀 데이터 파싱
    if (file) {
      try {
        const data = await readExcelFile(file);
        setExcelData(data.rows);
        setExcelColumns(data.columns);
      } catch (error) {
        console.error('Excel 파일 파싱 중 오류:', error);
        setSubmitError('Excel 파일을 읽는 중 오류가 발생했습니다.');
      }
    } else {
      setExcelData([]);
      setExcelColumns([]);
    }
  };
  
  // 엑셀 파일 읽기 함수
  const readExcelFile = async (file: File): Promise<{rows: ExcelRow[], columns: {key: string; label: string}[]}> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const data = e.target?.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          
          // 첫 번째 시트 선택
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          
          // JSON으로 변환
          const jsonData = XLSX.utils.sheet_to_json<ExcelRow>(worksheet);
          
          // 컬럼 정보 추출
          const columns: {key: string; label: string}[] = [];
          
          if (jsonData.length > 0) {
            const firstRow = jsonData[0];
            Object.keys(firstRow).forEach(key => {
              columns.push({
                key,
                label: key
              });
            });
          }
          
          resolve({
            rows: jsonData,
            columns
          });
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = (error) => reject(error);
      
      // 파일 읽기 시작
      reader.readAsBinaryString(file);
    });
  };
  
  const cafeOptions = [
    { value: "cafe1", label: "메가스터디 카페" },
    { value: "cafe2", label: "대치동 학원" },
    { value: "cafe3", label: "강남 카페" },
    { value: "cafe4", label: "서울대입구 카페" },
  ];
  
  const handleSubmit = async () => {
    if (!selectedFile) {
      setSubmitError("파일을 선택해주세요.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // API 호출 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 업로드 폼 데이터 구성
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('cafeId', selectedCafe);
      
      // 실제로는 여기서 API 호출
      // const response = await fetch('/api/upload', { method: 'POST', body: formData });
      // const data = await response.json();
      
      setSubmitSuccess(true);
      
      // onSuccess 콜백은 더 이상 리다이렉트에 사용하지 않음
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setSubmitError("파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCancel = () => {
    if (confirm("작성 중인 내용이 저장되지 않습니다. 취소하시겠습니까?")) {
      router.push('/dashboard');
    }
  };

  return (
    <>
      {submitSuccess && (
        <SuccessAlert 
          title="업로드 성공" 
          message="파일이 성공적으로 업로드되었습니다." 
          className="mb-6"
        />
      )}
      
      {submitError && (
        <Alert 
          title="오류" 
          type="error" 
          message={submitError}
          className="mb-6"
        />
      )}
      
      <form className="space-y-6">
        <SelectField 
          label="카페 선택" 
          options={cafeOptions} 
          value={selectedCafe} 
          onChange={setSelectedCafe} 
        />
        
        <FileUpload 
          label="엑셀 파일 업로드" 
          onChange={handleFileChange} 
          maxSizeMB={10}
          acceptedFileTypes=".xlsx,.xls"
        />
        
        <FormActions 
          onSubmit={handleSubmit} 
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
          submitText="파일 업로드"
        />
      </form>
      
      {/* 엑셀 데이터 표시 영역 */}
      {excelData.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-medium mb-4">업로드된 엑셀 데이터</h3>
          <ExcelDataViewer 
            data={excelData} 
            columns={excelColumns}
          />
        </div>
      )}
    </>
  );
} 