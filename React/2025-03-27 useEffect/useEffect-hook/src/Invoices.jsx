import { useEffect, useState } from "react";
import Invoice from "./Invoice";

export default function Invoices() {
	const [invoices, setInvoices] = useState([]);
	useEffect(() => {
		async function getAndSetInvoices() {
			const invoicesData = await fetchInvoices();
			setInvoices(invoicesData);
		}
		getAndSetInvoices();
	}, []);
	// async function getAndSetInvoices() {
	// 	const invoicesData = await fetchInvoices();
	// 	setInvoices(invoicesData);
	// }
	// getAndSetInvoices();
	console.log(invoices);
	return (
		<main className="invoices">
			{invoices.map((invoice) => (
				<Invoice
					key={invoice.id}
					invoice={invoice}
				/>
			))}
		</main>
	);
}

async function fetchInvoices() {
	// http://localhost:5173/invoices.json
	const invoiceResponse = await fetch("/invoices.json");
	const invoiceData = await invoiceResponse.json();
	return invoiceData;
}
