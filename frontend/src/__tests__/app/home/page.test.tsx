import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import HomePage from '@/app/home/page';
import '@testing-library/jest-dom';
import * as XLSX from 'xlsx';

// XLSX 모듈 모킹
jest.mock('xlsx', () => ({
  read: jest.fn(),
  utils: {
    sheet_to_json: jest.fn()
  }
}));

describe('HomePage', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('renders home page correctly', () => {
    render(<HomePage />);
    
    // Check page title and description
    expect(screen.getByText('엑셀 파일 뷰어')).toBeInTheDocument();
    expect(screen.getByText(/엑셀 파일을 드래그 앤 드롭하거나 선택하여 웹에서 표로 확인하세요/i)).toBeInTheDocument();
    
    // Check file upload area text
    expect(screen.getByText(/파일을 이곳에 드래그하거나 클릭하여 선택하세요/i)).toBeInTheDocument();
    expect(screen.getByText(/지원 형식: .xlsx, .xls/i)).toBeInTheDocument();
    
    // Check if the file input exists
    const fileInput = document.getElementById('file-input');
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute('type', 'file');
    expect(fileInput).toHaveAttribute('accept', '.xlsx,.xls');
  });

  it('handles file upload correctly', async () => {
    // Mock XLSX functions
    const mockSheetNames = ['Sheet1', 'Sheet2'];
    const mockData = [['Header1', 'Header2'], ['Value1', 'Value2']];
    
    (XLSX.read as jest.Mock).mockReturnValue({
      SheetNames: mockSheetNames,
      Sheets: {
        Sheet1: {},
        Sheet2: {}
      }
    });
    
    (XLSX.utils.sheet_to_json as jest.Mock).mockReturnValue(mockData);
    
    render(<HomePage />);
    
    // Create a mock file
    const file = new File(['dummy content'], 'test.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    // Get the file input
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    
    // Mock FileReader
    const mockFileReader = {
      readAsArrayBuffer: jest.fn(),
      onload: null as any,
      result: new ArrayBuffer(8),
    };
    
    global.FileReader = jest.fn(() => mockFileReader) as any;
    
    // Trigger the file upload wrapped in act
    if (fileInput) {
      await act(async () => {
        fireEvent.change(fileInput, { target: { files: [file] } });
        
        // Simulate the FileReader onload event
        if (mockFileReader.onload) {
          mockFileReader.onload({ target: mockFileReader } as any);
        }
      });
      
      // XLSX functions should have been called
      expect(XLSX.read).toHaveBeenCalled();
      expect(XLSX.utils.sheet_to_json).toHaveBeenCalled();
    }
  });
}); 