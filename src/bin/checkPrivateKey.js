/* simple private key test */
module.exports = key => {
  const deb = key.indexOf('-----BEGIN RSA PRIVATE KEY-----');
  const deb2 = key.indexOf('-----BEGIN PRIVATE KEY-----');
  const end = key.indexOf('-----END RSA PRIVATE KEY-----');
  const end2 = key.indexOf('-----END PRIVATE KEY-----');

  /* if end and deb exist */
  if ((deb >= 0 || deb2 >=1) && (end >= 0 || end2 >=1)) {
    return true;
  } else {
    return false;
  }

};
