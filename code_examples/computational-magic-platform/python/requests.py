import requests
 
url = "https://beta.eu-north.computational-magic.com/api/v1"

#replace key below with your own
headers = {'x-api-key': 'INSERT YOUR API KEY HERE!', 'Content-Type': 'application/json'}
 
# replace string with the long string you want to summarise
query = """{summary(input: "INSERT YOUR LONG STRING HERE.")}"""

response = requests.post(url, headers=headers, json={'query': query})
print(response.status_code)
print(response.text)