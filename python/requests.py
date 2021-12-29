import requests
 
url = "https://beta.eu-north.neuralfinity.com"

Header = {"X-API-KEY": "YOUR_SECRET_API-KEY"}
 
query = {summary: (input: "your long string here")}

 
response = requests.post(url, Headers=Headers json=data)
 
print("Status Code", response.status_code)
print("JSON Response ", response.json())