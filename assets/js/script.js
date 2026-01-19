"use strict";

/*
let name = prompt("What's your name?", '');
alert(name);

confirm(`Your name is ${name}`);
*/

/*
let boolValue = true;
boolValue = String(boolValue);

console.log(`${boolValue} - ${typeof(boolValue)}`);

let str = '123';
str = Number(str);

let strToNum = '32';
*/

/*
console.log(`${str} - ${typeof(str)}`)
console.log(`${strToNum} - ${typeof(strToNum)}`)
strToNum = Number(strToNum);
console.log(`${strToNum} - ${typeof(strToNum)}`)
*/

console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(true + false); // true or 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); // "$45"
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // "  -9  5"
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2


a ||= b; // "Логическое присваивание ИЛИ" -
a &&= b; // "Логическое присваивание И"
a ?? b; // 'Возвращает первое определенное значение'
a ??= b; // 'Приcваивает первое определенное значение'