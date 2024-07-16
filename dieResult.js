// const { roller } = require('./roller');
const { d4 } = require('./diceForms/d4');
const { d6 } = require('./diceForms/d6');
const { d8 } = require('./diceForms/d8');
const { d10 } = require('./diceForms/d10');
const { d12 } = require('./diceForms/d12');
const { d20 } = require('./diceForms/d20');
const { d30 } = require('./diceForms/d30');
const { d100 } = require('./diceForms/d100');

let dieType = prompt("Which die would you like to roll?");

switch (dieType) {
    case 'd4':
        console.log(`roll a d4: ${d4}`);
        break;
    case 'd6':
        console.log(`roll a d6: ${d6}`);
        break;
    case 'd8':
        console.log(`roll a d8: ${d8}`);
        break;
    case 'd10':
        console.log(`roll a d10: ${d10}`);
        break;
    case 'd12':
        console.log(`roll a d12: ${d12}`);
        break;
    case 'd20':
        console.log(`roll a d20: ${d20}`);
        break;
    case 'd30':
        console.log(`roll a d30: ${d30}`);
        break;
    case 'd100':
        console.log(`roll a d100: ${d100}`);
        break;
}