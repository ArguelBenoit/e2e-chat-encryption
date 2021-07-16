// const prompt = require('prompt');
// const fs = require('fs');
const keypair = require('keypair');
// const keysExisting = fs.existsSync('./keys/public.key') && fs.existsSync('./keys/private.key');

module.exports = () => {
  let pair = keypair(2048);
  return pair;
  // alert(pair['public']);
  // alert(pair['private']);
};
