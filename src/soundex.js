const soundexDict = {
  'B': '1', 'F': '1', 'P': '1', 'V': '1',
  'C': '2', 'G': '2', 'J': '2', 'K': '2', 'Q': '2', 'S': '2', 'X': '2', 'Z': '2',
  'D': '3', 'T': '3',
  'L': '4',
  'M': '5', 'N': '5',
  'R': '6'
};

function getSoundexCode(char) {
  char = char.toUpperCase();
  return soundexDict[char] || '0';
}

function filterSoundexCodes(name) {
  let filteredCodes = [];
  let prevCode = getSoundexCode(name[0]);

  for (let i = 1; i < name.length && filteredCodes.length < 3; i++) {
    let code = getSoundexCode(name[i]);
    if (code !== '0' && code !== prevCode) {
      filteredCodes.push(code);
      prevCode = code;
    }
  }
  return filteredCodes;
}

function padSoundexCodes(codes) {
  return codes.concat('000').slice(0, 3).join('');
}

function generateSoundex(name) {
  if (!name) return '';
  const firstLetter = name[0].toUpperCase();
  const filteredCodes = filterSoundexCodes(name);
  const paddedCodes = padSoundexCodes(filteredCodes);
  return firstLetter + paddedCodes;
}

module.exports = {
  getSoundexCode,
  generateSoundex
};
