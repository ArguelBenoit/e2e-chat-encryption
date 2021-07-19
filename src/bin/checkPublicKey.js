
/* simple public key test */
module.exports = key => {
  const deb = key.indexOf('-----BEGIN PUBLIC KEY-----');
  const deb2 = key.indexOf('-----BEGIN RSA PUBLIC KEY-----');
  const end = key.indexOf('-----END PUBLIC KEY-----');
  const end2 = key.indexOf('-----END RSA PUBLIC KEY-----');

  /* if end and deb exist */
  if ((deb >= 0 || deb2 >=1) && (end >= 0 || end2 >=1)) {
    return true;
  } else {
    return false;
  }
};
