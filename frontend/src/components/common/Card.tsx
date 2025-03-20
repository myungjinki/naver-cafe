import React from "react";

interface CardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
}

export function Card({
  title,
  description,
  children,
  footer,
  className = "",
  headerClassName = "",
  bodyClassName = "",
  footerClassName = ""
}: CardProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden ${className}`}>
      {(title || description) && (
        <div className={`px-4 py-3 border-b border-gray-200 ${headerClassName}`}>
          {title && (
            typeof title === "string" 
              ? <h3 className="text-lg font-medium text-gray-900">{title}</h3> 
              : title
          )}
          {description && (
            typeof description === "string" 
              ? <p className="mt-1 text-sm text-gray-500">{description}</p>
              : description
          )}
        </div>
      )}
      
      <div className={`p-4 ${bodyClassName}`}>
        {children}
      </div>
      
      {footer && (
        <div className={`px-4 py-3 bg-gray-50 border-t border-gray-200 ${footerClassName}`}>
          {footer}
        </div>
      )}
    </div>
  );
}

interface SimpleCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SimpleCard({ children, className = "" }: SimpleCardProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm p-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export function CardGrid({ 
  children, 
  columns = 3,
  gap = 'md',
  className = ""
}: CardGridProps) {
  const gapClass = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6'
  }[gap];

  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <div className={`grid ${gridClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
} 