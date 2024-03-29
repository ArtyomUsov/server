const { Router } = require("express");
const router = new Router();
const routerAdd = require("./add.route");
const routerCategories = require("./categories.route");
const routerComments = require("./comments.route");
const routerNews = require("./news.route");
const routerUser = require("./user.route");
const routerOther = require("./other.route");
const routerProduct = require("./product.route");

router.use("/add", routerAdd);
router.use("/categories", routerCategories);
router.use("/comments", routerComments);
router.use("/news", routerNews);
router.use("/user", routerUser);
router.use("/other", routerOther);

router.use("/materials", routerProduct);


module.exports = router;
