const { expect } = require('chai');
const { getSoundexCode, generateSoundex } = require('../src/soundex');

describe('getSoundexCode', () => {
  it('returns the correct Soundex code for a character', () => {
    expect(getSoundexCode('B')).to.equal('1');
    expect(getSoundexCode('C')).to.equal('2');
    expect(getSoundexCode('E')).to.equal('0'); // vowel, returns 0
  });

  it('returns 0 for characters without a Soundex code', () => {
    expect(getSoundexCode('A')).to.equal('0');
    expect(getSoundexCode('I')).to.equal('0');
  });

  it('returns 0 for non-alphabetic characters', () => {
    expect(getSoundexCode('1')).to.equal('0');
    expect(getSoundexCode('@')).to.equal('0');
  });

  it('returns 0 for null or undefined input', () => {
    expect(getSoundexCode(null)).to.equal('0');
    expect(getSoundexCode(undefined)).to.equal('0');
  });
});

describe('generateSoundex', () => {
  it('returns an empty string for an empty input', () => {
    expect(generateSoundex('')).to.equal('');
  });

  it('returns the correct Soundex code for a single-character input', () => {
    expect(generateSoundex('B')).to.equal('B000');
  });

  it('returns the correct Soundex code for a multi-character input', () => {
    expect(generateSoundex('BCDE')).to.equal('B230');
  });

  it('ignores vowels and returns the correct Soundex code', () => {
    expect(generateSoundex('BAEIOU')).to.equal('B000');
  });

  it('handles characters with the same Soundex code', () => {
    expect(generateSoundex('BBB')).to.equal('B100');
    expect(generateSoundex('BCB')).to.equal('B200');
  });

  it('handles null or undefined input', () => {
    expect(generateSoundex(null)).to.equal('');
    expect(generateSoundex(undefined)).to.equal('');
  });

  it('handles input with non-alphabetic characters', () => {
    expect(generateSoundex('B1C')).to.equal('B200');
    expect(generateSoundex('B@C')).to.equal('B200');
  });
});
