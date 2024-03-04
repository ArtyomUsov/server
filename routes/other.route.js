const { Router } = require("express");
const path = require("path");
const fs = require("fs");
const router = new Router();

function sayMyInfo(req, res, next) {
  const { name, lastName, age } = req.query;

  console.log(`Меня зовут ${name} ${lastName}, мне ${age} лет`);
  next();
}

function sayMyInfoBody(req, res, next) {
  const { name, lastName, age } = req.body;
  console.log(name, lastName, age);
  console.log(`Меня зовут ${name} ${lastName}, мне ${age} лет`);
  next();
}

router.get("/hw4", sayMyInfo, (req, res) => {
  const { name, lastName, age } = req.query;

  res.status(200).send(`Hello ${name} ${lastName}`);
});
router.post("/hw4", sayMyInfoBody, (req, res) => {
  const { name, lastName, age } = req.body;

  res.status(200).send(`Hello ${name} ${lastName}`);
});

router.get("/cats", function (req, res) {
  res.status(200).send("something about cats");
});

router.get("/dogs", function (req, res) {
  res.status(200).send("something about dogs");
});

router.get("/mouses", function (req, res) {
  res.status(200).send("something about mouses");
});

router.get("/marmots", function (req, res) {
  res.status(200).send("something about marmots");
});

router.get("/capybaras", function (req, res) {
  res.status(200).send("something about capybaras");
});

router.get("/", function (req, res) {
  res.status(200).send("Request success");
});

router.get("/home", (req, res) => {
  res.status(200).send("Home page");
});

router.get("/about", (req, res) => {
  res.status(200).send("About page");
});

router.get("/src/header/style.css", (req, res) => {
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

router.post("/api/admin", (req, res) => {
  res.status(200).send("Create admin request");
});

router.post("/api/user", (req, res) => {
  res.status(200).send("Create user request");
});

module.exports = router;
