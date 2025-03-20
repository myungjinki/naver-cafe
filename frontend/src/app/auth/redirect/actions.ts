"use server";

// This function is called when the user is redirected from the Naver login page to the redirect page.
async function getAccessToken({ code }: { code: string }) {
	try {
		const CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET || "";
		const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || "";
		const request = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`;

		const response = await fetch(request);
		const data = await response.json();
		console.log(data);
		
		// 네이버 API로부터 받은 토큰 데이터 반환
		return data;
	} catch (error) {
		console.error("Error getting access token:", error);
		return null;
	}
}

export default getAccessToken;
