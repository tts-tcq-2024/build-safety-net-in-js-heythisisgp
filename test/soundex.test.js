const { expect } = require('chai');
const { generateSoundex } = require('../src/soundex');

function getSoundexCode(soundexString) {
  return soundexString.slice(1); 
}

describe('getSoundexCode', () => {
  it('returns the correct Soundex code for a character', () => {
    expect(getSoundexCode('B')).toBe('1');
    expect(getSoundexCode('C')).toBe('2');
    expect(getSoundexCode('E')).toBe('0'); // vowel, returns 0
  });

  it('returns 0 for characters without a Soundex code', () => {
    expect(getSoundexCode('A')).toBe('0');
    expect(getSoundexCode('I')).toBe('0');
  });

  it('returns 0 for non-alphabetic characters', () => {
    expect(getSoundexCode('1')).toBe('0');
    expect(getSoundexCode('@')).toBe('0');
  });

  it('returns 0 for null or undefined input', () => {
    expect(getSoundexCode(null)).toBe('0');
    expect(getSoundexCode(undefined)).toBe('0');
  });
});

describe('generateSoundex', () => {
  it('returns an empty string for an empty input', () => {
    expect(generateSoundex('')).toBe('');
  });

  it('returns the correct Soundex code for a single-character input', () => {
    expect(generateSoundex('B')).toBe('B1');
  });

  it('returns the correct Soundex code for a multi-character input', () => {
    expect(generateSoundex('BCDE')).toBe('B231');
  });

  it('ignores vowels and returns the correct Soundex code', () => {
    expect(generateSoundex('BAEIOU')).toBe('B1');
  });

  it('handles characters with the same Soundex code', () => {
    expect(generateSoundex('BBB')).toBe('B1');
    expect(generateSoundex('BCB')).toBe('B21');
  });

  it('handles null or undefined input', () => {
    expect(generateSoundex(null)).toBe('');
    expect(generateSoundex(undefined)).toBe('');
  });

  it('handles input with non-alphabetic characters', () => {
    expect(generateSoundex('B1C')).toBe('B21');
    expect(generateSoundex('B@C')).toBe('B2');
  });
});
