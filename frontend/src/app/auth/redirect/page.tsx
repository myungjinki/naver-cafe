"use client";

import React, { useEffect } from "react";

import { useSearchParams } from "next/navigation";
import getAccessToken from "./actions";
export default function Home() {
	const searchParams = useSearchParams();
	const code = searchParams.get("code");

	useEffect(() => {
		if (code) {
			(async () => {
				await getAccessToken({ code });
			})();
		}
	}, [code]);

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<div>
				<p>Code: {code}</p>
			</div>
		</div>
	);
}
