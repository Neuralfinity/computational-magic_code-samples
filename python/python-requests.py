import requests
 
url = "https://beta.eu-north.computational-magic.com/api/v1"

headers = {'x-api-key': 'INSERT YOUR API KEY HERE!'}
 
query = """{summary(input: "INSERT YOUR LONG STRING HERE.")}"""

response = requests.post(url, headers=headers, json={'query': query})
print(response.status_code)
print(response.text)