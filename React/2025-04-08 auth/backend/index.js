import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

const proxyMiddleware = createProxyMiddleware({
	target: "http://localhost:5173/",
	ws: true,
});

app.use("/", proxyMiddleware);

app.listen(80, () => {
	console.log("🤠 Express serveris sėkmingai pasileido");
});
