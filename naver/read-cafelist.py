# https://www.naver.com/nvhaproxy/my/cafe/page
import requests
from pprint import pprint

"""
Cookie list for Naver Cafe page
NAC=EcBOBcQaMlpfB;
ba.uuid=5b9a2d67-b4e1-4743-9d6f-29dc3b632dbc;
NNB=UGPK27WA6R4WO;
_ga=GA1.2.2079341355.1736832244;
nstore_session=CIE9U66rn/ZUZSltQwtPFVg6;
ASID=daeff6100000019694440f3500000023;
nstore_pagesession=jtTY+dqQibY0BdsK0yo-096123;
PM_CK_loc=405b6997c186cf20b7a335fa25936dd1ab4d3ac2840ff674d584a0ced57b4ee2;
NACT=1;
NM_srt_chzzk=1;
SRT30=1748658106;
nid_inf=381435644;
NID_AUT=yH3e1GDbv80YsGjC9wVRE8+uoBxIwpqqjSfyCldmwwd5kgksWqVm3MdPmepycewy;
NID_SES=AAABtv2XDYitoJh7mebtmDFlHh+Oxu8IwKICZwnQK1FnkemxpTKslK+n/spUI4+LH47Xi2ZHiz1Hv/lhQIJwcbhlakSM266Io3NPeDmNXJ52WF/EOn2AayyWHrtp7v3JfPclG0sWi8JOcV2IBbH92REFz8jNjCIUjExsaKENsyUtJSYZzNtazWppvmCE47j3pU0Lmj90msmBaJiKPcjjAL4J56KDZy+qjBXZ6rBcZfHqDHLZ70WTF9yjcrMPV31ILnrIfQQy0TkK6cWq+GKXOIiODWq5W7lDCSfeCLloGWF1VGzfXRqfhJHnG1sIcYFo1SutoTIPq/NzvABeafuYUpql8kpd7mYEwSeqzyeRLzlsL7suGq/wyJUpBZmrvo11s/xNre510XEByPXkWQPft0QV3WtOxIrqD/djLlhTczHmBrKrBQTMYUWCeJQHmQ0Ydhl8a5b4nuNTYhAEymY1uBDpxcXOjqpxJdIXPLr6/bthf67Jvw5x7kydezBfaW7Xy2z9XZeoZ7N0InosKcS4C9T+X0aRFztCDkcwrW4IH9RQzEPKzyLAEOasMT3fb2eBfwniJmxL/W4iLvEiSoA+jJg2jjE=;
SRT5=1748659377;
BUC=i6FrODfKvboZQLq5bhpr3UIo7LxlImBF4djsgkgitRI=
"""


def get_cafe_page():
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
        "NID_AUT": "OWRgJ19RH/FBBt/c000veqOeKHVc+U9lSOHAgyhXZ0bqClIOJf0f/DPOREhuM3M4",
        "NID_SES": "AAABsv7J/5chaU9ibVHuZIidgvbokNFiMd6C4aIAGlnVDtMXpUZxSScdWiFpiOV+IoFsyiiJ7/V2+hIwlI+9i/206Y/DggLLGEwQhwVUQ/Ny4EdSBomAVOL22GQ6Z/E8bj2Huh6tfELzOSc9FMOyFriNgcy3Y00Z2+Optx8H4KGxv0LrcIFdT7wuL7eaet5aShw18rCtynnUv/9CZsubw8OvsMpUffqaMbc7jlxROgY1cXtyweiCOKNm2ba6kaAmC6zrvv6vza/gPlKrDrYcaI75ZbM6YgYst2Iwv08caup8W6U/65K7xP+5A46Uva7nqkuTsENZEf+dPk2C72CwSn8dyAgmLphL8hEXevIYr66p+0wIvnvmkKRb7dJqrPZKqIuvK/7ytYpKMbUigkByiQncrWrRQJbrvZ6cLgGo2h6mQ85H+vsOHeN9qu8VfNV/ok5xakXcKShOSN25Fyh57ZN8tonhF6OrW8KrWmJZE/FthPg1brknKif+PIGJrSbGkW+bd3tuhzJWwc6t7FvlQA0IIJbes7yLO6MJ+cCAU0/G7dRWmRxe51NUBUtMIPD0Er4xW+yI1eEzWp+pQd65xoUxOek=",
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
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        return response.text
    else:
        return None


if __name__ == "__main__":
    page_content = get_cafe_page()
    if page_content:
        pprint(page_content)
        pprint("Successfully retrieved the cafe page content.")
    else:
        pprint("Failed to retrieve the cafe page content.")
