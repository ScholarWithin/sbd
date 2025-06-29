const tokenizer = require('./lib/tokenizer');

// Test with the HTML entity version
const text = '&#8220;Surely,&#8221; I said to myself again, as I looked over the country, &#8220;this is &#8216;Snow Land.&#8217;&#8221; I wondered how long it would take to cross it.';

console.log('=== HTML Entity Debug ===');
console.log('Input text:', text);

// Let's see how the words are split
const splitIntoWords = /\S+|\n/g;
const words = text.trim().match(splitIntoWords);

console.log('\nWords after splitting:');
words.forEach((word, i) => {
    console.log(`${i}: "${word}"`);
    if (word.includes('Land')) {
        console.log(`  ^^^ This is the word with Land`);
    }
});

// Let's trace through the exact processing of the Land word
const landWord = words.find(w => w.includes('Land'));
console.log('\n=== Processing the Land word ===');
console.log('Original word:', landWord);

// Simulate the exact logic from the tokenizer
let processedWord = landWord;

// Check for double curly quotes first
if (processedWord.endsWith('"') || processedWord.endsWith('"') || processedWord.endsWith('"') || processedWord.endsWith('"')) {
    console.log('Double curly quote found, removing last 2 chars');
    processedWord = processedWord.slice(0, -2);
    console.log('After double curly quote removal:', processedWord);
}

// Check for HTML entity quotes
if (processedWord.endsWith('&#8221;') || processedWord.endsWith('&#8221;')) {
    console.log('HTML quote found, removing last 7 chars');
    processedWord = processedWord.slice(0, -7);
    console.log('After HTML quote removal:', processedWord);
}

// Then check for single quotes
if (processedWord.endsWith('"') || processedWord.endsWith('"') || processedWord.endsWith("'") || processedWord.endsWith("'")) {
    console.log('Single quote found, removing last char');
    processedWord = processedWord.slice(0, -1);
    console.log('After single quote removal:', processedWord);
}

console.log('Final processed word:', processedWord);
console.log('Period preserved?', processedWord.endsWith('.'));

// Let's also check what happens with the single quote HTML entity
console.log('\n=== Checking single quote HTML entity ===');
const singleQuoteWord = 'Land.&#8217;';
console.log('Word with single quote HTML entity:', singleQuoteWord);

// Check if it ends with the single quote HTML entity
if (singleQuoteWord.endsWith('&#8217;')) {
    console.log('Single quote HTML entity found');
    const withoutSingleQuote = singleQuoteWord.slice(0, -7);
    console.log('After removing single quote HTML entity:', withoutSingleQuote);
    console.log('Period preserved?', withoutSingleQuote.endsWith('.'));
}

console.log('\n=== Full tokenizer test ===');
const sentences = tokenizer.sentences(text);
console.log('Number of sentences:', sentences.length);
sentences.forEach((s, i) => console.log(`Sentence ${i+1}: ${s}`)); 