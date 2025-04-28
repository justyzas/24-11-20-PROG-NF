import { Button, InputAdornment, TextField } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { CloseSnackbarAction } from "../lib/utils/CloseSnackbarAction";
import { redirect } from "react-router";

export default function ProductRegistrationForm() {
	async function handleSumbit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);

		const data = {
			name: formData.get("name"),
			price: Number(formData.get("price")),
			quantity: Number(formData.get("quantity")),
			description: formData.get("description"),
		};

		const response = await fetch("/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const responseData = await response.json();
			enqueueSnackbar({
				message: responseData.message,
				variant: "error",
				action: CloseSnackbarAction,
			});
		} else {
			enqueueSnackbar({
				message: "Produktas sėkmingai užregistruotas",
				variant: "success",
				action: CloseSnackbarAction,
			});
			redirect("/");
		}
	}

	return (
		<form onSubmit={handleSumbit}>
			<TextField
				type="text"
				variant="standard"
				name="name"
				label="Produkto pavadinimas"
				fullWidth
				margin="normal"
				required
			/>
			<TextField
				type="number"
				variant="standard"
				name="price"
				label="Kaina"
				fullWidth
				margin="normal"
				slotProps={{
					input: {
						startAdornment: <InputAdornment position="start">€</InputAdornment>,
					},
				}}
				defaultValue="10.99"
				required
			/>

			<TextField
				type="number"
				variant="standard"
				name="quantity"
				label="Pradinis produkto kiekis"
				defaultValue={0}
				fullWidth
				margin="normal"
			/>

			<TextField
				variant="standard"
				name="description"
				type="text"
				label="Produkto aprašymas"
				multiline
				rows={4}
				fullWidth
				margin="normal"
			/>
			<Button
				type="submit"
				variant="outlined"
			>
				Užregistruoti
			</Button>
		</form>
	);
}
