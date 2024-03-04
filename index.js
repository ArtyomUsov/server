const express = require("express");
const router = require("./routes");

const host = "127.0.0.1";
const port = 7000;
const app = express();

app.use(express.urlencoded());
app.use(router);
app.use(express.static(`${__dirname}/assets`));
app.use("/photos", express.static(`${__dirname}/assets/img`));
app.use("/css", express.static(`${__dirname}/src/header`));

app.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`);
});
