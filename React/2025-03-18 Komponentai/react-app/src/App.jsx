import SpecialParagraph from "./SpecialParagraph";

export default function App() {
	const products = [
		{ name: "Produktas1", price: 8.2, discount: 10 },
		{ name: "Produktas3", price: 2.7 },
		{ name: "Produktas4", price: 12.21, discount: 5 },
	];

	const people = [
		{ firstName: "Josh", lastName: "Hamurasaki" },
		{ firstName: "Peter", lastName: "Potter" },
		{ firstName: "Bob", lastName: "Repel" },
		{ firstName: "Bob", lastName: "Repel" },
		{ firstName: "Bob", lastName: "Repel" },
		{ firstName: "Bob", lastName: "Repel" },
	];

	return (
		<main>
			<SpecialParagraph color="blue">
				Bet <b>kas</b>
			</SpecialParagraph>

			<h3>Žmonių sąrašas</h3>

			{people.map((person, index) => (
				<li key={index}>
					{person.firstName} {person.lastName}
				</li>
			))}

			<h3>Produktų sąrašas</h3>

			<div className="products">
				{products.map((product, index) => (
					<LiProduct
						key={index}
						product={product}
					/>
				))}
			</div>
		</main>
	);
}

function LiProduct({ product }) {
	const discount = product.discount || 0; // 0-100;
	const discountedPrice = (product.price * (100 - discount)) / 100; //Kaina su nuolaida
	const hasDiscount = discount !== 0; //true/false

	return (
		<div className="product">
			<p style={{ color: true ? "red" : "orange" }}>
				<b>Produktas</b> {product.name}
			</p>
			<p>
				<b>Kaina</b>{" "}
				<span className={discount ? "old-price" : ""}>
					{product.price.toFixed(2)}€
				</span>{" "}
				{hasDiscount && (
					<span className="discounted-price">
						{discountedPrice.toFixed(2)}€
					</span>
				)}
			</p>
			{hasDiscount && (
				<p>
					<b>Nuolaida</b> <span>{`${discount}%`}</span>
				</p>
			)}
		</div>
	);
}
