const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false

const a5 = "Cat" && "Dog"; // t && t returns "Dog"
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false
const a8 = "" && false; // f && f returns ""
const a9 = false && ""; // f && f returns false

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);

console.log(4 !== "5" && 123);
console.log(null === undefined && 123);

// 0, null, undefined, NaN, false, ""
