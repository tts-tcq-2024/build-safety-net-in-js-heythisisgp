const soundexDict = {
  B: '1', F: '1', P: '1', V: '1',
  C: '2', G: '2', J: '2', K: '2', Q: '2', S: '2', X: '2', Z: '2',
  D: '3', T: '3',
  L: '4',
  M: '5', N: '5',
  R: '6'
};

function getSoundexCode(char) {
  return soundexDict[char.toUpperCase()] || '0';
}

function generateSoundex(name) {
  if (!name) return '';

  const soundex = [name[0].toUpperCase()];
  let prevCode = getSoundexCode(name[0]);

  for (let i = 1; i < name.length && soundex.length < 4; i++) {
    const code = getSoundexCode(name[i]);
    if (code !== '0' && code !== prevCode) {
      soundex.push(code);
      prevCode = code;
    }
  }

  return soundex.join('').padEnd(4, '0');
}

module.exports = { getSoundexCode, generateSoundex };
