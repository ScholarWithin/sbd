const tokenizer = require('./lib/tokenizer');

// Test with the problematic text
const text = '"Surely," I said to myself again, as I looked over the country, "this is \'Snow Land.\'" I wondered how long it would take to cross it.';

console.log('=== Testing Your Fix ===');
console.log('Input text:', text);

// Test the sentence detection
const sentences = tokenizer.sentences(text);
console.log('\nNumber of sentences:', sentences.length);
sentences.forEach((s, i) => console.log(`Sentence ${i+1}: ${s}`));

// Let's also test with the HTML entity version
console.log('\n=== Testing HTML Entity Version ===');
const htmlText = '&#8220;Surely,&#8221; I said to myself again, as I looked over the country, &#8220;this is &#8216;Snow Land.&#8217;&#8221; I wondered how long it would take to cross it.';
console.log('Input text:', htmlText);

const htmlSentences = tokenizer.sentences(htmlText);
console.log('\nNumber of sentences:', htmlSentences.length);
htmlSentences.forEach((s, i) => console.log(`Sentence ${i+1}: ${s}`)); 