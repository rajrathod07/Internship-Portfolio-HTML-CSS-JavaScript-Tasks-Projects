let messyName = "   raj   ";
let birthYear = 2006;

let cleanName = messyName.trim();

let upperName = cleanName.toUpperCase();

let nameLength = cleanName.length;

let currentYear = 2026;
let age = currentYear - birthYear;

let randomID = Math.floor(Math.random() * 100);

console.log("--- ID CARD ---");
console.log("Name: " + upperName);
console.log("Letters in name: " + nameLength);
console.log("Age: " + age);
console.log("User ID: " + randomID);