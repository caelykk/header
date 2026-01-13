"use strict";


// let name = prompt("What's your name?", '');
// alert(name);

// confirm(`Your name is ${name}`); 

let boolValue = true;
boolValue = String(boolValue);

console.log(`${boolValue} - ${typeof(boolValue)}`);

let str = '123';
str = Number(str);

let strToNum = '32';


console.log(`${str} - ${typeof(str)}`)
console.log(`${strToNum} - ${typeof(strToNum)}`)
strToNum = Number(strToNum);
console.log(`${strToNum} - ${typeof(strToNum)}`)


// alert( alert(1) && alert(2) );

let login = prompt("login", '');
if (login === "admin") {
    let pass = prompt("psassword", '');
    if (pass) {
        if (pass === "Я главный") {
            alert("Здравствуйте");
        } else {
            alert("Неверный пароль");
        }
    } else {
        alert("Отменено");
    }
} else {
    alert("Я вас не знаю");
}

if (pass > 19 && age <= 90) {
    alert(age);
}

// "" + 1 + 0 // "10"
// "" - 1 + 0 // -1
// true + false // true or 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // "  -9  5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2