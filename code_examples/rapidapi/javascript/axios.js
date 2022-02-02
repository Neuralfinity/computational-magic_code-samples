var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://magicsummary.p.rapidapi.com/api/v1',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'magicsummary.p.rapidapi.com',
    'x-rapidapi-key': 'YOUR-RAPID-API-KEY-HERE' // replace key with your own
  },
  data: {
    query: '{summary(input: "YOUR LONG STRING TO SUMMARISE HERE" )}' // replace string with the long string you want to summarise
  }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});