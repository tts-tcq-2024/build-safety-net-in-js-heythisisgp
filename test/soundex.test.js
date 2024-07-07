describe('getSoundexCode', () => {
    it('returns 1 for B', () => {
        expect(getSoundexCode('B')).toBe('1');
    });

    it('returns 2 for C', () => {
        expect(getSoundexCode('C')).toBe('2');
    });

    it('returns 0 for A', () => {
        expect(getSoundexCode('A')).toBe('0');
    });
});

describe('generateSoundex', () => {
    it('returns empty string for empty input', () => {
        expect(generateSoundex('')).toBe('');
    });

    it('returns single character for single-character input', () => {
        expect(generateSoundex('A')).toBe('A000');
    });

    it('returns soundex code for multiple-character input', () => {
        expect(generateSoundex('Hello')).toBe('H400');
    });

    it('returns soundex code with padding for short input', () => {
        expect(generateSoundex('Hi')).toBe('H400');
    });

    it('returns soundex code without padding for long input', () => {
        expect(generateSoundex('HelloWorld')).toBe('H436');
    });
});
