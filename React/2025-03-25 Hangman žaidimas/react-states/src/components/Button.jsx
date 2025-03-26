export default function Button({
	children,
	backgroundColor = "gray",
	color = "white",
	onClick = () => {},
}) {
	return (
		<button
			className="btn"
			style={{
				backgroundColor,
				color,
			}}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
