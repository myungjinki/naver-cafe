import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LogIn, Trash2 } from "lucide-react";

interface Account {
  id: string;
  password: string;
  status: boolean;
}

interface AccountSectionProps {
  accounts: Account[];
}

export function AccountSection({ accounts }: AccountSectionProps) {
  return (
    <Card className="col-span-3 bg-white border-gray-200">
      <CardContent className="p-4">
        <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4 text-gray-800">아이디 입력</h3>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <Input placeholder="아이디" className="bg-white border-gray-200" />
          <Input placeholder="비밀번호" type="password" className="bg-white border-gray-200" />
          <Button className="bg-green-600 hover:bg-green-700">추가</Button>
        </div>
        
        <div className="overflow-hidden rounded-md border border-gray-200 mb-4">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow className="hover:bg-gray-100">
                <TableHead className="w-12 text-center">선택</TableHead>
                <TableHead>아이디</TableHead>
                <TableHead>비밀번호</TableHead>
                <TableHead className="w-16 text-center">상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id} className="hover:bg-gray-100 border-t border-gray-200">
                  <TableCell className="text-center">
                    <Checkbox checked={account.status} className="border-gray-300" />
                  </TableCell>
                  <TableCell>{account.id}</TableCell>
                  <TableCell>{account.password}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="border-gray-200 hover:bg-gray-100 text-gray-700">
            <LogIn className="w-4 h-4 mr-2" />
            전체 로그인
          </Button>
          <Button variant="outline" className="border-gray-200 hover:bg-gray-100 text-gray-700">
            <Trash2 className="w-4 h-4 mr-2" />
            삭제
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 