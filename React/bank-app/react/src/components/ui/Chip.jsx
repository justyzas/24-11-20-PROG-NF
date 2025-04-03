const variants = {
	error: {
		text: "#850101",
		background: "#eca3a3",
	},
	success: {
		text: "#0a8501",
		background: "#a3eca4",
	},
};
export default function Chip({ children, variant = "error" }) {
	return (
		<span
			className="rounded-full px-4 flex justify-center items-center h-min uppercase"
			style={{
				color: variants[variant].text,
				backgroundColor: variants[variant].background,
			}}
		>
			<li>{children}</li>
		</span>
	);
}
