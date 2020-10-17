var request = require('request');
var username ='dea06c54-d713-404a-988b-54c204407219';
var password = 'V39v39123!'
var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
headers = {
    'Accept':'application/json',
    'content-type': 'application/json',  
    'Authorization': auth,  
    'nep-organization': 'ur-hack',   
    'nep-service-version': '2:1' 
}
id = '66979a6495414081ae5930389b1c60ff'
// urlWanted = 'https://gateway-staging.ncrcloud.com/site/sites/'+id;
urlWanted = 'https://gateway-staging.ncrcloud.com/order/3/orders/1'
const options = {
    url : urlWanted,
    headers: headers,

}
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      const info = JSON.parse(body);
      console.log(info.stargazers_count + " Stars");
      console.log(info.forks_count + " Forks");
    }
    console.log(response.body)
  }

  let response = request.post(options, callback)
