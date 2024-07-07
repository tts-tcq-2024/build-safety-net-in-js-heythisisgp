const { getSoundexCode, removeVowelsAndDuplicates, generateSoundex } = require('../src/soundex');

test('getSoundexCode returns correct code for consonants', () => {
    expect(getSoundexCode('B')).toBe('1');
    expect(getSoundexCode('C')).toBe('2');
    expect(getSoundexCode('D')).toBe('3');
    expect(getSoundexCode('L')).toBe('4');
    expect(getSoundexCode('M')).toBe('5');
    expect(getSoundexCode('R')).toBe('6');
});

test('getSoundexCode returns 0 for vowels and non-mapped characters', () => {
    expect(getSoundexCode('A')).toBe('0');
    expect(getSoundexCode('E')).toBe('0');
    expect(getSoundexCode('I')).toBe('0');
    expect(getSoundexCode('O')).toBe('0');
    expect(getSoundexCode('U')).toBe('0');
    expect(getSoundexCode('Y')).toBe('0');
    expect(getSoundexCode('H')).toBe('0');
    expect(getSoundexCode('W')).toBe('0');
});

test('removeVowelsAndDuplicates returns correct encoding without vowels and duplicates', () => {
    expect(removeVowelsAndDuplicates('Jackson')).toEqual(['2', '3', '2', '5']);
    expect(removeVowelsAndDuplicates('Pfister')).toEqual(['1', '2', '3', '6']);
});

test('generateSoundex returns correct soundex codes', () => {
    expect(generateSoundex('Jackson')).toBe('J250');
    expect(generateSoundex('Pfister')).toBe('P236');
    expect(generateSoundex('Ashcraft')).toBe('A261');
    expect(generateSoundex('Tymczak')).toBe('T522');
    expect(generateSoundex('O\'Hara')).toBe('O600');
});

test('generateSoundex handles empty and single character names', () => {
    expect(generateSoundex('')).toBe('');
    expect(generateSoundex('A')).toBe('A000');
});
