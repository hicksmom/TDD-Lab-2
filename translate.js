// Translation must all be done in a translate function 
// that takes a string parameter and returns
// the translated Pig Latin string.

function translate(word) {
    // 1. Convert each word to lowercase before translating.
    word = word.toLowerCase();


    // 2. If a word starts with a vowel, just add “way” onto the ending.
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelIndex = 0;
  
    if (vowels.includes(word[0])) {

        return word + "way";

    } else {

        // 3. If a word starts with a consonant, move all of the consonants that appear before the
        // first vowel to the end of the word, then add “ay” to the end of the word.
        for (let char of word) {
            if (vowels.includes(char)) {
          vowelIndex = word.indexOf(char);
          break;
        };
      };

      return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
    };
  }
  