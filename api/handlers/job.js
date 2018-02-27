'use strict';
const jwt = require("jsonwebtoken");
const jwkToPem = require('jwk-to-pem');

module.exports.create = (event, context, callback) => {
  const token = event.headers.Authorization.replace(/Bearer /g, '');
  const decodedJwt = jwt.decode(token, { complete: true });

  // var pem = jwkToPem(jwk);
  // jwt.verify(token, pem, function(err, decoded) {
  //   console.log(decoded)
  // });

  const username = decodedJwt.payload['cognito:username'];

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      jobName: 'Sample job for ' + username
    })
  };

  callback(null, response);
};
