export default function Invoice({ invoice }) {
	return (
		<div className="invoice">
			<p>
				<b>Sąskaitos serija</b>
				<span>{invoice.serija}</span>
			</p>
			<p>
				<b>Sąskaitos gavėjas</b>
				<span>{invoice.saskaitosGavejas}</span>
			</p>
			<p>
				<b>Sąskaitą išrašė</b>
				<span>{invoice.saskaitosIsrasytojas}</span>
			</p>
			<p>
				<b>Suma</b>
				<span>{invoice.suma.toFixed(2)}€</span>
			</p>
		</div>
	);
}
