import { interpreterRec } from './interpreter';

console.log('Operations Interpreter script...\n');

const input = 'OP_ADD';

console.log('Computing for input:', input);
console.log('Result:', interpreterRec(input));
