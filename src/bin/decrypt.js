const crypto = require('crypto');
const fs = require('fs');

module.exports = message => {
  fs.readFile('keys/private.key', (err, key) => {
    if (err) {
      throw err;
    }
    let buffer = Buffer.from(message, 'utf8');
    console.log(buffer);
    let decryptedMessage = crypto.privateDecrypt(key, buffer);
    fs.writeFile(
      'message/decrypted.txt',
      decryptedMessage,
      err => console.log(err ? err : 'message décrypté enregistrée')
    );
  });
};
