import { Button } from "@mui/material";
import { closeSnackbar } from "notistack";

export function CloseSnackbarAction({ snackbarId }) {
	return (
		<>
			<Button
				variant="text"
				// style={{
				// 	color: "white",
				// }}
				sx={{ color: "white" }}
				onClick={() => {
					closeSnackbar(snackbarId);
				}}
			>
				Uždaryti
			</Button>
		</>
	);
}
