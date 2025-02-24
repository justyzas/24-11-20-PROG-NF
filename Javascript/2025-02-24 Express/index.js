import express from "express";
import cors from "cors";

const app = express();

// MIDDLEWARES:
// Leidimas kreiptis į express serverį bet kokiai svetainei
app.use(cors());
// Leidimas pridėti JSON duomenis į užklausą (req.body);
app.use(express.json());

// Serverio paleidimas su 8720 portu.
app.listen(8720, () => {
	console.log("Serveris pasileido adresu: http://localhost:8720/");
});

const users = [
	{
		id: 1,
		username: "Petras",
		email: "petras@gmail.com",
	},
	{
		id: 2,
		username: "Linas",
		email: "linas@gmail.com",
	},
	{
		id: 3,
		username: "Minedas",
		email: "minedas@gmail.com",
	},
];

// get - skirtas gauti informacijai
// route handler
// req - užklausos parametrai
// res - atsakymo parametrai
app.get("/a", (req, res) => {
	console.log(req);
	res.send("<h1>Hello from express!</h1>");
	// res.send();
});

app.get("/users", (req, res) => {
	let filteredUsers = users;

	// Užklausos parametrai pasiekiami su req.query, (pagrinde skirta filtracijai ir rikiavimui)
	const startsWith = req.query.startsWith;
	if (startsWith)
		filteredUsers = users.filter((user) =>
			user.username.toLowerCase().startsWith(startsWith)
		);
	res.send(filteredUsers);
});

app.get("/users/:id", (req, res) => {
	// Dinaminiai route segmentai pasiekiami per req.params
	const id = req.params.id; //string
	const user = users.find((user) => user.id == id);
	if (user === undefined) res.send("Naudotojas nerastas");
	else res.send(user);
});

// post užklausos, skirtos sukūrimui serverių sistemose
app.post("/users", (req, res) => {
	const newUser = req.body;
	// Validacija userio duomenims
	if (!newUser.username || !newUser.email || !newUser.id) {
		// Bad data
		return res
			.status(400)
			.send(
				"Naudotojas negalėjo būti sukurtas. Nepateiktas username, email arba id laukelis"
			);
	}

	users.push(newUser);
	res.status(201).json("Naujas naudotojas buvo sėkmingai sukurtas");
});
// http://localhost:8720/users
