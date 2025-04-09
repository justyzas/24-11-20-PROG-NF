import session from "express-session";
import MysqlStore from "express-mysql-session";
import mysql from "./connect-mysql.js";

const MysqlStorePrepared = MysqlStore(session);

export default function configSessions(app) {
	const mysqlStore = new MysqlStorePrepared(
		{
			schema: {
				tableName: "sessions",
			},
		},
		mysql
	);

	app.use(
		session({
			secret: "APPLE_BANANA",
			resave: false,
			saveUninitialized: false,
			store: mysqlStore,
			cookie: {
				maxAge: 1000 * 60,
			},
		})
	);
}
