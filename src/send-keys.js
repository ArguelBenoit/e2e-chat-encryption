const checkPrivateKey = require('./bin/checkPrivateKey.js');
const checkPublicKey = require('./bin/checkPublicKey.js');

/* dom element */
const inputPublicKey = document.querySelector('.input-public-key');
const publicKeyErrorEmpty = document.querySelector('.public-key-error-empty');
const publicKeyErrorKey = document.querySelector('.public-key-error-key');
const privateKeyErrorEmpty = document.querySelector('.private-key-error-empty');
const privateKeyErrorKey = document.querySelector('.private-key-error-key');
const inputPrivateKey = document.querySelector('.input-private-key');
const saveKeys = document.querySelector('.save-keys');


// save action
saveKeys.onclick = () => {

  // check empty fields and rsa 2048 validity
  const publicValue = inputPublicKey.value;
  const privateValue = inputPrivateKey.value;
  const isPrivateKey = checkPrivateKey(privateValue);
  const isPublicKey = checkPublicKey(publicValue);

  if (!publicValue) {
    publicKeyErrorEmpty.style.display = 'inherit';
  }
  if (!privateValue) {
    privateKeyErrorEmpty.style.display = 'inherit';
  }
  if (publicValue && !isPublicKey) {
    publicKeyErrorKey.style.display = 'inherit';
  }
  if (privateValue && !isPrivateKey) {
    privateKeyErrorKey.style.display = 'inherit';
  }

  if ( // if all is valid
    publicValue && privateValue &&
    isPrivateKey && isPublicKey
  ) {

    /*  set keys in storage */
    browser.storage.local.set({ /* eslint-disable-line */
      'private': privateValue,
      'public': publicValue
    }).then(() => {
      /* window.location doesn't work on webExtension ? */
      document.querySelector('.return-link').click();
    }, err => {
      console.log(err);
    });
  }
};

// watch field and remove message error
inputPublicKey.addEventListener('input', () => {
  publicKeyErrorEmpty.style.display = 'none';
  publicKeyErrorKey.style.display = 'none';
});
inputPrivateKey.addEventListener('input', () => {
  privateKeyErrorEmpty.style.display = 'none';
  privateKeyErrorKey.style.display = 'none';
});
