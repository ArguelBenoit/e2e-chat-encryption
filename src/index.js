const keyGen = require('./bin/keyGen.js');
/* dom element */
const generateButton = document.querySelector('.generate-button');
const regenerateButton = document.querySelector('.regenerate-button');
const noUserKeys = document.querySelector('.no-user-keys');
const hasUserKeys = document.querySelector('.has-user-keys');
const loadingUserKeys = document.querySelector('.loading-user-keys');
const toggleDangerousActions = document.querySelector('.toggle-dangerous-actions');
const deleteUserKeysButton = document.querySelector('.delete-user-keys-button');




/******* show or unshow noUserKeys or userKey at loading ********/
let gettingKeys = browser.storage.local.get(['private', 'public']); /* eslint-disable-line */
gettingKeys.then(
  data => {
    if (data.private) { // if there is key
      noUserKeys.style.display = 'none';
      hasUserKeys.style.display = 'inherit';
      loadingUserKeys.style.display = 'none';

    } else { // if there is no key
      noUserKeys.style.display = 'inherit';
      hasUserKeys.style.display = 'none';
      loadingUserKeys.style.display = 'none';
    }
  },
  err => console.log(err)
);




/******* watch toggle dangerous actions and show or unshow dangerous actions *******/
toggleDangerousActions.onclick = () => {
  const value = toggleDangerousActions.checked;
  // if checked
  if (value) {
    document.querySelector('.dangerous-actions-buttons').style.display = 'inherit';
  // if unchecked
  } else {
    document.querySelector('.dangerous-actions-buttons').style.display = 'none';
  }
};




/******* keys Generation *******/
const generateKeys = () => {

  /* show loading and unshow button */
  noUserKeys.style.display = 'none';
  hasUserKeys.style.display = 'none';
  loadingUserKeys.style.display = 'inherit';

  setTimeout(() => {
    /* generate keys */
    const keys = keyGen();

    /*  set keys in storage */
    browser.storage.local.set({ /* eslint-disable-line */
      'private': keys.private,
      'public': keys.public
    }).then(() => console.log('success'), err => console.log(err));

    /* unshow loading, show keyContent (we have keys now) */
    noUserKeys.style.display = 'none';
    hasUserKeys.style.display = 'inherit';
    loadingUserKeys.style.display = 'none';

  }, 50);
};
generateButton.onclick = () => generateKeys();
regenerateButton.onclick = () => generateKeys();




/******* delete user keys *******/
deleteUserKeysButton.onclick = () => {
  browser.storage.local.remove(['public', 'private']); /* eslint-disable-line */
  noUserKeys.style.display = 'inherit';
  hasUserKeys.style.display = 'none';
  loadingUserKeys.style.display = 'none';
};
