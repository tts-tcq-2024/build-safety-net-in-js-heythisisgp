const { generateSoundex } = require('../src/soundex');

describe('generateSoundex', () => {
    test('handles names starting with vowels', () => {
        expect(generateSoundex('Apple')).toBe('A123');
        expect(generateSoundex('Eagle')).toBe('E124');
    });

    test('handles repeated consonants', () => {
        expect(generateSoundex('Castle')).toBe('C234');
    });

    test('handles h/w between vowels', () => {
        expect(generateSoundex('Howe')).toBe('HO11');
    });

    test('handles mixed consonants and vowels', () => {
        expect(generateSoundex('Computer')).toBe('C365');
    });

    test('returns empty string for empty input', () => {
        expect(generateSoundex('')).toBe('');
    });
});
