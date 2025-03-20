"use client";

import React from 'react';

interface ExcelDataViewerProps {
  data: Record<string, any>[];
  columns: { key: string; label: string }[];
}

export function ExcelDataViewer({ data, columns }: ExcelDataViewerProps) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-gray-50 rounded-md p-8 text-center text-gray-500">
        표시할 데이터가 없습니다.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th 
                key={column.key} 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {columns.map((column) => (
                <td 
                  key={`${rowIndex}-${column.key}`} 
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {row[column.key] !== undefined ? String(row[column.key]) : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 