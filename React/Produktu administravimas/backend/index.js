import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import "./config/connect-mysql.js";
import authRouter from "./routes/auth.js";
import configSessions from "./config/setup-sessions.js";
const app = express();

app.use(express.json());
configSessions(app);

const proxyMiddleware = createProxyMiddleware({
	target: "http://localhost:5173/",
	changeOrigin: true,
	ws: true,
});

app.use("/api/auth", authRouter);
app.use("/", proxyMiddleware);

// http://localhost
// https://localhost   //JEI PORT'as butu 465
app.listen(80, () => {
	console.log("🤠 Express serveris sėkmingai pasileido");
});
