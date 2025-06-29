const stringHelper = require('./lib/stringHelper');

// Test the problematic word
const word = 'Land."';

console.log('Original word:', word);

// Simulate the quote removal logic
let processedWord = word;

// Step 1: Check for double curly quotes
if (stringHelper.endsWithChar(processedWord, '"') || stringHelper.endsWithChar(processedWord, '"') || stringHelper.endsWithChar(processedWord, '"') || stringHelper.endsWithChar(processedWord, '"')) {
    console.log('Double curly quote found, removing last 2 chars');
    processedWord = processedWord.slice(0, -2);
    console.log('After double curly quote removal:', processedWord);
}

// Step 2: Check for single quotes
if (stringHelper.endsWithChar(processedWord, '"') || stringHelper.endsWithChar(processedWord, '"') || stringHelper.endsWithChar(processedWord, "'") || stringHelper.endsWithChar(processedWord, "'")) {
    console.log('Single quote found, removing last char');
    processedWord = processedWord.slice(0, -1);
    console.log('After single quote removal:', processedWord);
}

console.log('Final result:', processedWord);
console.log('Period preserved?', processedWord.endsWith('.')); 