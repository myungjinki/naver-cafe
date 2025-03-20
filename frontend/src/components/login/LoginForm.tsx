"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface LoginFormValues {
  username: string;
  password: string;
}

export function LoginForm() {
  const router = useRouter();
  
  const form = useForm<LoginFormValues>({
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
    // 일반 로그인 처리 로직 (현재는 OAuth만 사용하므로 구현하지 않음)
    // 성공 시 input 페이지로 리다이렉트
    router.push('/input');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>아이디</FormLabel>
              <FormControl>
                <Input 
                  placeholder="사용자 이름을 입력하세요" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input 
                  type="password" 
                  placeholder="비밀번호를 입력하세요" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-4" type="submit">
          로그인
        </Button>
      </form>
    </Form>
  );
} 