const { roller } = require('./roller');
const { d4 } = require('./diceForms/d4');
const { d6 } = require('./diceForms/d6');
const { d8 } = require('./diceForms/d8');
const { d10 } = require('./diceForms/d10');
const { d12 } = require('./diceForms/d12');
const { d20 } = require('./diceForms/d20');
const { d30 } = require('./diceForms/d30');
const { d100 } = require('./diceForms/d100');

console.log(`roll a d4: ${d4}`);
console.log(`roll a d6: ${d6}`);
console.log(`roll a d8: ${d8}`);
console.log(`roll a d10: ${d10}`);
console.log(`roll a d12: ${d12}`);
console.log(`roll a d20: ${d20}`);
console.log(`roll a d30: ${d30}`);
console.log(`roll a d100: ${d100}`);

// variable declarations
// const rolls = [];
// const results = [];

// // dice class constructor function
// class Dice {
//     constructor(sides) {
//         this.sides = sides
//     }
// function roller(sides) {
//     return Math.floor(Math.random() * sides + 1);
// }
// }

// // create die variable form contructor
// const die = () => {
//     new Dice();
// };

// use die to make individual die
// const d4 = die(4);
// const d6 = () => die(6);
// const d8 = () => die(8);
// const d10 = () => die(10);
// const d12 = () => die(12);
// const d20 = () => die(20);
// const d30 = () => die(30);
// const d100 = () => die(100);

// console.log(die.roller(d4));

// multi roller
// let dieRoller