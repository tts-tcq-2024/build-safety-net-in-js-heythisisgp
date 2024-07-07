const { expect } = require('chai');
const { getSoundexCode, generateSoundex } = require('./soundex');

describe('Soundex Algorithm', () => {
  describe('getSoundexCode', () => {
    it('should return the correct code for consonants', () => {
      expect(getSoundexCode('B')).to.equal('1');
      expect(getSoundexCode('C')).to.equal('2');
      expect(getSoundexCode('D')).to.equal('3');
      expect(getSoundexCode('L')).to.equal('4');
      expect(getSoundexCode('M')).to.equal('5');
      expect(getSoundexCode('R')).to.equal('6');
    });

    it('should return 0 for vowels and ignored characters', () => {
      expect(getSoundexCode('A')).to.equal('0');
      expect(getSoundexCode('E')).to.equal('0');
      expect(getSoundexCode('I')).to.equal('0');
      expect(getSoundexCode('O')).to.equal('0');
      expect(getSoundexCode('U')).to.equal('0');
      expect(getSoundexCode('Y')).to.equal('0');
      expect(getSoundexCode('H')).to.equal('0');
      expect(getSoundexCode('W')).to.equal('0');
    });

    it('should be case-insensitive', () => {
      expect(getSoundexCode('b')).to.equal('1');
      expect(getSoundexCode('c')).to.equal('2');
      expect(getSoundexCode('d')).to.equal('3');
    });
  });

  describe('generateSoundex', () => {
    it('should generate correct Soundex codes', () => {
      expect(generateSoundex('Robert')).to.equal('R163');
      expect(generateSoundex('Rupert')).to.equal('R163');
      expect(generateSoundex('Rubin')).to.equal('R150');
      expect(generateSoundex('Ashcraft')).to.equal('A261');
      expect(generateSoundex('Tymczak')).to.equal('T522');
    });

    it('should handle empty input', () => {
      expect(generateSoundex('')).to.equal('');
    });

    it('should pad with zeros if necessary', () => {
      expect(generateSoundex('Ray')).to.equal('R000');
      expect(generateSoundex('Gut')).to.equal('G300');
    });

    it('should handle names with repeated characters correctly', () => {
      expect(generateSoundex('Ggg')).to.equal('G200');
    });
  });
});
