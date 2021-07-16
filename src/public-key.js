
/* dom element */
const showPublicKeySection = document.querySelector('.show-public-key-section');


/******* show key with innerHTML ********/
let gettingKeys = browser.storage.local.get(['public']); /* eslint-disable-line */
gettingKeys.then(
  data => {
    if (data.public) { // if there is key
      showPublicKeySection.innerHTML = data.public;
    } else {
      showPublicKeySection.innerHTML = 'There seems to be a problem with your key, trying to re-import, modify or regenerate your keys.';
    }
  },
  err => console.log(err)
);
