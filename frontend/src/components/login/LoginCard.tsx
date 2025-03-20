"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NaverLoginButton } from "@/components/login/NaverLoginButton";
import { LoginForm } from "@/components/login/LoginForm";

export function LoginCard() {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-green-600">네이버 카페 자동 글 올리기</CardTitle>
        <CardDescription>로그인하여 시작하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <NaverLoginButton />
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">또는</span>
          </div>
        </div>
        <LoginForm />
      </CardContent>
    </Card>
  );
} 