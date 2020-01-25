
const prompt = require('prompt');
const fs = require('fs');
const keypair = require('keypair');
const keysExisting = fs.existsSync('./keys/public.key') || fs.existsSync('./keys/private.key');

module.exports = () => {
  let gen = () => {
    console.log('Generation des clefs...');
    let pair = keypair(3072);
    fs.writeFileSync('./keys/public.key', pair['public']);
    fs.writeFileSync('./keys/private.key', pair['private']);
  };
  if (keysExisting) {
    const answere = 'Vous possédez déjà des clefs, souhaitez vous les recréer ? (y/n)';
    prompt.start();
    prompt.get(answere, (err, res) => {
      if (res[answere] === 'y') {
        gen();
      }
    });
  } else {
    gen();
  }
};
