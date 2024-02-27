const path = require("path");
const fs = require("fs");
const express = require("express");

const host = "127.0.0.1";
const port = 7000;
const app = express();

app.use(express.static(`${__dirname}/assets`));
app.use("/photos", express.static(`${__dirname}/assets/img`));
app.use("/css", express.static(`${__dirname}/src/header`));

app.get("/cats", function (req, res) {
  res.status(200).send("something about cats");
});

app.get("/dogs", function (req, res) {
  res.status(200).send("something about dogs");
});

app.get("/mouses", function (req, res) {
  res.status(200).send("something about mouses");
});

app.get("/marmots", function (req, res) {
  res.status(200).send("something about marmots");
});

app.get("/capybaras", function (req, res) {
  res.status(200).send("something about capybaras");
});

app.get("/", function (req, res) {
  res.status(200).send("Request success");
});

app.get("/home", (req, res) => {
  res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.get("/src/header/style.css", (req, res) => {
  const stylePath = path.join(__dirname, "src", "header", "style.css");

  fs.access(stylePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error("Файл не найден");
      res.status(404).send("Not found");
    } else {
      console.error("Файл найден");
      console.log("абсолютный путь запроса:", stylePath);
      res.download(stylePath, "style.css", (err) => {
        if (err) {
          console.error("Ошибка при скачивании файла:", err);
          res.status(500).send("Ошибка при скачивании файла");
        } else {
          console.log("Файл успешно отправлен для скачивания");
        }
      });
    }
  });
});


app.post("/api/admin", (req, res) => {
  res.status(200).send("Create admin request");
});

app.post("/api/user", (req, res) => {
  res.status(200).send("Create user request");
});

app.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`);
});

