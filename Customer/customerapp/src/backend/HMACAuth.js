var CryptoJS = require('crypto-js');


// Calculate the access key credentials for a HTTP request
let sharedKey = "c8abc04534714eb4ab2d884bf1b9f388"
let secretKey = "923c9543fb2e47538a0ef6faae7c2e75"
const CalculateAccessKeyCredentials = (requestInfo,preHeaders, date) => {
    console.log(preHeaders)
    // Parse date string from HTTP Date header to a native representation
    let requestDate = date
    console.log(requestDate)
    // Generate one-time key to use for HMAC generation
    let key = uniqueKey(requestDate)

    // Get content to sign in the HMAC
    let contentToSign = signableContent(preHeaders,requestInfo)

    // Calculate the HMAC
    // let hmac = sha512(contentToSign, key);
    let hmac = CryptoJS.SHA512(key,contentToSign)
    // Encode the HMAC in Base64 encoding (RFC 4648)
    // let encodedSignature = Base64.strub(hmac)
    let encodedSignature = CryptoJS.enc.Base64.stringify(hmac)
    // Return the full credentials string for the HTTP Authorization header
    console.log(sharedKey + ":" + encodedSignature)
    return sharedKey + ":" + encodedSignature
}

function uniqueKey(requestDate) {
    // Convert the native date value into a ISO-8601 string.  It should have
    // 3 digits of precision in the sub-seconds field, and those values will
    // be `0`s (for instance, "2018-10-10T00:00:00.000Z")

    let iso8601String = requestDate.toISOString();

    // Concat secret key with date string to generate one-time key for signing
    return secretKey + iso8601String;
}

function signableContent(preheaders,requestInfo) {
    // HTTP method and path/query string are required parameters
    let params = requestInfo

    // All headers used in HMAC calculation
    let signableHeaders = [
        "Content-Type",
        "Content-MD5",
        "nep-application-key",
        "nep-correlation-id",
        "nep-organization",
        "nep-service-version"
    ]

    // Only include header values from the request in the signable content that are
    // sent in the HTTP request.
    for (signableHeader in signableHeaders) {
        if (preHeaders[signableHeader] != undefined) {
            params.push(request.Headers.GetValue(signableHeader))
        }
    }

    return params.join("\n")
}

module.exports.CalculateAccessKeyCredentials = CalculateAccessKeyCredentials