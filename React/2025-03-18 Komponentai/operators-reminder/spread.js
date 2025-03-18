const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];

console.log(c); // [1, 2, 3, 4, 5, 6]

const e = { a: 1, b: 2, c: 3 };
const d = { d: 4, e: 5, f: 6 };
const f = { ...d, ...e };

console.log(f); // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

const g = { a: 100, ...f };
console.log(g); // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

const h = [...a, 3.5, ...b];
console.log(h); // [1, 2, 3, 3.5, 4, 5, 6]

const i = [...a, ...b, 7, 8, 9];
console.log(i); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const j = { a: 1, b: 2, c: 3 };
const k = { b: 4, c: 5, d: 6 };
const l = { ...j, ...k };
console.log(l); // {a: 1, b: 4, c: 5, d: 6}

//{ a: 1, b: 2, c: 3 };
const changeKey = "b";
const changeToValue = 100;
const m = { ...j, [changeKey]: changeToValue };
console.log(m); // {a: 1, b: 100, c: 3}

const n = {
	a: 1,
	b: 2,
	c: {
		d: 3,
		e: 4,
		// f: 5,
		// g: 6
	},
	d: [1, 2, 3],
};

const o = {
	...n,
	c: {
		...n.c,
		f: 5,
		g: 6,
	},
	d: [...n.d, 4, 5, 6],
};
console.log(o);
