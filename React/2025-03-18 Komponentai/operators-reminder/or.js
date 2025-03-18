const a1 = true || true; // t || t returns true
const a2 = false || true; // f || t returns true
const a3 = true || false; // t || f returns true
const a4 = false || 3 === 4; // f || f returns false

const a5 = "Cat" || "Dog"; // t || t returns "Cat"
const a6 = false || "Cat"; // f || t returns "Cat"
const a7 = "Cat" || false; // t || f returns "Cat"
const a8 = "" || false; // f || f returns false
const a9 = 0 || ""; // f || f returns ""
const a10 = false || {}; // f || object returns {}

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);

// console.log(4 || 0);
console.log("" || 0);
console.log(5 || undefined);
