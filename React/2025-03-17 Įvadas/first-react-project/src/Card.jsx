export function Card({ Icon, title, grietine, active }) {
	let cardClassName = "card";
	if (active) cardClassName += " card-active";

	return (
		<div className={cardClassName}>
			<Icon className="card-icon" />
			<h4>{title}</h4>
			<p>{grietine}</p>
		</div>
	);
}
