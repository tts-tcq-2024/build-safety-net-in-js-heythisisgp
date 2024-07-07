function getNextCode(prevCode, currentChar) {
    const nextCode = getSoundexCode(currentChar);
    if (prevCode === nextCode) {
        return prevCode;
    }
    if ((['A', 'E', 'I', 'O', 'U'].includes(prevCode) && ['H', 'W'].includes(nextCode)) ||
        (['H', 'W'].includes(prevCode) && ['A', 'E', 'I', 'O', 'U'].includes(nextCode))) {
        return nextCode + nextCode;
    }
    return nextCode;
}

function generateSoundex(name) {
    if (!name) return '';

    let soundex = [name[0].toUpperCase()];
    let prevCode = getSoundexCode(name[0]);

    for (let i = 1; i < name.length && soundex.length < 4; i++) {
        let code = getNextCode(prevCode, name[i]);
        if (code !== prevCode) {
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
    getSoundexCode,
    generateSoundex
};
