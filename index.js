const express = require("express");
const path = require("path");
const router = require("./routes");

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 7000;
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(router);
app.use(express.static(path.join(__dirname, "assets")));
app.use("/photos", express.static(path.join(__dirname, "assets", "img")));
app.use("/css", express.static(path.join(__dirname, "src", "header")));

app.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`);
});
