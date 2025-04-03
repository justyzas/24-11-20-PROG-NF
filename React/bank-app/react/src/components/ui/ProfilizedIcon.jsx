const iconSizes = {
	sm: "14px",
	md: "18px",
	lg: "24px",
	xl: "32px",
	"2xl": "40px",
};

export default function ProfilizedIcon({
	children,
	size = "sm",
	iconColor = "gray",
}) {
	return (
		<span
			style={{ fontSize: iconSizes[size], color: iconColor }}
			className="border border-slate-300 rounded-full w-min p-4 "
		>
			{children}
		</span>
	);
}
