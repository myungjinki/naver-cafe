import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface ColumnDefinition<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
  cell?: (item: T) => React.ReactNode;
  width?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDefinition<T>[];
  keyField: keyof T;
  selectable?: boolean;
  selectedItems?: T[];
  onSelectItem?: (item: T, isSelected: boolean) => void;
  onSelectAll?: (isSelected: boolean) => void;
  maxHeight?: string;
  className?: string;
  isLoading?: boolean;
  emptyMessage?: string;
}

export function DataTable<T>({
  data,
  columns,
  keyField,
  selectable = false,
  selectedItems = [],
  onSelectItem,
  onSelectAll,
  maxHeight,
  className,
  isLoading = false,
  emptyMessage = "데이터가 없습니다."
}: DataTableProps<T>) {
  const areAllSelected = data.length > 0 && selectedItems.length === data.length;
  
  const isItemSelected = (item: T) => {
    return selectedItems.some(selectedItem => 
      String(selectedItem[keyField]) === String(item[keyField])
    );
  };

  const handleSelectAll = (checked: boolean) => {
    if (onSelectAll) {
      onSelectAll(checked);
    }
  };

  const handleSelectItem = (item: T, checked: boolean) => {
    if (onSelectItem) {
      onSelectItem(item, checked);
    }
  };

  const renderCell = (item: T, column: ColumnDefinition<T>) => {
    if (column.cell) {
      return column.cell(item);
    }
    
    if (typeof column.accessor === 'function') {
      return column.accessor(item);
    }
    
    const value = item[column.accessor];
    
    if (typeof value === 'boolean') {
      return value ? '예' : '아니오';
    }
    
    return value as React.ReactNode;
  };
  
  const tableContent = (
    <Table className={className}>
      <TableHeader className="bg-gray-50">
        <TableRow className="hover:bg-gray-100">
          {selectable && (
            <TableHead className="w-12 text-center">
              <Checkbox
                checked={areAllSelected}
                onCheckedChange={handleSelectAll}
                className="border-gray-300"
              />
            </TableHead>
          )}
          
          {columns.map((column, index) => (
            <TableHead 
              key={index} 
              className={column.className}
              style={column.width ? { width: column.width } : undefined}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      
      <TableBody>
        {isLoading ? (
          <TableRow>
            <TableCell 
              colSpan={selectable ? columns.length + 1 : columns.length}
              className="h-32 text-center text-gray-500"
            >
              데이터를 불러오는 중...
            </TableCell>
          </TableRow>
        ) : data.length === 0 ? (
          <TableRow>
            <TableCell 
              colSpan={selectable ? columns.length + 1 : columns.length}
              className="h-32 text-center text-gray-500"
            >
              {emptyMessage}
            </TableCell>
          </TableRow>
        ) : (
          data.map(item => (
            <TableRow 
              key={String(item[keyField])} 
              className="hover:bg-gray-100 border-t border-gray-200"
            >
              {selectable && (
                <TableCell className="text-center">
                  <Checkbox 
                    checked={isItemSelected(item)}
                    onCheckedChange={(checked) => handleSelectItem(item, checked as boolean)}
                    className="border-gray-300"
                  />
                </TableCell>
              )}
              
              {columns.map((column, index) => (
                <TableCell key={index} className={column.className}>
                  {renderCell(item, column)}
                </TableCell>
              ))}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
  
  if (maxHeight) {
    return (
      <div className="border border-gray-200 rounded-md overflow-hidden">
        <ScrollArea className={maxHeight}>
          {tableContent}
        </ScrollArea>
      </div>
    );
  }
  
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden">
      {tableContent}
    </div>
  );
} 