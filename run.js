
// var prompt = require('prompt');
var fs = require('fs');
var keyGen = require('./bin/keyGen.js');
var encrypt = require('./bin/encrypt.js');
var decrypt = require('./bin/decrypt.js');

keyGen();
//
// encrypt('Je met toujours un peu de rhum dans ma bière');
// //
// fs.readFile('message/encrypted.txt', (err, messageEncrypted) => {
//   if(err) {
//     throw err;
//   }
//   decrypt(messageEncrypted);
// });
