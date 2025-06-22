import requests


def main():
    response = requests.get("https://www.naver.com/nvhaproxy/my/cafe/page")
    if response.status_code == 200:
        print("Successfully retrieved the page.")
    else:
        print("Failed to retrieve the page.")


if __name__ == "__main__":
    main()
