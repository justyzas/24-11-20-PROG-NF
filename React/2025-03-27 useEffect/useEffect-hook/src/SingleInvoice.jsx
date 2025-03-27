import { useEffect, useState } from "react";
import Invoice from "./Invoice";

export default function SingleInvoice() {
	const [invoiceId, setInvoiceId] = useState("");
	const [invoiceSerials, setInvoiceSerials] = useState([]);
	const [invoice, setInvoice] = useState(null);

	useEffect(() => {
		async function getInvoiceSerials() {
			const invoiceSerialsResponse = await fetch("/invoices-series.json");
			const invoiceSerialsData = await invoiceSerialsResponse.json();
			setInvoiceSerials(invoiceSerialsData);
		}
		getInvoiceSerials();
	}, []);

	async function fetchNewInvoiceData(e) {
		const invoiceId = e.target.value;
		setInvoiceId(invoiceId);
		if (invoiceId == "") {
			setInvoice(null);
		} else {
			const invoiceResponse = await fetch(`/invoices/${invoiceId}.json`);
			const data = await invoiceResponse.json();
			setInvoice(data);
		}
	}

	return (
		<main>
			<select
				value={invoiceId}
				onChange={fetchNewInvoiceData}
			>
				<option value={""}>Pasirinkite seriją</option>

				{invoiceSerials.map((invoiceSerial) => (
					<option
						key={invoiceSerial.id}
						value={invoiceSerial.id}
					>
						{invoiceSerial.serija}
					</option>
				))}
			</select>

			{invoice && <Invoice invoice={invoice} />}
		</main>
	);
}
