const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "5mb" }));

app.use("/", (req, res, next) => {
    res.status(200).json("Hello World!");
});

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`>> [SV] Server is running on port:${port}`);
});