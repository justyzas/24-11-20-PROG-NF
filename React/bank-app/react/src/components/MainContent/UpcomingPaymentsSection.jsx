import Alert from "../ui/Alert";

export default function UpcomingPaymentsSection() {
	return (
		<>
			<h4 className="text-2xl lg:col-span-2">Upcoming Payments</h4>
			<div className="lg:col-span-2">
				<Alert
					severity="success"
					color="gray"
				>
					No upcoming payments
				</Alert>
			</div>
		</>
	);
}
