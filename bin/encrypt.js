const crypto = require('crypto');
const fs = require('fs');

module.exports = message => {
  fs.readFile('keys/public.key', function (err, data) {
    if (err) throw err;
    console.log(data);
    let toEncrypt = Buffer.from(message, 'utf8');
    return crypto.publicEncrypt(data, toEncrypt);
  });
};
