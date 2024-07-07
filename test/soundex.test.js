const { getSoundexCode, generateSoundex } = require('./soundex');

describe('Soundex', () => {
  describe('getSoundexCode', () => {
    it('returns the correct soundex code for a given character', () => {
      expect(getSoundexCode('B')).to.equal('1');
      expect(getSoundexCode('C')).to.equal('2');
      expect(getSoundexCode('D')).to.equal('3');
      expect(getSoundexCode('E')).to.equal('0');
    });
  });

  describe('generateSoundex', () => {
    it('returns an empty string for an empty input', () => {
      expect(generateSoundex('')).to.equal('');
    });

    it('returns the correct soundex code for a given name', () => {
      expect(generateSoundex('John')).to.equal('J500');
      expect(generateSoundex('Mary')).to.equal('M600');
      expect(generateSoundex('Robert')).to.equal('R163');
    });

    it('ignores vowels and non-alphabetic characters', () => {
      expect(generateSoundex('John Doe')).to.equal('J500');
      expect(generateSoundex('Mary-Ann')).to.equal('M600');
    });

    it('handles names with multiple consecutive consonants', () => {
      expect(generateSoundex('McDonald')).to.equal('M235');
    });
  });
});
