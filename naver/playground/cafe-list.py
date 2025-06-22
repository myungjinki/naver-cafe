import requests
import json


def get_naver_cafe_list():
    url = "https://www.naver.com/nvhaproxy/my/cafe/page"
    cookie = {
        "NAC": "EcBOBcQaMlpfB",
        "ba.uuid": "5b9a2d67-b4e1-4743-9d6f-29dc3b632dbc",
        "NNB": "UGPK27WA6R4WO",
        "_ga": "GA1.2.2079341355.1736832244",
        "nstore_session": "CIE9U66rn/ZUZSltQwtPFVg6",
        "ASID": "daeff6100000019694440f3500000023",
        "nstore_pagesession": "jtTY+dqQibY0BdsK0yo-096123",
        "PM_CK_loc": "405b6997c186cf20b7a335fa25936dd1ab4d3ac2840ff674d584a0ced57b4ee2",
        "NACT": "1",
        "NM_srt_chzzk": "1",
        "SRT30": "1748740335",
        "SRT5": "1748740335",
        "nid_inf": "380485526",
        "NID_AUT": "iX//HaQhNupsTiKq1bmj5ub+GKErz6mhZ7tnjqw2Q26NcfAweJElRWA9x/aC2cy5",
        "NID_SES": "AAABsgU8YdoPlm9hTHlxOyiWh+MNW4SyI9//7JlihAQ0SZrFYbrPZJRtoJ6FBRLlE/heb4U5tGXqlNjiThByIORlHVGvIa9taObDmsJCrs9QMeQsy2BmM9F5lMCfzql5+uLpy4yAx73rSMBU2GZr3rJyZSsWGjAj7aTTEWKw5urfKkExzFQtU++Z0/dwqcX4A0yj6k3rY1g5ns85SpXdoc64MLGG6sHzuW07lEUFYSqhHZgGSWWPZcJFcqfb0BuHqDkjyyKHEZ3DBSXXeaIuWLAXDTMb50dCz9lxh2Ez4l+8ZQWUunWK0vxEzOeJNUN+CeXHt9lI5hiJmtTSh210vpFdhfplWILvvgOs7Y98o3y1fYPHwg9KWy2lkEHjIFnKuYDGBHBjcKoxbbb/+LRnU0klxBW0KMncndbOiT7ahAHQm/oB7cKRpHxpXjjrp0VWL9ZJYRprHQIolDy7L+Cer0L+Vye0FAyim8o10vWEBLDPRUyjCZ+Q3FMe1mKSTkAORlLWNc2vEUUbB8E19VQmO8fI/xfSa227aRlBXQ5xXl3TNP3cHueMii8aABr7t14bka6vajQ8gLcvsXzCDYDZ3bzRQbw=",
        "BUC": "IMnPmjxJJct84HKjDQyNKgKT0ODb4d_hwq6fr9bMYTY=",
        "JSESSIONID": "4FA66A65126A3D8FBD6420C010251BCF",
    }
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Connection": "keep-alive",
        "Cookie": "; ".join([f"{key}={value}" for key, value in cookie.items()]),
        "Referer": "https://www.naver.com/",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "TE": "Trailers",
    }
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # HTTP 오류 발생 시 예외 발생

        # JSON 데이터 파싱
        cafe_data = response.json()
        return cafe_data
    except requests.RequestException as e:
        print(f"요청 중 오류 발생: {e}")
        return None


if __name__ == "__main__":
    cafe_data = get_naver_cafe_list()
    if cafe_data:
        print(cafe_data)
        print("\n--- 추가 정보 ---")
        print("위 데이터는 현재 사용자의 로그인 세션(쿠키)에 의존합니다.")
        print(
            "쿠키가 만료되면 이 코드는 더 이상 유효하지 않은 데이터를 반환하거나 오류를 발생시킬 수 있습니다."
        )
        print(
            "새로운 유효한 쿠키를 얻기 위해서는 네이버에 로그인한 후 개발자 도구(F12)에서 네트워크 탭을 확인하여 'my/cafe/page' 요청의 헤더에서 'cookie' 값을 복사하여 업데이트해야 합니다."
        )
