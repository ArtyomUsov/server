const { Router } = require("express");
const router = new Router();
const productController = require("../controllers/product.controller");

router.get("/", productController.getAll);

router.post("/", productController.post);

router.put("/", productController.put);

router.delete("/", productController.remove);

module.exports = router;
