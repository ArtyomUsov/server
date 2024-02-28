const { Router } = require("express");
const router = new Router();

router.use((req, res, next) => {
  req.customData = {
    method: req.method,
    url: req.originalUrl,
  };
  next();
});

router.get("/", (req, res) => {
  const { method, url } = req.customData;
  res.status(200).send(`Method: ${method}, URL: ${url}`);
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
