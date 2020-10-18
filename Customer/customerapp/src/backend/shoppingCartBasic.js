var request = require('request');
var CryptoJS = require('crypto-js');

 var username ='dea06c54-d713-404a-988b-54c204407219';
 var password = 'Password123!'
 let phrase = new Buffer(username + ':' + password);
 headers = {
     'content-type': 'application/json',  
     'Authorization': 'Basic ZGVhMDZjNTQtZDcxMy00MDRhLTk4OGItNTRjMjA0NDA3MjE5OlBhc3N3b3JkMTIzIQ==',
     'nep-organization': '29e07b5b28fa40b089c7d574329f0534',   
     'nep-enterprise-unit': '9bbd9ddb3f3f4ee1bac3f1c257e02af1' 
 }
 id = '66979a6495414081ae5930389b1c60ff'
 // urlWanted = 'https://gateway-staging.ncrcloud.com/site/sites/'+id;
 urlWanted = 'https://gateway-staging.ncrcloud.com/order/3/orders/1/find'
 const options = {
     url : urlWanted,
     headers: headers,
     body: ''
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