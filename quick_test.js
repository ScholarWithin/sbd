const stringHelper = require('./lib/stringHelper');

// Test the problematic word
const word = 'Land.&#8217;';

console.log('Testing word:', word);
console.log('Ends with &#8217;?', stringHelper.endsWith(word, '&#8217;'));
console.log('Ends with \'&#8217;?', stringHelper.endsWith(word, '\'&#8217;'));

// What should happen
if (stringHelper.endsWith(word, '&#8217;')) {
    console.log('Should remove &#8217;');
    const result = word.slice(0, -7);
    console.log('Result:', result);
    console.log('Period preserved?', result.endsWith('.'));
} 