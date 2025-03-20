import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  };
  actionButton?: {
    text: string;
    onClick: () => void;
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  };
}

export function PageHeader({ title, subtitle, badge, actionButton }: PageHeaderProps) {
  return (
    <header className="bg-white p-4 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-green-600 text-2xl font-bold">N</span>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          {subtitle && <span className="text-sm text-gray-500">{subtitle}</span>}
          {badge && (
            <Badge className="ml-2" variant={badge.variant || "default"}>
              {badge.text}
            </Badge>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {actionButton && (
            <Button 
              variant={actionButton.variant || "ghost"} 
              size="sm" 
              onClick={actionButton.onClick}
            >
              {actionButton.text}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
} 