"use client";

import { useState, useEffect, ChangeEvent } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";

interface NaverAccount {
  id: string;
  password: string;
  isLoggedIn: boolean;
}

const NaverLoginManager: React.FC = () => {
  const [accounts, setAccounts] = useState<NaverAccount[]>([]);
  const [newId, setNewId] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [selectedAccount, setSelectedAccount] = useState<number | null>(null);
  const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const CALLBACK_URL = process.env.NEXT_PUBLIC_NAVER_CALLBACK_URL;
  const STATE_STRING = process.env.NEXT_PUBLIC_NAVER_STATE_STRING;

  useEffect(() => {
    // Load saved accounts from localStorage when component mounts
    const savedAccounts = localStorage.getItem('naverAccounts');
    if (savedAccounts) {
      try {
        const parsedAccounts: NaverAccount[] = JSON.parse(savedAccounts);
        setAccounts(parsedAccounts);
      } catch (error) {
        console.error('Failed to parse saved accounts:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Save accounts to localStorage whenever they change
    localStorage.setItem('naverAccounts', JSON.stringify(accounts));
  }, [accounts]);

  const handleAddAccount = (): void => {
    if (!newId || !newPassword) return;
    
    const newAccount: NaverAccount = {
      id: newId,
      password: newPassword,
      isLoggedIn: false
    };
    
    setAccounts(prevAccounts => [...prevAccounts, newAccount]);
    setNewId("");
    setNewPassword("");
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewId(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewPassword(e.target.value);
  };

  const handleSelectAccount = (index: number): void => {
    setSelectedAccount(index === selectedAccount ? null : index);
  };

  const handleLogin = (): void => {
    if (selectedAccount === null) return;
    
    const updatedAccounts = [...accounts];
    // Simulate login
    updatedAccounts[selectedAccount].isLoggedIn = true;
    setAccounts(updatedAccounts);
  };

  const handleRemoveAccount = (): void => {
    if (selectedAccount === null) return;
    
    const updatedAccounts = accounts.filter((_, index) => index !== selectedAccount);
    setAccounts(updatedAccounts);
    setSelectedAccount(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Card className="w-full max-w-md m-auto bg-white border border-gray-200 shadow-md">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-gray-700">아이디 입력</span>
            </div>
            <div>
              <span className="text-gray-500">검증 및 대리인</span>
            </div>
          </div>
          
          {/* Account input form */}
          <div className="p-4 space-y-2 border-b border-gray-200">
            <div className="flex space-x-2">
              <Input
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-400"
                placeholder="아이디"
                value={newId}
                onChange={handleIdChange}
              />
              <Input
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-400"
                placeholder="비밀번호"
                type="password"
                value={newPassword}
                onChange={handlePasswordChange}
              />
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white"
                onClick={handleAddAccount}
              >
              <a href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`}>
                추가
              </a>
              </Button>
            </div>
          </div>
          
          {/* Account list */}
          <div className="max-h-64 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200 bg-gray-50">
                  <TableHead className="w-12 text-gray-600">선택</TableHead>
                  <TableHead className="text-gray-600">아이디</TableHead>
                  <TableHead className="text-gray-600">비밀번호</TableHead>
                  <TableHead className="text-gray-600">접속</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accounts.map((account, index) => (
                  <TableRow 
                    key={index} 
                    className="border-gray-200 hover:bg-gray-50"
                  >
                    <TableCell>
                      <Checkbox
                        checked={selectedAccount === index}
                        onCheckedChange={() => handleSelectAccount(index)}
                        className="border-gray-300 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                      />
                    </TableCell>
                    <TableCell>{account.id}</TableCell>
                    <TableCell>{'•'.repeat(account.password.length)}</TableCell>
                    <TableCell>
                      {account.isLoggedIn && (
                        <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center justify-between p-4 space-x-2 bg-gray-50 border-t border-gray-200">
            <Button 
              className="flex-1 bg-green-500 hover:bg-green-600 text-white"
              onClick={handleLogin}
              disabled={selectedAccount === null}
            >
              <Check className="w-4 h-4 mr-2" />
              아이디접속
            </Button>
            <Button 
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800"
              onClick={handleRemoveAccount}
              disabled={selectedAccount === null}
            >
              선택삭제
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NaverLoginManager;