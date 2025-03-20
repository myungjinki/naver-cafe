import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NaverLoginButton } from "./NaverLoginButton";
import { LoginForm } from "./LoginForm";

export function LoginCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-green-600">네이버 카페 자동 글 올리기</CardTitle>
        <CardDescription>로그인하여 시작하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <NaverLoginButton />
        <LoginForm />
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
} 