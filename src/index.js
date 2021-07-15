
const keyGen = require('./bin/keyGen.js');
// const encrypt = require('./bin/encrypt.js');
// const decrypt = require('./bin/decrypt.js');
// const fs = require('fs');


function GenerateNewKeys() { /* eslint-disable-line */
  keyGen();
}

// Crypter un message
// encrypt('Je met toujours un peu de rhum dans ma bière');

// Décrypter un message
// fs.readFile('message/encrypted.txt', (err, messageEncrypted) => {
//   if(err) {
//     throw err;
//   }
//   decrypt(messageEncrypted);
// });
