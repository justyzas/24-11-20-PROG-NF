import Button from "../ui/Button";
import WithdrawalRow from "./WithdrawalRow";
const withdrawalHistory = [
	{
		to: "Azie Melasari",
		amount: 5280,
		success: true,
	},
	{
		to: "Azie Melasari",
		amount: 2874.5,
		success: false,
	},
	{
		to: "Justinas Krutikovas",
		amount: 2874.5,
		success: true,
	},
];

export default function WithdrawalsSection() {
	return (
		<>
			<h4 className="text-2xl">Recent Withdrawals</h4>
			<span className="lg:justify-self-end">
				<Button>View All</Button>
			</span>
			<div className="lg:col-span-2 grid gap-8 pt-8">
				{withdrawalHistory.map((withdrawal, index) => (
					<WithdrawalRow
						key={index}
						withdrawal={withdrawal}
					/>
				))}
			</div>
		</>
	);
}
