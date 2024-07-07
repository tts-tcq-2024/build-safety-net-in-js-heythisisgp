function getSoundexCode(char) {
    const soundexDict = {
        'BFPV': '1',
        'CGJKQSXZ': '2',
        'DT': '3',
        'L': '4',
        'MN': '5',
        'R': '6'
    };

    for (let key in soundexDict) {
        if (key.includes(char.toUpperCase())) {
            return soundexDict[key];
        }
    }

    return '0';
}

function generateSoundex(name) {
    if (!name) return '';

    let soundex = [name[0].toUpperCase()];
    let prevCode = getSoundexCode(name[0]);

    for (let i = 1; i < name.length && soundex.length < 4; i++) {
        let code = getSoundexCode(name[i]);
        if (code!== '0' && code!== prevCode) {
            soundex.push(code);
        }
        prevCode = code;
    }

    soundex = soundex.slice(0, 4).padEnd(4, '0');

    return soundex.join('');
}

module.exports = {
    getSoundexCode,
    generateSoundex
};
