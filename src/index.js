require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const myLogger = function (req, res, next) {
	console.log(`${req.method}: ${req.originalUrl}`);
	next();
};
app.use(myLogger);

app.use("/", (req, res) => {
	const method = req.method;
	const path = req.originalUrl.replace(/\/+$/, "");
	const getResponse = require(`../ROUTES/${method}${path}`);
	typeof getResponse == "function" ? res.send(getResponse(req, res)) : res.send(getResponse);
});

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
});
