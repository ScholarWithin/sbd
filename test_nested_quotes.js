const tokenizer = require('./lib/tokenizer');

// Test with the specific nested quote case
const text = '"Surely," I said to myself again, as I looked over the country, "this is \'Snow Land.\'" I wondered how long it would take to cross it.';

console.log('=== Nested Quote Analysis ===');
console.log('Input text:', text);

// Let's see how the words are split
const splitIntoWords = /\S+|\n/g;
const words = text.trim().match(splitIntoWords);
console.log('\nWords after splitting:');
words.forEach((word, i) => console.log(`${i}: "${word}"`));

// Focus on the problematic word
const problematicWord = "Land.'";
console.log('\n=== Analyzing problematic word ===');
console.log('Word:', problematicWord);

// Simulate the quote removal logic step by step
let processedWord = problematicWord;

// Step 1: Check for double curly quotes (2 characters)
console.log('\nStep 1: Check for double curly quotes');
console.log('Word ends with "?', processedWord.endsWith('"'));
console.log('Word ends with "?', processedWord.endsWith('"'));
console.log('Word ends with "?', processedWord.endsWith('"'));
console.log('Word ends with "?', processedWord.endsWith('"'));

if (processedWord.endsWith('"') || processedWord.endsWith('"') || processedWord.endsWith('"') || processedWord.endsWith('"')) {
    console.log('Double curly quote found, removing last 2 chars');
    processedWord = processedWord.slice(0, -2);
    console.log('After removal:', processedWord);
}

// Step 2: Check for single quotes (1 character)
console.log('\nStep 2: Check for single quotes');
console.log('Word ends with "?', processedWord.endsWith('"'));
console.log('Word ends with "?', processedWord.endsWith('"'));
console.log('Word ends with \'?', processedWord.endsWith("'"));
console.log('Word ends with \'?', processedWord.endsWith("'"));

if (processedWord.endsWith('"') || processedWord.endsWith('"') || processedWord.endsWith("'") || processedWord.endsWith("'")) {
    console.log('Single quote found, removing last char');
    processedWord = processedWord.slice(0, -1);
    console.log('After removal:', processedWord);
}

console.log('\nFinal result:', processedWord);
console.log('Period preserved?', processedWord.endsWith('.'));

console.log('\n=== Full sentence test ===');
const sentences = tokenizer.sentences(text);
console.log('Number of sentences:', sentences.length);
sentences.forEach((s, i) => console.log(`Sentence ${i+1}: ${s}`)); 