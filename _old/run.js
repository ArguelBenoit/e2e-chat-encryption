

// Créer une paire de clefs
const keyGen = require('./bin/keyGen.js');
keyGen();


// // Crypter un message
// const encrypt = require('./bin/encrypt.js');
// encrypt('Je met toujours un peu de rhum dans ma bière');


// // Décrypter un message
// const decrypt = require('./bin/decrypt.js');
// const fs = require('fs');
// fs.readFile('message/encrypted.txt', (err, messageEncrypted) => {
//   if(err) {
//     throw err;
//   }
//   decrypt(messageEncrypted);
// });
