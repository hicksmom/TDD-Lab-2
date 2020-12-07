describe('translate', function () {

// 1. Multiple tests for words starting with different vowels.

it("word starting with a", function() {

    expect(translate('apple')).toEqual('appleway')
});

it("word starting with e", function() {

    expect(translate('elephant')).toEqual('elephantway')
});

it("word starting with i", function() {

    expect(translate('inch')).toEqual('inchway')
});


// 2. At least one test for words starting with one consonant.

it("word starting with one consonant", function() {

    expect(translate('bed')).toEqual('edbay')
});


// 3. At least one test for words starting with two consonants.

it("word starting with two consonants", function() {

    expect(translate('sleep')).toEqual('eepslay')
});


// 4. At least one test for words starting with three consonants.

it("word starting with three consonants", function() {

    expect(translate('splurge')).toEqual('urgesplay')
});


// 5. At least one test checking for lower case conversion.

it("word starting with capital vowel converted to lowercase", function() {

    expect(translate('Action')).toEqual('actionway')
});

// 6. Proper case consonant conversion to lower case.

it("convert to lower case", function() {

    expect(translate('Capital')).toEqual('apitalcay')
});

// 7. Upper case conversion to lower case.

it("convert to lower case", function() {

    expect(translate('APPLE')).toEqual('appleway')
});

});