// import { MdOutlineErrorOutline } from "react-icons/md";
import Chip from "../ui/Chip";
// import IconWithNumber from "../ui/IconWithNumber";
import ProfilizedIcon from "../ui/ProfilizedIcon";
import { PiBank } from "react-icons/pi";

export default function WithdrawalRow({
	withdrawal = {
		to: "Azie Melasari",
		amount: 2874.07,
		success: false,
	},
}) {
	const formattedAmount = Math.floor(withdrawal.amount).toLocaleString(
		"en-us",
		{ currency: "usd" }
	);
	const cents = Math.floor((withdrawal.amount % 1) * 100);
	return (
		<div className="grid grid-cols-[100px_1fr_210px] grid-rows-2">
			<span className="row-span-2 flex justify-center items-center">
				{/* <IconWithNumber
					number={<MdOutlineErrorOutline />}
					positionX="right"
					positionY="bottom"
				> */}
				<ProfilizedIcon size="xl">
					<PiBank />
				</ProfilizedIcon>
				{/* </IconWithNumber> */}
			</span>
			<span className="font-bold">To: {withdrawal.to}</span>
			<span className="font-bold justify-self-end">
				-${formattedAmount}
				<span className="text-slate-400">
					.{cents.toString().padStart(2, "0")}
				</span>
			</span>
			<select className="text-blue-400 justify-self-start pr-4">
				<option value="">Show tracking</option>
			</select>
			<span className="justify-self-end self-center">
				{withdrawal.success ? (
					<Chip variant="success">success</Chip>
				) : (
					<Chip variant="error">failed</Chip>
				)}
			</span>
		</div>
	);
}
