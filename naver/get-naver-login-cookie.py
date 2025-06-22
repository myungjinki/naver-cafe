from playwright.sync_api import sync_playwright
import time
import json


def get_naver_login_cookies_with_playwright(naver_id, naver_pw):
    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=False
        )  # headless=True로 하면 브라우저 창이 보이지 않음
        context = browser.new_context()
        page = context.new_page()

        try:
            page.goto("https://nid.naver.com/nidlogin.login")
            time.sleep(2)  # 페이지 로딩 대기

            # 아이디 입력 (선택자는 실제 네이버 페이지에 맞게 조정해야 함)
            page.fill("#id", naver_id)  # 보통 id 속성이 'id'임
            page.fill("#pw", naver_pw)  # 보통 id 속성이 'pw'임

            time.sleep(5)  # 입력 후 잠시 대기

            # 로그인 버튼 클릭 (선택자는 실제 네이버 페이지에 맞게 조정해야 함)
            # 예시: page.click(".btn_login") 또는 page.click("text=로그인")
            page.click(".btn_login")

            page.wait_for_load_state(
                "networkidle"
            )  # 네트워크 활동이 잠잠해질 때까지 대기
            time.sleep(3)  # 로그인 후 페이지 전환 및 쿠키 설정 대기

            # 쿠키 가져오기
            cookies = context.cookies()

            nid_aut_cookie = None
            nid_ses_cookie = None

            for cookie in cookies:
                if cookie["name"] == "NID_AUT":
                    nid_aut_cookie = cookie["value"]
                elif cookie["name"] == "NID_SES":
                    nid_ses_cookie = cookie["value"]

            if nid_aut_cookie and nid_ses_cookie:
                print(f"NID_AUT: {nid_aut_cookie}")
                print(f"NID_SES: {nid_ses_cookie}")
                return {"NID_AUT": nid_aut_cookie, "NID_SES": nid_ses_cookie}
            else:
                print("NID_AUT 또는 NID_SES 쿠키를 찾을 수 없습니다.")
                return None

        except Exception as e:
            print(f"오류 발생: {e}")
            return None
        finally:
            browser.close()


if __name__ == "__main__":
    your_naver_id = "myungjinki91"  # 여기에 실제 네이버 ID 입력
    your_naver_pw = "3j5_XU@Hv'16q)MO"  # 여기에 실제 네이버 비밀번호 입력

    naver_cookies = get_naver_login_cookies_with_playwright(
        your_naver_id, your_naver_pw
    )
    if naver_cookies:
        print("네이버 로그인 쿠키를 성공적으로 가져왔습니다.")
        # 가져온 쿠키를 파일로 저장하여 requests와 함께 사용할 수 있습니다.
        # with open("naver_cookies_playwright.json", "w") as f:
        #     json.dump(naver_cookies, f)
    else:
        print("네이버 로그인 쿠키를 가져오는 데 실패했습니다.")
