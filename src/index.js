
const keyGen = require('./bin/keyGen.js');
const generateButton = document.querySelector('.generate-button');

const keysContent = document.querySelector('.keys-content');
const loadingKeys = document.querySelector('.loading-content');

// keys Generation
generateButton.onclick = () => {
  keysContent.style.display = 'none';
  loadingKeys.style.display = 'inherit';
  setTimeout(() => {
    const keys = keyGen();
    console.log(keys);
    // todo : save keys into localstorage
    keysContent.style.display = 'inherit';
    loadingKeys.style.display = 'none';
  }, 50);
};
