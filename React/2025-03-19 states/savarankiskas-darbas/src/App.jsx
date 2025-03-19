import css from "./App.module.css";

export default function App() {
	return (
		<main>
			<K1
				a1={5}
				size={25}
			>
				LABAS ZUIKI!
			</K1>
			<K2 txt="LABAS ZUIKI!" />
			<K3 atr={1}>Tekstas</K3>
			<K3 atr={2}>Tekstas</K3>
			<K3 atr={0}>Tekstas</K3>

			<K4 a1="tekstas1" />
			<K4 a2="tekstas2" />
			<K4
				a1="tekstas1"
				a2="tekstas2"
			/>
			<K5
				a1="Tekstas pirmas"
				a2="Tekstas kitas"
				a3="#999999"
			/>
		</main>
	);
}

// Sukurti komponentą, kuris užrašytų “LABAS, ZUIKI!”.
// Raidžių spalva pink.
// Spalva tekstui nurodoma komponento viduje naudojant style.

function K1(p) {
	// p.size = 25
	return (
		<p
			style={{
				color: "pink",
				fontSize: `${p.size}px`,
			}}
		>
			{p.children}
		</p>
	);
}

// Sukurti komponentą, kuris gauną vieną props.
// Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.

function K2({ txt }) {
	console.log(css);
	return <h1 className={css.heading}>{txt}</h1>;
}

// Sukurti komponentą rodantį tekstą h1 tage - “Zebrai ir Bebrai”
// kuris gauna vieną props, kuris lygus 1 arba 2.
// Jeigu props lygus 1 tekstas nudažomas mėlynai,
// o jeigu 2 - raudonai,
// bet koks kitas skaičius nudažomas juodai.

function K3(p) {
	function chooseColor() {
		// if (p.atr == 1) return "blue";
		// else if (p.atr == 2) return "red";
		// else return "black";
		return p.atr == 1 ? "blue" : p.atr == 2 ? "red" : "black";
	}

	return <h1 style={{ color: chooseColor() }}>{p.children}</h1>;
}

// Sukurti komponentą, kuris gauna du props.
// Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage,
// O antras bet koks tekstas kuris atvaizduojamas h2 tage.

function K4({ a1, a2 }) {
	return (
		<>
			{a1 && <h1>{a1}</h1>}
			{a2 && <h2>{a2}</h2>}
		</>
	);
}

// Sukurti komponentą, kuris gauna tris props.
// Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage,
// o antras bet koks tekstas kuris atvaizduojamas h2 tage,
// o trečias yra spalva, kuria nudažomi abu tekstai.

function K5({ a1, a2, a3 }) {
	return (
		<>
			{a1 && <h1 style={{ color: a3 }}>{a1}</h1>}
			{a2 && <h2 style={{ color: a3 }}>{a2}</h2>}
		</>
	);
}
