"use client";

import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import getAccessToken from "./actions";
import { setCookie } from 'cookies-next';

export default function Home() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const code = searchParams.get("code");

	useEffect(() => {
		if (code) {
			(async () => {
				try {
					const tokenData = await getAccessToken({ code });
					if (tokenData && tokenData.access_token) {
						// 클라이언트 측에서 쿠키 설정
						setCookie('access_token', tokenData.access_token, {
							maxAge: 60 * 60 * 24 * 7, // 7 days
							path: '/',
							secure: process.env.NODE_ENV === 'production',
							sameSite: 'lax'
						});
						
						// input 페이지로 리다이렉트
						router.push('/input');
					}
				} catch (error) {
					console.error('OAuth 인증 에러:', error);
				}
			})();
		}
	}, [code]);

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<div className="p-8 bg-white rounded-lg shadow-md">
				<h2 className="text-2xl font-bold text-green-600 mb-4">인증 처리 중</h2>
				<p className="text-gray-600">네이버 로그인 인증을 처리하고 있습니다. 잠시만 기다려주세요...</p>
			</div>
		</div>
	);
}
