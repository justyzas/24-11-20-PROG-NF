import MyWalletSection from "./MyWalletSection";
import TotalBalanceSection from "./TotalBalanceSection";
import UpcomingPaymentsSection from "./UpcomingPaymentsSection";
import WithdrawalsSection from "./WithdrawalsSection";

export default function MainContent() {
	return (
		<main className="w-full p-8 grid grid-cols-1 h-min gap-4 lg:grid-cols-2">
			<h2 className="text-3xl lg:col-span-2">Good Morning, Azie!</h2>
			<TotalBalanceSection />
			<MyWalletSection />
			<WithdrawalsSection />
			<UpcomingPaymentsSection />
		</main>
	);
}
