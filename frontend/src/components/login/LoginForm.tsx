import React from "react";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <label 
          htmlFor="username" 
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Username:
        </label>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="사용자 이름을 입력하세요"
        />
      </div>
      <div className="space-y-2">
        <label 
          htmlFor="password" 
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Password:
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
    </form>
  );
} 