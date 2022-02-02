var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://beta.eu-north.computational-magic.com/api/v1',
  headers: {
    'content-type': 'application/json',
    'x-api-key': 'YOUR API KEY HERE', // add your API key here
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