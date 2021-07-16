
const keyGen = require('./bin/keyGen.js');

/* dom element */
const generateButton = document.querySelector('.generate-button');
const userKeysSection = document.querySelector('.user-keys-section');
const noUserKeys = document.querySelector('.no-user-keys');
const hasUserKeys = document.querySelector('.has-user-keys');
const loading = document.querySelector('.loading');



/******* show or unshow noUserKeys or userKey ********/
let gettingKeys = browser.storage.local.get(['private', 'public']); /* eslint-disable-line */
gettingKeys.then(
  data => {
    if (data.private) { // if there is key
      noUserKeys.style.display = 'none';
      hasUserKeys.style.display = 'inherit';

    } else { // if there is no key
      noUserKeys.style.display = 'inherit';
      hasUserKeys.style.display = 'none';
    }
  },
  err => console.log(err)
);



/******* keys Generation *******/
generateButton.onclick = () => {

  /* show loading and unshow button */
  userKeysSection.style.display = 'none';
  loading.style.display = 'inherit';

  setTimeout(() => {
    /* generate keys */
    const keys = keyGen();

    /*  set keys in storage */
    browser.storage.local.set({ /* eslint-disable-line */
      'private': keys.private,
      'public': keys.public
    }).then(() => console.log('success'), err => console.log(err));

    /* unshow loadin, show keyContent, unShow noUserKeys (we have keys now), show userKeysContent */
    loading.style.display = 'none';
    userKeysSection.style.display = 'inherit';
    noUserKeys.style.display = 'none';
    hasUserKeys.style.display = 'inherit';

  }, 50);
};
