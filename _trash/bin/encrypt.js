const crypto = require('crypto');
const fs = require('fs');

module.exports = message => {
  fs.readFile('keys/public.key', (err, key) => {
    if (err) throw err;
    let buffer = Buffer.from(message, 'utf8');
    let messageEncrypted = crypto.publicEncrypt(key, buffer);
    fs.writeFile(
      'message/encrypted.txt',
      messageEncrypted,
      err => console.log(err ? err : 'message crypté enregistrée')
    );
  });
};
