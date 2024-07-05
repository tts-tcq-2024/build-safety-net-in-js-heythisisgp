function generateSoundex(name) {
  function getSoundexCode(char) {
    const soundexDict = {
      'BFPV': '1',
      'CGJKQSXZ': '2',
      'DT': '3',
      'L': '4',
      'MN': '5',
      'R': '6',
    };

    for (const key in soundexDict) {
      if (key.includes(char.toUpperCase())) {
        return soundexDict[key];
      }
    }

    return '0';
  }

  if (!name) return '';

  const soundex = [name[0].toUpperCase()];
  let prevCode = getSoundexCode(name[0]);

  for (let i = 1; i < name.length && soundex.length < 4; i++) {
    const code = getSoundexCode(name[i]);
    if (code!== '0' && code!== prevCode) {
      soundex.push(code);
    }
    prevCode = code;
  }

  while (soundex.length < 4) {
    soundex.push('0');
  }

  return soundex.join('');
}

module.exports = {
  generateSoundex,
};
