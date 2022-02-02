import requests
 
url = "https://magicsummary.p.rapidapi.com/api/v1"

headers = {'x-rapidapi-host': 'magicsummary.p.rapidapi.com', 'x-rapidapi-key': 'YOUR-RAPID-API-KEY-HERE', 'Content-Type': 'application/json' } # replace key with your own
 
query = """{summary(input: "INSERT YOUR LONG STRING HERE.")}""" # eplace string with the long string you want to summarise

response = requests.post(url, headers=headers, json={'query': query})
print(response.status_code)
print(response.text)