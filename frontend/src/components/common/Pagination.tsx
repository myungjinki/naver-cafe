import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  pageSize?: number;
  showTotalItems?: boolean;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  pageSize,
  showTotalItems = true,
  className = ""
}: PaginationProps) {
  const pagesToShow = 5;
  
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPaginationItems = () => {
    const items = [];
    
    // Calculate the range of page numbers to display
    let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + pagesToShow - 1);
    
    // Adjust startPage if we're near the end
    if (endPage - startPage + 1 < pagesToShow) {
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }
    
    // First page button
    items.push(
      <button
        key="first"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="px-2 py-1 text-sm rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="처음으로"
      >
        <ChevronsLeft className="w-4 h-4" />
      </button>
    );
    
    // Previous page button
    items.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 text-sm rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="이전"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
    );
    
    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 text-sm rounded ${
            i === currentPage
              ? "bg-primary text-white"
              : "hover:bg-gray-100"
          }`}
        >
          {i}
        </button>
      );
    }
    
    // Next page button
    items.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-sm rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="다음"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    );
    
    // Last page button
    items.push(
      <button
        key="last"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-sm rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="마지막으로"
      >
        <ChevronsRight className="w-4 h-4" />
      </button>
    );
    
    return items;
  };

  const getItemRangeText = () => {
    if (!totalItems || !pageSize) return "";
    
    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(currentPage * pageSize, totalItems);
    
    return `${start} - ${end} / ${totalItems}`;
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-2 mt-4 ${className}`}>
      {showTotalItems && totalItems !== undefined && pageSize !== undefined && (
        <div className="text-sm text-gray-500">
          {getItemRangeText()}
        </div>
      )}
      
      <div className="flex items-center space-x-1">
        {renderPaginationItems()}
      </div>
    </div>
  );
} 