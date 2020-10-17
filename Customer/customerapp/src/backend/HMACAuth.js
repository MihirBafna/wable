const convertVariables = function(templateContent) {
    const regexPattern = /({{(.*?)}})/g;
    let convertedContent = templateContent;
    let matchedVar = new RegExp(regexPattern).exec(convertedContent);
    while (matchedVar !== null) {
        const variableReplacement = matchedVar[1];
        const variableName = matchedVar[2];
        const variableValue = postman.getEnvironmentVariable(variableName) || postman.getGlobalVariable(variableName);
        convertedContent = convertedContent.replace(variableReplacement, variableValue);
        matchedVar = new RegExp(regexPattern).exec(convertedContent);
    }
    return convertedContent;
}
// Extracts the signable content from the request
const signableContent = function() {
    const requestPath = convertVariables(request.url.trim()).replace(/^https?:\/\/[^\/]+\//, '/');
    const params = [
        request.method,
        requestPath,
        request.headers['content-type'],
        request.headers['content-md5'],
        convertVariables(request.headers['nep-organization'])
    ];
    return params.filter(p => p && p.length > 0).join('\n');
}
// Generates a unique date-based signing key
const uniqueKey = function(date) {
    const nonce = date.toISOString().slice(0, 19) + '.000Z';
    return postman.getEnvironmentVariable('bsp-secret-key') + nonce;
}
// Calculates the HMAC signature
const calculateSignature = function() {
    const date = new Date();
    date = date.toGMTString();
    const key = uniqueKey(date);
    const sc = signableContent();
    const hmac = CryptoJS.HmacSHA512(sc, key);
    return CryptoJS.enc.Base64.stringify(hmac);
}
// Stores the generated HMAC signature under the access key
const signature = calculateSignature();
const sharedKey = postman.getEnvironmentVariable('bsp-shared-key');
postman.setEnvironmentVariable('bsp-access-key', `AccessKey ${sharedKey}:${signature}`);