
/* dom element */
const publicKeyInjected = document.querySelector('.public-key-injected');
const publicKeyInjectedContainer = document.querySelector('.show-public-key-section');


/******* show key with innerHTML ********/
let gettingKeys = browser.storage.local.get(['public']); /* eslint-disable-line */
gettingKeys.then(
  data => {
    if (data.public) { // if there is key
      publicKeyInjected.innerHTML = data.public;
    } else { // else, error message inside container (no copy button)
      publicKeyInjectedContainer.innerHTML = 'There seems to be a problem with your key, trying to re-import, modify or regenerate your keys.';
    }
  },
  err => console.log(err)
);
