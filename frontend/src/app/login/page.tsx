"use client";

import React from "react";
import { LoginCard } from "@/components/login";
import { Header } from '@/components/common';

export default function LoginPage() {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col">
			<Header />
			<main className="flex-1 flex items-center justify-center p-4">
				<LoginCard />
			</main>
		</div>
	);
}
