import { MdOutlineErrorOutline } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { IoWarningOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

const severityVariants = {
	error: MdOutlineErrorOutline,
	success: GrStatusGood,
	warning: IoWarningOutline,
	info: IoIosInformationCircleOutline,
};
export default function Alert({
	children,
	color = "gray",
	severity = "error",
}) {
	const Icon = severityVariants[severity];
	return (
		<div
			className="p-6 text-2xl flex gap-4 items-center bg-slate-50 rounded-xl"
			style={{ color }}
		>
			<Icon className="text-4xl" />
			{children}
		</div>
	);
}
