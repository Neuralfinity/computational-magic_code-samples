fetch('https://beta.eu-north.computational-magic.com/api/v1', {
  method: 'POST',
  headers: { 'x-api-key': 'YOUR API KEY HERE', 'Content-Type': 'application/json' }, // replace API key with your API key
  // replace string with the long string you want to summarise
  body: JSON.stringify({ query: `
    query {
      summary(input: "YOUR LONG STRING HERE" ) 
        
      }
    }` 
  }), 
}) 
.then(res => res.json())
.then(res => console.log(res.data));