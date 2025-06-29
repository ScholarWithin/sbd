const tokenizer = require('./lib/tokenizer');

// Test the problematic text
const text = '"Surely," I said to myself again, as I looked over the country, "this is Snow Land." I wondered how long it would take to cross it.';

console.log('=== Debug Analysis ===');
console.log('Input text:', text);

// Let's see how the words are split
const splitIntoWords = /\S+|\n/g;
const words = text.trim().match(splitIntoWords);
console.log('\nWords after splitting:');
words.forEach((word, i) => console.log(`${i}: "${word}"`));

// Let's trace through the quote removal logic
console.log('\n=== Quote Removal Analysis ===');
words.forEach((word, i) => {
    console.log(`\nWord ${i}: "${word}"`);
    
    // Check for HTML entity quotes
    if (word.endsWith('&#8221;')) {
        console.log(`  - HTML quote found, removing: "${word.slice(0, -7)}"`);
    }
    
    // Check for double curly quotes
    if (word.endsWith('"') || word.endsWith('"') || word.endsWith('"') || word.endsWith('"')) {
        console.log(`  - Double curly quote found, removing: "${word.slice(0, -2)}"`);
    }
    
    // Check for single quotes
    if (word.endsWith('"') || word.endsWith('"') || word.endsWith("'") || word.endsWith("'")) {
        console.log(`  - Single quote found, removing: "${word.slice(0, -1)}"`);
    }
    
    // Check for periods
    if (word.endsWith('.')) {
        console.log(`  - Period found at end`);
    }
});

console.log('\n=== Final Result ===');
const sentences = tokenizer.sentences(text);
console.log('Number of sentences:', sentences.length);
sentences.forEach((s, i) => console.log(`Sentence ${i+1}: ${s}`)); 