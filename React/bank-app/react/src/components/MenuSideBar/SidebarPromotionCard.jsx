import { FaCrown } from "react-icons/fa";
import Button from "../ui/Button";
export default function SidebarPromotionCard() {
	return (
		<div className="border border-slate-200 p-4 rounded-xl bg-slate-50 flex flex-col gap-3">
			<span className="text-white bg-black w-[48px] h-[48px] rounded-full inline-flex justify-center items-center">
				<FaCrown className="text-3xl" />
			</span>

			<h3 className="text-2xl font-bold text-slate-700 mt-7">Upgrade to Pro</h3>
			<p className="text-slate-400">
				Reminders, extra projects, advanced searching, and more.
			</p>
			<Button background="#b8ecfb">Upgrade now</Button>
		</div>
	);
}
