const { Router } = require("express");
const router = new Router();

router.use((req, res, next) => {
  req.customData = {
    method: req.method,
    url: req.originalUrl,
  };
  next();
});

const news = [
  { id: 1, title: "Новость про котиков" },
  { id: 2, title: "Новость не про котиков" },
  { id: 3, title: "Новость про капибар" },
];

router.get("/", (req, res) => {
  const { method, url } = req.customData;
  res.status(200).send(`Method: ${method}, URL: ${url}`);
});

router.get("/:id", (req, res) => {
  const { method, url } = req.customData;
  const newsId = Number(req.params.id);
  const foundNews = news.find((item) => item.id === newsId);
  res.status(200).send(`Method: ${method}, URL: ${url} ,${foundNews.title}`);
});

router.post("/", (req, res) => {
  const { method, url } = req.customData;
  res.status(200).send(`Method: ${method}, URL: ${url}`);
});

router.put("/", (req, res) => {
  const { method, url } = req.customData;
  res.status(200).send(`Method: ${method}, URL: ${url}`);
});

router.delete("/", (req, res) => {
  const { method, url } = req.customData;
  res.status(200).send(`Method: ${method}, URL: ${url}`);
});

module.exports = router;
