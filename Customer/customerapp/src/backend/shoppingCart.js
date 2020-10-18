var request = require('request');
var username ='dea06c54-d713-404a-988b-54c204407219';
var HMACAuth = require('./HMACAuth')
var fetch = require("node-fetch");


id = '66979a6495414081ae5930389b1c60ff'
// urlWanted = 'https://gateway-staging.ncrcloud.com/site/sites/'+id;
let urlWanted = 'https://gateway-staging.ncrcloud.com/order/3/orders/1'
let currDate = new Date
let year = currDate.getUTCFullYear();
let month = currDate.getUTCMonth();
let day = currDate.getUTCDay();
let hour = currDate.getUTCHours();
let minute = currDate.getMinutes();
let second = currDate.getSeconds();
let milli = currDate.getMilliseconds();
let Z = "Z";
if (hour<10) {
    hour = "0"+hour.toString();
}
if (minute < 10) {
    minute = "0" + minute.toString();
}
if (minute < 10) {
    minute = "0" + minute.toString();
}
var strftime = require('strftime') // not required in browsers
str = strftime('%a, %d %b %Y %H:%M:%S %Z', currDate) // => 2011-06-07 18:51:45
console.log(str);

async function postData(url = '', data = {}){
    presetHeaders = {'Access-Control-Allow-Origin': '*',
    'content-type':'application/json',
    'nep-organization': 'ur-hack',
    'nep-service-version': '2:1'}
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type':'application/json',
            'nep-organization': 'ur-hack',
            'nep-service-version': '2:1',
            'Authorization':'AccessKey ' + HMACAuth.CalculateAccessKeyCredentials(presetHeaders,currDate),
            'Date': str
        }})
        console.log(currDate.toISOString());
        return response.json();
    }

postData(urlWanted,{statusCode: 200})
    .then(data => {
        console.log(data);
    })
  


// xhr.open('POST', urlWanted, true);
// xhr.setRequestHeader()
// xhr.setRequestHeader('Access-Control-Expose-Headers', 'Date')
// xhr.setRequestHeader('Accept','application/json')
// xhr.setRequestHeader('content-type','application/json',)
// xhr.setRequestHeader('nep-organization', 'ur-hack')
// xhr.setRequestHeader('nep-service-version', '2:1')
// xhr.setRequestHeader('Authorization','AccessKey ' + HMACAuth.CalculateAccessKeyCredentials(xhr))

//   xhr.onload = function () {
//     console.log('DONE: ', xhr.responseText);
//   };
// console.log(xhr.status)

// xhr.onreadystatechange = function () {
//     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//         console.log("Success")
//     }
// }


