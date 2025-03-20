import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
	const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
	const CALLBACK_URL = process.env.NEXT_PUBLIC_NAVER_CALLBACK_URL;
	const STATE_STRING = process.env.NEXT_PUBLIC_NAVER_STATE_STRING;

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="text-center">
					<CardTitle className="text-3xl font-bold text-green-600">네이버 카페 자동 글 올리기</CardTitle>
					<CardDescription>로그인하여 시작하세요</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="mb-4 flex justify-center">
						<a
							href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`}
						>
							<Image src="/images/login/btnG_full.png" alt="Naver Logo" width={300} height={300} className="mx-auto" />
						</a>
					</div>
					<form className="space-y-4">
						<div className="space-y-2">
							<label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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
							<label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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
				</CardContent>
				<CardFooter>
					<Button className="w-full" type="submit">
						Login
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
