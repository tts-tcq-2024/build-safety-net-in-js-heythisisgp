const soundex = require('./soundex');

describe('Soundex', () => {
  describe('getSoundexCode', () => {
    it('returns the correct soundex code for a given character', () => {
      expect(soundex.getSoundexCode('B')).to.equal('1');
      expect(soundex.getSoundexCode('C')).to.equal('2');
      expect(soundex.getSoundexCode('D')).to.equal('3');
      expect(soundex.getSoundexCode('E')).to.equal('0');
    });
  });

  describe('generateSoundex', () => {
    it('returns an empty string for an empty input', () => {
      expect(soundex.generateSoundex('')).to.equal('');
    });

    it('returns the correct soundex code for a given name', () => {
      expect(soundex.generateSoundex('John')).to.equal('J500');
      expect(soundex.generateSoundex('Mary')).to.equal('M600');
      expect(soundex.generateSoundex('Robert')).to.equal('R163');
    });

    it('ignores vowels and non-alphabetic characters', () => {
      expect(soundex.generateSoundex('John Doe')).to.equal('J500');
      expect(soundex.generateSoundex('Mary-Ann')).to.equal('M600');
    });

    it('handles names with multiple consecutive consonants', () => {
      expect(soundex.generateSoundex('McDonald')).to.equal('M235');
    });
  });
});
