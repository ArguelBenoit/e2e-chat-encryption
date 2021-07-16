const keypair = require('keypair');

module.exports = () => {
  let pair = keypair(2048);
  return pair;
};
