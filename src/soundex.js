function getSoundexCode(char) {
  const soundexDict = {
    'B': '1', 'F': '1', 'P': '1', 'V': '1',
    'C': '2', 'G': '2', 'J': '2', 'K': '2', 'Q': '2', 'S': '2', 'X': '2', 'Z': '2',
    'D': '3', 'T': '3',
    'L': '4',
    'M': '5', 'N': '5',
    'R': '6'
  };
  return soundexDict[char.toUpperCase()] || '0';
}

function padWithZeros(soundex) {
  while (soundex.length < 4) {
    soundex.push('0');
  }
  return soundex;
}

function generateSoundex(name) {
  if (!name) return '';

  const firstChar = name[0].toUpperCase();
  let soundex = [firstChar];
  let prevCode = getSoundexCode(firstChar);

  for (let i = 1; i < name.length && soundex.length < 4; i++) {
    const char = name[i];
    const code = getSoundexCode(char);

    if (code !== '0' && code !== prevCode) {
      soundex.push(code);
    }

    prevCode = code;
  }

  return padWithZeros(soundex).join('');
}

module.exports = {
  getSoundexCode,
  generateSoundex
};
