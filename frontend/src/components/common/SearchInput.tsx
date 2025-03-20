import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
  debounceMs?: number;
  autoFocus?: boolean;
  clearOnEscape?: boolean;
}

export function SearchInput({
  value,
  onChange,
  onSearch,
  placeholder = "검색...",
  className = "",
  debounceMs = 300,
  autoFocus = false,
  clearOnEscape = true
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync input value when external value changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Auto focus if enabled
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Handle escape key to clear input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (clearOnEscape && e.key === "Escape") {
        setInputValue("");
        onChange("");
        if (onSearch) onSearch("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [clearOnEscape, onChange, onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    // Clear previous debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    // Set new debounce timer
    debounceTimerRef.current = setTimeout(() => {
      onChange(newValue);
      if (onSearch) {
        onSearch(newValue);
      }
    }, debounceMs);
  };

  const handleClear = () => {
    setInputValue("");
    onChange("");
    if (onSearch) onSearch("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      // Clear debounce timer to prevent double search
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      
      onSearch(inputValue);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
        <Search className="w-4 h-4" />
      </div>
      
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full py-2 pl-10 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
      />
      
      {inputValue && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
          onClick={handleClear}
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
} 