import React from "react";
import Image from "next/image";

export function NaverLoginButton() {
  const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const CALLBACK_URL = process.env.NEXT_PUBLIC_NAVER_CALLBACK_URL;
  const STATE_STRING = process.env.NEXT_PUBLIC_NAVER_STATE_STRING;

  return (
    <div className="mb-4 flex justify-center">
      <a
        href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`}
      >
        <Image 
          src="/images/login/btnG_full.png" 
          alt="Naver Logo" 
          width={300} 
          height={300} 
          className="mx-auto" 
        />
      </a>
    </div>
  );
} 