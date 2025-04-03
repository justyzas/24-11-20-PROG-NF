import Button from "../ui/Button";

export default function TotalBalanceSection() {
	return (
		<>
			<h4 className="text-2xl">Total Balance</h4>
			<select className="justify-self-start lg:justify-self-end">
				<option value="">1</option>
				<option value="">2</option>
				<option value="">3</option>
			</select>
			<h3 className="text-4xl font-bold">$120.879.30</h3>
			<span className="lg:justify-self-end">
				<Button background="#b8ecfb">Withdraw</Button>
			</span>
		</>
	);
}
