const tokenizer = require('./lib/tokenizer');

// Test with the original text with HTML entities
const text1 = '&#8220;Surely,&#8221; I said to myself again, as I looked over the country, &#8220;this is &#8216;Snow Land.&#8217;&#8221; I wondered how long it would take to cross it.';

// Test with decoded HTML entities
const text2 = '"Surely," I said to myself again, as I looked over the country, "this is \'Snow Land.\'" I wondered how long it would take to cross it.';

// Test with simple quotes
const text3 = '"Surely," I said to myself again, as I looked over the country, "this is Snow Land." I wondered how long it would take to cross it.';

console.log('=== Test 1: HTML Entities ===');
console.log('Input:', text1);
const sentences1 = tokenizer.sentences(text1);
console.log('Number of sentences:', sentences1.length);
sentences1.forEach((s, i) => console.log(`Sentence ${i+1}: ${s}`));

console.log('\n=== Test 2: Decoded HTML Entities ===');
console.log('Input:', text2);
const sentences2 = tokenizer.sentences(text2);
console.log('Number of sentences:', sentences2.length);
sentences2.forEach((s, i) => console.log(`Sentence ${i+1}: ${s}`));

console.log('\n=== Test 3: Simple Quotes ===');
console.log('Input:', text3);
const sentences3 = tokenizer.sentences(text3);
console.log('Number of sentences:', sentences3.length);
sentences3.forEach((s, i) => console.log(`Sentence ${i+1}: ${s}`)); 