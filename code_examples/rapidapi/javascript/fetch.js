fetch('https://magicsummary.p.rapidapi.com/api/v1', {
  method: 'POST',
  headers: { 'x-rapidapi-host': 'magicsummary.p.rapidapi.com', 'x-rapidapi-key': 'YOUR-RAPID-API-KEY-HERE', 'Content-Type': 'application/json' }, // replace key with your own
  // replace string below with the long string you want to summarise
  body: JSON.stringify({ query: `
    query {
      summary(input: "YOUR LONG STRING HERE" ) 
        
      }
    }` 
  }),
})
.then(res => res.json())
.then(res => console.log(res.data));